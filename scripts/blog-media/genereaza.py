#!/usr/bin/env python3
"""Generează imaginile articolelor de blog în public/blog-media/{slug}/.

Totul pornește din date reale ale site-ului: PDF-urile oficiale din public/bac și
public/evaluare-nationala, calendarul din src/data și paginile publice ale site-ului.

    python3 scripts/blog-media/genereaza.py            # toate articolele din SPEC
    python3 scripts/blog-media/genereaza.py <slug>...   # doar unele

Tipuri de elemente (vezi SPEC):
  coperta    1200×630 JPG pentru antet, listă și og:image
  pagina     o pagină dintr-un PDF oficial, decupată (WebP)
  rasfoire   MP4 scurt, în buclă: subiect → barem (se vede ca un GIF)
  structura  infografic cu punctajul pe subiecte (WebP)
  pasi       infografic cu pași numerotați (WebP)
  cronologie SVG animat cu date din calendar
  pagina_site / scroll_site  captură sau derulare animată a unei pagini publice a site-ului
Necesită: pdftoppm, ffmpeg, Pillow, playwright (python).
"""
from __future__ import annotations

import html
import json
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

RADACINA = Path(__file__).resolve().parents[2]
PUBLIC = RADACINA / "public"
IESIRE = PUBLIC / "blog-media"
FONT = "/usr/share/fonts/truetype/google-fonts/ofl/firasans/FiraSans-Bold.ttf"
SITE = "https://meditatiidirect.ro"

NAVY = "#12306b"
NAVY2 = "#1d4fa3"
GALBEN = "#f6c344"
PORTOCALIU = "#ff7a45"
CULORI = ["#1d4fa3", "#3f7be0", "#f6c344", "#ff7a45", "#2bb39a", "#8b5cf6"]

CSS = """
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Fira Sans',sans-serif;color:#13213f}
.brand{font-weight:800;letter-spacing:.2px}
"""


# ---------------------------------------------------------------- utilitare
def randare_html(corp: str, latime: int, inaltime: int | None, iesire: Path, calitate=86):
    from playwright.sync_api import sync_playwright

    doc = f"<!doctype html><meta charset=utf-8><style>{CSS}</style>{corp}"
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": latime, "height": inaltime or 400}, device_scale_factor=1)
        pg.set_content(doc)
        pg.wait_for_timeout(150)
        png = iesire.with_suffix(".tmp.png")
        pg.screenshot(path=str(png), full_page=inaltime is None)
        b.close()
    salveaza(Image.open(png), iesire, calitate)
    png.unlink()


def salveaza(img: Image.Image, iesire: Path, calitate=82):
    iesire.parent.mkdir(parents=True, exist_ok=True)
    img = img.convert("RGB")
    if iesire.suffix == ".jpg":
        img.save(iesire, "JPEG", quality=calitate, optimize=True, progressive=True)
    else:
        img.save(iesire, "WEBP", quality=calitate, method=6)


def pagina_pdf(pdf: str, pagina: int = 1, dpi: int = 110) -> Image.Image:
    with tempfile.TemporaryDirectory() as d:
        subprocess.run(
            ["pdftoppm", "-f", str(pagina), "-l", str(pagina), "-r", str(dpi), "-png",
             str(PUBLIC / pdf.lstrip("/")), f"{d}/p"],
            check=True,
        )
        f = next(Path(d).glob("p*.png"))
        return Image.open(f).convert("RGB").copy()


def decupaj(img: Image.Image, sus: float, jos: float, margine: float = 0.07) -> Image.Image:
    """Păstrează fâșia [sus, jos] din înălțime și taie marginile albe laterale."""
    w, h = img.size
    return img.crop((int(w * margine), int(h * sus), int(w * (1 - margine)), int(h * jos)))


def data_uri(img: Image.Image) -> str:
    import base64
    import io

    buf = io.BytesIO()
    img.convert("RGB").save(buf, "JPEG", quality=85)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


def e(t: str) -> str:
    return html.escape(t)


