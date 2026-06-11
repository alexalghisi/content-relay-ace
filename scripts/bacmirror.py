#!/usr/bin/env python3
"""Crawl subiectebac.ro year pages and feed PDFs through the verified pipeline."""
import re, sys, requests
sys.path.insert(0, "/tmp")
from bacfill import fill_combo, log, UA

BASE = "https://subiectebac.ro"
SECTIONS = {
    "romana":        ("romana", "romana"),
    "matematica-m1": ("mate", "matematica"),
    "matematica-m2": ("mate", "matematica"),
    "matematica-m3": ("mate", "matematica"),
    "istorie":       ("istorie", "istorie"),
    "biologie":      ("bio910", "bio9-10"),
    "fizica":        ("fizica", "fizica"),
    "informatica":   ("info", "info"),
    "logica":        ("logica", "logica"),
    "chimie":        ("chimie", "chimie"),
    "geografie":     ("geo", "geo"),
    "psihologie":    ("psiho", "psiho"),
    "sociologie":    ("socio", "socio"),
    "filosofie":     ("filosofie", "filosofie"),
    "economie":      ("economie", "economie"),
}

def year_pdf_urls(sdir, stub, an):
    for cand in (f"{BASE}/{sdir}/{stub}_{an}.html", f"{BASE}/{sdir}/{stub}{an}.html"):
        try:
            r = requests.get(cand, headers=UA, timeout=15)
        except Exception:
            continue
        if r.status_code != 200: continue
        hrefs = re.findall(r'href\s*=\s*"([^"]+\.pdf)"', r.text, re.I)
        return [h if h.startswith("http") else f"{BASE}/{sdir}/{h}" for h in hrefs]
    return []

def main(years):
    total = 0
    for an in years:
        for slug, (sdir, stub) in SECTIONS.items():
            urls = year_pdf_urls(sdir, stub, an)
            if not urls:
                log(event="no_mirror_page", slug=slug, an=an); continue
            total += fill_combo(slug, an, urls)
    log(event="mirror_done", uploaded_total=total)

if __name__ == "__main__":
    main([int(y) for y in sys.argv[1].split(",")])
