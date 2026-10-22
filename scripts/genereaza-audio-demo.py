"""Generates the voiced demo lessons (teacher + student) shown on the home page.

Run: python3 scripts/genereaza-audio-demo.py   (needs bun, ffmpeg, `pip install edge-tts`)
Writes public/demo-lectii/<cheie>.mp3 and src/components/profesor-ai/demo-audio.generated.ts.
Existing clips are reused, so only new or changed lines are synthesized.
"""
import hashlib, json, os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "demo-lectii")
CACHE = os.path.join(ROOT, ".cache-audio-demo")
VOCI = {"prof": ("ro-RO-AlinaNeural", "+0%", "+0Hz"), "elev": ("ro-RO-EmilNeural", "+6%", "+22Hz")}
PAUZA = 0.4

# How symbols and formulas are read aloud (text on screen stays unchanged).
ROSTIRE = {
    "Nu înțeleg ecuațiile de gradul întâi. Gen 3x + 5 = 20.": "Nu înțeleg ecuațiile de gradul întâi. Gen trei x plus cinci egal douăzeci.",
    "Ne gândim la ecuație ca la o balanță. Ce putem scoate din ambele părți ca să rămână doar 3x?": "Ne gândim la ecuație ca la o balanță. Ce putem scoate din ambele părți ca să rămână doar trei x?",
    "Scad 5? Și rămâne 3x = 15.": "Scad cinci? Și rămâne trei x egal cincisprezece.",
    "x = 5.": "x egal cinci.",
    "Perfect. Verificăm: 3 ori 5 plus 5 face 20. Încearcă singur: 2x − 4 = 10.": "Perfect. Verificăm: trei ori cinci plus cinci face douăzeci. Încearcă singur: doi x minus patru egal zece.",
    "Adun 4, 2x = 14, deci x = 7.": "Adun patru, doi x egal paisprezece, deci x egal șapte.",
    "O mașină merge 120 km în 2 ore. Care e viteza?": "O mașină merge o sută douăzeci de kilometri în două ore. Care e viteza?",
    "Exact! Reține trucul: din km/h în m/s împarți la 3,6.": "Exact! Reține trucul: din kilometri pe oră în metri pe secundă împarți la trei virgulă șase.",
    "Am f(x) = x³ − 3x. Cum aflu punctele de extrem?": "Am f de x egal x la puterea a treia minus trei x. Cum aflu punctele de extrem?",
    "Extremele apar unde derivata se anulează. Calculează tu f′(x).": "Extremele apar unde derivata se anulează. Calculează tu f prim de x.",
    "f′(x) = 3x² − 3.": "f prim de x egal trei x pătrat minus trei.",
    "La x = 1 și x = −1.": "La x egal unu și x egal minus unu.",
    "Acum semnul: înainte de −1 derivata e pozitivă, între −1 și 1 negativă, după 1 pozitivă. Ce tip de punct e −1?": "Acum semnul: înainte de minus unu derivata e pozitivă, între minus unu și unu negativă, după unu pozitivă. Ce tip de punct e minus unu?",
    "Exact. Maxim în −1, cu f(−1) = 2, și minim în 1, cu f(1) = −2. Așa se punctează complet la BAC.": "Exact. Maxim în minus unu, cu f de minus unu egal doi, și minim în unu, cu f de unu egal minus doi. Așa se punctează complet la bac.",
    "Câte grame de apă se obțin din 4 g de hidrogen?": "Câte grame de apă se obțin din patru grame de hidrogen?",
    "2H₂ + O₂ → 2H₂O.": "Doi H doi plus O doi dau doi H doi O.",
    "Perfect. Câți moli înseamnă 4 g de H₂, dacă masa molară e 2?": "Perfect. Câți moli înseamnă patru grame de H doi, dacă masa molară e doi?",
    "Raportul dintre H₂ și H₂O e 2 la 2. Câți moli de apă rezultă?": "Raportul dintre H doi și apă e doi la doi. Câți moli de apă rezultă?",
    "Tot 2 moli, deci 2 ori 18 = 36 g.": "Tot doi moli, deci doi ori optsprezece, adică treizeci și șase de grame.",
    "Exact, asta e cazul de bază. Altfel, funcția se cheamă pe ea însăși cu n − 1.": "Exact, asta e cazul de bază. Altfel, funcția se cheamă pe ea însăși cu n minus unu.",
    "Deci fact(3) e 3 ori fact(2)?": "Deci fact de trei e trei ori fact de doi?",
    "3 · 2 · 1 · fact(0), adică 6.": "Trei ori doi ori unu ori fact de zero, adică șase.",
    "Ochii căprui (A) domină pe cei albaștri (a). Doi părinți Aa. Ce copii pot avea?": "Ochii căprui, A mare, domină pe cei albaștri, a mic. Doi părinți A mare a mic. Ce copii pot avea?",
    "A și a.": "A mare și a mic.",
    "Un AA, două Aa și un aa.": "Un A mare A mare, doi A mare a mic și un a mic a mic.",
    "Doar aa, deci 25%.": "Doar a mic a mic, deci douăzeci și cinci la sută.",
    "Exact: fenotipic 3 la 1, căprui față de albaștri. Așa se rezolvă subiectul III.": "Exact: fenotipic trei la unu, căprui față de albaștri. Așa se rezolvă subiectul trei.",
    "După schimbare: 110 lei și 80 de produse, deci 8.800 lei.": "După schimbare: o sută zece lei și optzeci de produse, deci opt mii opt sute de lei.",
}