# ---------------------------------------------------------------- elemente
def coperta(slug: str, el: dict):
    """Copertă în stilul imaginilor og ale site-ului; în dreapta, o pagină reală dacă e dată."""
    dreapta = ""
    if el.get("pdf"):
        img = decupaj(pagina_pdf(el["pdf"], el.get("pagina", 1), 80), el.get("sus", 0), el.get("sus", 0) + 0.62, 0.04)
        dreapta = f'<div class="foaie"><img src="{data_uri(img)}"></div>'
    elif el.get("imagine"):
        dreapta = f'<div class="ilustr"><img src="{data_uri(Image.open(RADACINA / el["imagine"]))}"></div>'
    chips = "".join(
        f'<div class="chip"><b>{e(a)}</b><span>{e(b)}</span></div>' for a, b in el.get("chips", [])
    )
    corp = f"""
<style>
.c{{width:1200px;height:630px;position:relative;overflow:hidden;
   background:linear-gradient(160deg,#0f2b5c 0%,{NAVY2} 100%);color:#fff;padding:64px 70px}}
.k{{color:#8fd0ff;font-size:30px;font-weight:600}}
h1{{font-size:{el.get('marime', 66)}px;line-height:1.05;font-weight:800;margin-top:18px;max-width:{720 if dreapta else 1000}px}}
h1 em{{font-style:normal;color:{GALBEN}}}
.chips{{margin-top:30px;display:flex;flex-direction:column;gap:12px;max-width:640px}}
.chip{{background:#fff;color:{NAVY};border-radius:14px;padding:12px 22px;font-size:25px;display:flex;gap:18px}}
.chip b{{min-width:150px}}
.brand{{position:absolute;left:70px;bottom:44px;font-size:34px;color:#fff}}
.foaie{{position:absolute;right:-20px;top:60px;width:390px;transform:rotate(5deg);
   background:#fff;border-radius:10px;box-shadow:0 30px 60px rgba(0,0,0,.35);overflow:hidden;height:470px}}
.foaie img{{width:100%;display:block}}
.ilustr{{position:absolute;right:20px;top:60px;width:430px;border-radius:24px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,.3)}}
.ilustr img{{width:100%;display:block}}
</style>
<div class="c"><div class="k">{e(el['kicker'])}</div><h1>{el['titlu']}</h1>
<div class="chips">{chips}</div><div class="brand">MeditatiiDirect.ro</div>{dreapta}</div>"""
    randare_html(corp, 1200, 630, IESIRE / slug / "coperta.jpg", 84)


def pagina(slug: str, el: dict):
    img = decupaj(pagina_pdf(el["pdf"], el.get("pagina", 1), el.get("dpi", 110)), el.get("sus", 0), el.get("jos", 0.62), el.get("margine", 0.07))
    salveaza(img, IESIRE / slug / el["fisier"], 80)


def rasfoire(slug: str, el: dict):
    """MP4 în buclă: subiect → barem → subiect, cu etichete; ~9 s, fără sunet."""
    cadre = []
    for pdf, eticheta, cheie in ((el["subiect"], "SUBIECT", "subiect"), (el["barem"], "BAREM", "barem")):
        pag, sus, jos = el.get(f"{cheie}_pagina", 1), el.get(f"{cheie}_sus", el.get("sus", 0)), el.get(f"{cheie}_jos", el.get("jos", 0.5))
        img = decupaj(pagina_pdf(pdf, pag, 84), sus, jos)
        cadre.append((img, eticheta))
    w = max(i.size[0] for i, _ in cadre)
    h = max(i.size[1] for i, _ in cadre)
    w, h = w - w % 2, h - h % 2
    with tempfile.TemporaryDirectory() as d:
        intrari = []
        for k, (img, et) in enumerate(cadre):
            pan = Image.new("RGB", (w, h), "white")
            pan.paste(img, (0, 0))
            f = Path(d) / f"{k}.png"
            pan.save(f)
            intrari += ["-loop", "1", "-t", "4.6", "-i", str(f)]
        intrari += ["-loop", "1", "-t", "4.6", "-i", str(Path(d) / "0.png")]
        eticheta = lambda t: (
            f"drawtext=fontfile={FONT}:text='{t}':x=w-tw-24:y=20:fontsize=30:fontcolor=white:"
            f"box=1:boxcolor={NAVY}@0.92:boxborderw=12"
        )
        filtru = (
            f"[0]{eticheta('SUBIECT')}[a];[1]{eticheta('BAREM')}[b];[2]{eticheta('SUBIECT')}[c];"
            "[a][b]xfade=transition=slideleft:duration=0.6:offset=4[ab];"
            "[ab][c]xfade=transition=slideright:duration=0.6:offset=8,format=yuv420p,fps=24[v]"
        )
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", *intrari, "-filter_complex", filtru, "-map", "[v]",
             "-c:v", "libx264", "-crf", "30", "-preset", "slow", "-movflags", "+faststart", "-an",
             str(IESIRE / slug / el["fisier"])],
            check=True,
        )


