#!/usr/bin/env python3
"""
Audit every BAC PDF hosted in the public `bac-pdfs` bucket and write the verified
metadata to src/data/bac-verificare.generated.json.

For each file we read the document TEXT (pdftotext) and extract what the paper says
about itself: exam year, proba, subject/specialisation line, variant, simulation flag.
A subject and a barem are shown as a pair only when the barem's specialisation and
variant match the subject's. Nothing is invented: unknown fields stay null.

Usage:  set -a; . ./.env; set +a; python3 -I scripts/audit-bac-pdfs.py
Needs:  pdftotext (poppler-utils). Read-only — never uploads or deletes.
"""
import json, os, re, subprocess, sys, tempfile, unicodedata, urllib.request

SB = os.environ["SUPABASE_URL"].rstrip("/")
KEY = os.environ["SUPABASE_PUBLISHABLE_KEY"]
OUT = os.path.join(os.path.dirname(__file__), "..", "src", "data", "bac-verificare.generated.json")
NAME = re.compile(r"^([a-z][a-z0-9-]*)/(\d{4})/(iunie|august|speciala|simulare)-(subiect|barem)\.pdf$")


def norm(s: str) -> str:
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return re.sub(r"\s+", " ", s)


def list_names() -> list[str]:
    req = urllib.request.Request(
        f"{SB}/rest/v1/rpc/bac_pdf_names",
        data=json.dumps({"_prefix": ""}).encode(),
        headers={"apikey": KEY, "Content-Type": "application/json"},
    )
    return json.load(urllib.request.urlopen(req, timeout=60))


def text_of(path: str) -> str:
    url = f"{SB}/storage/v1/object/public/bac-pdfs/{path}"
    with tempfile.TemporaryDirectory() as d:
        f = os.path.join(d, "a.pdf")
        with urllib.request.urlopen(url, timeout=60) as r, open(f, "wb") as w:
            w.write(r.read())
        try:
            out = subprocess.run(["pdftotext", "-l", "1", f, "-"], capture_output=True, timeout=60)
            return out.stdout.decode("utf-8", "replace")
        except Exception:
            return ""


SPECIALIZARI = [
    ("mate-info", r"mate(matica)?[ -_]?info|matematica-informatica"),
    ("st-nat", r"st(iinte|iintele)?[ -_.]?(ale )?nat(urii)?\b|stiintele naturii|stiinte ale naturii"),
    ("tehnologic", r"m_tehnologic|filiera tehnologica"),
    ("pedagogic", r"m_pedagogic|pedagogic"),
    ("uman", r"profil(ul)? uman|filologie|stiinte sociale"),
]


def specializare(t: str) -> str | None:
    # first lines carry the header; the barem repeats the same header
    head = t[:900]
    for key, rx in SPECIALIZARI:
        if re.search(rx, head):
            return key
    return None


def meta(path: str, raw: str) -> dict:
    t = norm(raw)
    m = NAME.match(path)
    an_doc = None
    y = re.search(r"bacalaureat\s*(?:\w+\s*){0,3}?(20\d\d)", t) or re.search(r"\b(20[0-3]\d)\b", t[:600])
    if y:
        an_doc = int(y.group(1))
    var = re.search(r"varianta\s*(?:nr\.?\s*)?(\d{1,3})", t)
    tip_doc = "barem" if re.search(r"barem", t[:1500]) else ("subiect" if t.strip() else None)
    simulare = bool(re.search(r"simulare", t[:600]))
    model = bool(re.search(r"\bmodel\b", t[:500]))
    oficial = bool(re.search(r"centrul national (de|pentru)|ministerul educatiei", t[:400]))
    return {
        "path": path,
        "materie": m.group(1),
        "an": int(m.group(2)),
        "sesiune": m.group(3),
        "tip": m.group(4),
        "text": bool(t.strip()),
        "an_document": an_doc,
        "tip_document": tip_doc,
        "specializare": specializare(t),
        "varianta": int(var.group(1)) if var else None,
        "simulare_document": simulare,
        "model_document": model,
        "emitent_oficial": oficial,
    }


def main() -> None:
    names = [n for n in list_names() if NAME.match(n)]
    files = []
    for i, n in enumerate(sorted(names)):
        files.append(meta(n, text_of(n)))
        if i % 25 == 0:
            print(f"{i}/{len(names)}", file=sys.stderr)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"generat": __import__("datetime").date.today().isoformat(), "fisiere": files}, f, ensure_ascii=False, separators=(",", ":"))
        f.write("\n")
    print(f"{len(files)} fișiere → {OUT}")


if __name__ == "__main__":
    main()