def dur(f):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).strip())

def clip(cine, text):
    voce, rate, pitch = VOCI[cine]
    rostit = ROSTIRE.get(text, text)
    h = hashlib.sha1(f"{voce}|{rate}|{pitch}|{rostit}".encode()).hexdigest()[:16]
    mp3, wav = os.path.join(CACHE, h + ".mp3"), os.path.join(CACHE, h + ".wav")
    if not os.path.exists(wav):
        subprocess.run(["edge-tts", "--voice", voce, f"--rate={rate}", f"--pitch={pitch}", "--text", rostit, "--write-media", mp3], check=True, capture_output=True)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", mp3, "-af",
                        "silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse",
                        "-ar", "24000", "-ac", "1", wav], check=True)
    return wav

def main():
    os.makedirs(OUT, exist_ok=True); os.makedirs(CACHE, exist_ok=True)
    dump = os.path.join(CACHE, "dump.ts")
    open(dump, "w").write('import { LECTII, cheieLectie } from "../src/components/profesor-ai/demo-repertoriu";\n'
                          'console.log(JSON.stringify(LECTII.map((l) => ({ k: cheieLectie(l), replici: l.replici }))));\n')
    lectii = json.loads(subprocess.check_output(["bun", dump], cwd=ROOT))
    timpi = {}
    for l in lectii:
        t, seg, lista = 0.3, [], []
        for r in l["replici"]:
            w = clip(r["cine"], r["text"]); d = dur(w)
            seg.append((w, t)); lista.append([round(t, 2), round(t + d, 2)])
            t += d + PAUZA
        total = t + 0.6
        cmd = ["ffmpeg", "-y", "-loglevel", "error"]
        for w, _ in seg: cmd += ["-i", w]
        fl = ";".join(f"[{i}]adelay={int(s*1000)}[x{i}]" for i, (_, s) in enumerate(seg))
        fl += ";" + "".join(f"[x{i}]" for i in range(len(seg))) + f"amix=inputs={len(seg)}:normalize=0,apad=whole_dur={total:.2f},loudnorm=I=-16:TP=-1.5[o]"
        cmd += ["-filter_complex", fl, "-map", "[o]", "-ar", "24000", "-ac", "1", "-c:a", "libmp3lame", "-b:a", "48k", "-t", f"{total:.2f}",
                os.path.join(OUT, l["k"] + ".mp3")]
        subprocess.run(cmd, check=True)
        timpi[l["k"]] = {"durata": round(total, 2), "replici": lista}
        print(l["k"], round(total, 1), "s", file=sys.stderr)
    ts = ("// Generated by scripts/genereaza-audio-demo.py — do not edit by hand.\n"
          "// [start, end] in seconds for each line of the lesson, matching public/demo-lectii/<cheie>.mp3.\n"
          "export const AUDIO_DEMO: Record<string, { durata: number; replici: [number, number][] }> = "
          + json.dumps(timpi, ensure_ascii=False, indent=1) + ";\n")
    open(os.path.join(ROOT, "src", "components", "profesor-ai", "demo-audio.generated.ts"), "w").write(ts)

main()