def structura(slug: str, el: dict):
    """Bară cu punctajul pe subiecte + cardurile cu ce conține fiecare subiect."""
    total = sum(p for _, p, _ in el["parti"])
    bara = "".join(
        f'<div style="flex:{p};background:{CULORI[i % len(CULORI)]}" class="seg"><b>{p}</b></div>'
        for i, (_, p, _) in enumerate(el["parti"])
    )
    carduri = "".join(
        f'<div class="card"><i style="background:{CULORI[i % len(CULORI)]}"></i><div><b>{e(n)} · {p} p</b>'
        f'<span>{e(d)}</span></div></div>'
        for i, (n, p, d) in enumerate(el["parti"])
    )
    corp = f"""
<style>
.w{{width:1000px;background:#f3f6fc;padding:40px 44px;border-radius:0}}
h2{{font-size:34px;font-weight:800;color:{NAVY}}}
.sub{{font-size:21px;color:#4a5878;margin-top:6px}}
.bar{{display:flex;height:64px;border-radius:14px;overflow:hidden;margin-top:26px;gap:3px}}
.seg{{display:flex;align-items:center;justify-content:center;color:#fff;font-size:26px}}
.seg:nth-child(3n) b{{color:{NAVY}}}
.grid{{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:24px}}
.card{{background:#fff;border-radius:14px;padding:16px 18px;display:flex;gap:14px;align-items:flex-start;box-shadow:0 2px 8px rgba(18,48,107,.08)}}
.card i{{width:16px;height:16px;border-radius:50%;flex:none;margin-top:6px}}
.card b{{display:block;font-size:22px;color:{NAVY}}}
.card span{{display:block;font-size:19px;color:#4a5878;margin-top:4px;line-height:1.3}}
.f{{margin-top:22px;font-size:18px;color:#6b7896;display:flex;justify-content:space-between}}
</style>
<div class="w"><h2>{e(el['titlu'])}</h2><div class="sub">{e(el.get('sub', ''))}</div>
<div class="bar">{bara}</div><div class="grid">{carduri}</div>
<div class="f"><span>{e(el.get('nota', f'Total {total} de puncte'))}</span><span class="brand">MeditatiiDirect.ro</span></div></div>"""
    randare_html(corp, 1000, None, IESIRE / slug / el["fisier"])


