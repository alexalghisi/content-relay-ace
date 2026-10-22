#!/usr/bin/env python3
"""
Audit al subiectelor de ADMITERE publicate (tabelul admission_papers, bucket admitere-pdfs).
Citește TEXTUL fiecărui PDF și sursa declarată, apoi scrie faptele în
src/data/admitere-verificare.generated.json. Deciziile (ce afișăm, cu ce etichetă) sunt în
src/lib/admitere-verificare.ts, pure și testate. Read-only: nu modifică tabelul și nu urcă fișiere.

Rulează:  set -a; . ./.env; set +a; python3 -I scripts/audit-admitere-pdfs.py
"""
import json, os, re, subprocess, tempfile, unicodedata, urllib.request, datetime
from urllib.parse import urlparse

SB = os.environ["SUPABASE_URL"].rstrip("/")
KEY = os.environ["SUPABASE_PUBLISHABLE_KEY"]
OUT = os.path.join(os.path.dirname(__file__), "..", "src", "data", "admitere-verificare.generated.json")


def norm(s: str) -> str:
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return re.sub(r"\s+", " ", s)


def rows():
    q = "select=storage_path,university_slug,subject_slug,year,session,document_type,description&is_published=eq.true"
    req = urllib.request.Request(f"{SB}/rest/v1/admission_papers?{q}", headers={"apikey": KEY})
    return json.load(urllib.request.urlopen(req, timeout=60))


def text_of(path: str) -> str:
    url = f"{SB}/storage/v1/object/public/admitere-pdfs/{urllib.request.quote(path)}"
    with tempfile.TemporaryDirectory() as d:
        f = os.path.join(d, "a.pdf")
        try:
            with urllib.request.urlopen(url, timeout=60) as r, open(f, "wb") as w:
                w.write(r.read())
            out = subprocess.run(["pdftotext", "-l", "2", f, "-"], capture_output=True, timeout=60)
            return out.stdout.decode("utf-8", "replace")
        except Exception:
            return ""


def main() -> None:
    files = []
    for r in rows():
        raw = text_of(r["storage_path"])
        t = norm(raw)
        m = re.search(r"https?://\S+", r.get("description") or "")
        sursa = m.group(0) if m else None
        ani = sorted({int(y) for y in re.findall(r"\b(20[12]\d)\b", t[:1500])})
        files.append({
            "path": r["storage_path"],
            "universitate": r["university_slug"],
            "materie": r["subject_slug"],
            "an": r["year"],
            "sesiune": r["session"],
            "tip": r["document_type"],
            "text": len(t.strip()) > 40,
            "ani_document": ani,
            "simulare_document": bool(re.search(r"simulare|presimulare", t[:600])) or bool(re.search(r"simulare", (r["session"] or "") + (sursa or "").lower())),
            "sursa_url": sursa,
            "sursa_domeniu": urlparse(sursa).hostname if sursa else None,
        })
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"generat": datetime.date.today().isoformat(), "fisiere": files}, f, ensure_ascii=False, separators=(",", ":"))
        f.write("\n")
    print(f"{len(files)} documente → {OUT}")


if __name__ == "__main__":
    main()