def pasi(slug: str, el: dict):
    carduri = "".join(
        f'<div class="p"><div class="n">{k + 1}</div><div><b>{e(t)}</b><span>{e(d)}</span></div></div>'
        for k, (t, d) in enumerate(el["pasi"])
    )
    corp = f"""
<style>
.w{{width:1000px;background:linear-gradient(180deg,#f3f6fc,#e8eefb);padding:40px 44px}}
h2{{font-size:34px;font-weight:800;color:{NAVY}}}
.sub{{font-size:21px;color:#4a5878;margin-top:6px}}
.l{{margin-top:24px;display:flex;flex-direction:column;gap:12px}}
.p{{background:#fff;border-radius:16px;padding:16px 20px;display:flex;gap:18px;align-items:center;box-shadow:0 2px 8px rgba(18,48,107,.08)}}
.n{{width:52px;height:52px;flex:none;border-radius:50%;background:{NAVY2};color:#fff;font-size:26px;font-weight:800;display:flex;align-items:center;justify-content:center}}
.p:nth-child(even) .n{{background:{GALBEN};color:{NAVY}}}
.p b{{display:block;font-size:23px;color:{NAVY}}}
.p span{{display:block;font-size:19px;color:#4a5878;margin-top:3px;line-height:1.3}}
.f{{margin-top:20px;text-align:right;font-size:18px;color:#6b7896}}
</style>
<div class="w"><h2>{e(el['titlu'])}</h2><div class="sub">{e(el.get('sub', ''))}</div>
<div class="l">{carduri}</div><div class="f brand">MeditatiiDirect.ro</div></div>"""
    randare_html(corp, 1000, None, IESIRE / slug / el["fisier"])


def cronologie(slug: str, el: dict):
    """SVG animat: linia timpului se umple, iar evenimentul-cheie pulsează."""
    puncte = el["puncte"]  # (data, descriere, cheie?)
    n = len(puncte)
    x0, x1, y = 70, 930, 190
    xs = [x0 + (x1 - x0) * k / (n - 1) for k in range(n)]
    cheie = next((k for k, p in enumerate(puncte) if len(p) > 2 and p[2]), n - 1)
    lung = x1 - x0
    noduri = []
    for k, (x, p) in enumerate(zip(xs, puncte)):
        sus = k % 2 == 1
        ty, sy = (y - 48, y - 72) if sus else (y + 46, y + 68)
        anc = "start" if k == 0 else "end" if k == n - 1 else "middle"
        if k == cheie:
            noduri.append(
                f'<circle class="pulse" cx="{x:.0f}" cy="{y}" r="13"/>'
                f'<circle class="key" cx="{x:.0f}" cy="{y}" r="13"/>'
            )
        else:
            noduri.append(f'<circle class="pt" cx="{x:.0f}" cy="{y}" r="10" style="animation-delay:{k * .35:.2f}s"/>')
        noduri.append(
            f'<text class="lbl{" kl" if k == cheie else ""}" x="{x:.0f}" y="{ty}" text-anchor="{anc}">{e(p[0])}</text>'
            f'<text class="sm" x="{x:.0f}" y="{sy if sus else sy}" text-anchor="{anc}">{e(p[1])}</text>'
        )
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 340" width="1000" height="340" role="img" aria-labelledby="t">
  <title id="t">{e(el['titlu'])}</title>
  <style>
    .lbl{{font:700 19px 'Fira Sans',system-ui,Segoe UI,Arial,sans-serif;fill:{NAVY}}}
    .kl{{fill:#d9531e}}
    .sm{{font:16px 'Fira Sans',system-ui,Segoe UI,Arial,sans-serif;fill:#4a5878}}
    .hd{{font:800 26px 'Fira Sans',system-ui,Segoe UI,Arial,sans-serif;fill:{NAVY}}}
    .br{{font:700 15px 'Fira Sans',system-ui,Segoe UI,Arial,sans-serif;fill:#8a96b3}}
    .ax{{stroke:#cfd9ee;stroke-width:8;stroke-linecap:round}}
    .done{{stroke:{NAVY2};stroke-width:8;stroke-linecap:round;stroke-dasharray:{lung:.0f};stroke-dashoffset:{lung:.0f};animation:fill 7s ease-in-out infinite}}
    .pt{{fill:#fff;stroke:{NAVY2};stroke-width:5}}
    .key{{fill:{PORTOCALIU};stroke:#fff;stroke-width:4}}
    .pulse{{fill:none;stroke:{PORTOCALIU};stroke-width:4;transform-box:fill-box;transform-origin:center;animation:p 1.6s ease-out infinite}}
    @keyframes fill{{0%{{stroke-dashoffset:{lung:.0f}}}60%,100%{{stroke-dashoffset:0}}}}
    @keyframes p{{0%{{transform:scale(.7);opacity:1}}100%{{transform:scale(2.4);opacity:0}}}}
  </style>
  <rect width="1000" height="340" rx="20" fill="#f3f6fc"/>
  <text class="hd" x="40" y="52">{e(el['titlu'])}</text>
  <line class="ax" x1="{x0}" y1="{y}" x2="{x1}" y2="{y}"/>
  <line class="done" x1="{x0}" y1="{y}" x2="{x1}" y2="{y}"/>
  {''.join(noduri)}
  <text class="br" x="960" y="322" text-anchor="end">{e(el.get('sursa', 'MeditatiiDirect.ro'))}</text>
</svg>
"""
    f = IESIRE / slug / el["fisier"]
    f.parent.mkdir(parents=True, exist_ok=True)
    f.write_text(svg, encoding="utf-8")


def _captura_site(cale: str, latime: int, inaltime_max: int) -> Image.Image:
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        b = p.chromium.launch()
        ctx = b.new_context(viewport={"width": latime, "height": 900}, device_scale_factor=1, locale="ro-RO")
        ctx.add_cookies([{"name": "md_lang", "value": "ro", "url": SITE}])
        pg = ctx.new_page()
        pg.goto(SITE + cale, wait_until="networkidle", timeout=60000)
        pg.add_style_tag(content="ins.adsbygoogle,[id*=cookie],[class*=cookie],[class*=Cookie]{display:none!important}")
        pg.wait_for_timeout(800)
        with tempfile.TemporaryDirectory() as d:
            f = Path(d) / "s.png"
            pg.screenshot(path=str(f), full_page=True)
            img = Image.open(f).convert("RGB").copy()
        b.close()
    return img.crop((0, 0, img.size[0], min(img.size[1], inaltime_max)))


def pagina_site(slug: str, el: dict):
    img = _captura_site(el["cale"], el.get("latime", 1100), el.get("inaltime", 760))
    salveaza(img, IESIRE / slug / el["fisier"], 80)


def scroll_site(slug: str, el: dict):
    """Derulare lentă prin pagina publică (MP4 în buclă), ca un GIF demonstrativ."""
    lat, fer = el.get("latime", 900), el.get("fereastra", 560)
    img = _captura_site(el["cale"], lat, el.get("inaltime", 2600))
    w, h = img.size
    w, h = w - w % 2, h - h % 2
    dur = el.get("durata", 10)
    with tempfile.TemporaryDirectory() as d:
        f = Path(d) / "s.png"
        img.crop((0, 0, w, h)).save(f)
        drum = h - fer
        filtru = (
            f"crop={w}:{fer}:0:'min({drum},max(0,(t-1)/{dur - 2}*{drum}))',"
            f"scale={min(w, 900)}:-2,format=yuv420p,fps=24"
        )
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-loop", "1", "-t", str(dur), "-i", str(f), "-vf", filtru,
             "-c:v", "libx264", "-crf", "31", "-preset", "slow", "-movflags", "+faststart", "-an",
             str(IESIRE / slug / el["fisier"])],
            check=True,
        )


TIPURI = {
    "coperta": coperta, "pagina": pagina, "rasfoire": rasfoire, "structura": structura,
    "pasi": pasi, "cronologie": cronologie, "pagina_site": pagina_site, "scroll_site": scroll_site,
}


def main(selectie: list[str]):
    spec = json.loads((Path(__file__).parent / "spec.json").read_text(encoding="utf-8"))
    for slug, elemente in spec.items():
        if selectie and slug not in selectie:
            continue
        for el in elemente:
            TIPURI[el["tip"]](slug, el)
            print("ok", slug, el.get("fisier", "coperta.jpg"))


if __name__ == "__main__":
    main(sys.argv[1:])
