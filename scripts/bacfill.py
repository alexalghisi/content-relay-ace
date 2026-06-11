#!/usr/bin/env python3
"""
Rigorous BAC archive refill 2001-2014.
- candidates discovered on trusted mirrors / via search
- every PDF downloaded and verified from its TEXT (pypdf):
    * "bacalaureat" + exact year + subject keywords
    * subiect vs barem decided from document text, not URL
- subject+barem uploaded as a MATCHED PAIR (same variant number)
- model/simulation papers rejected for the main slots
Upload path: bac-pdfs/{slug}/{an}/{session}-{tip}.pdf
"""
import io, json, os, re, time, unicodedata
import requests
from pypdf import PdfReader

SB_URL = os.environ["SUPABASE_URL"].rstrip("/")
SB_KEY = os.environ["SUPABASE_SERVICE_ROLE_KEY"]
FC_KEY = os.environ.get("FIRECRAWL_API_KEY", "")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) MeditatiiDirect-archiver"}

def norm(s: str) -> str:
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"\s+", " ", s.lower())

def squash(s: str) -> str:
    return re.sub(r"[^a-z0-9]", "", norm(s))

# squashed-text requirements per slug
SLUG_REQ = {
    "romana":        [["limbasiliteraturaromana"]],
    "matematica-m1": [["matematic"], ["mateinfo", "matematicainformatica"]],
    "matematica-m2": [["matematic"], ["stnat", "stiintelenaturii", "stiintealenaturii"]],
    "matematica-m3": [["matematic"], ["tehnologic", "pedagogic"]],
    "istorie":       [["istorie"]],
    "biologie":      [["biologie"]],
    "chimie":        [["chimie"]],
    "fizica":        [["fizica"]],
    "informatica":   [["informatica"]],
    "geografie":     [["geografie"]],
    "logica":        [["logica"]],
    "psihologie":    [["psihologie"]],
    "sociologie":    [["sociologie"]],
    "economie":      [["economie"]],
    "filosofie":     [["filosofie"]],
}
SLUG_PREF_URL = {
    "romana": r"real[_-]?tehn",
    "matematica-m1": r"mate[\s_-]?info",
    "matematica-m2": r"st[\s_-]?nat",
    "matematica-m3": r"tehnologic",
    "fizica": r"teoretic",
    "informatica": r"(sp[_-]?mi[_-]?c|_c_|_c\.pdf)",
    "chimie": r"organica",
    "biologie": r"veg",
}
REJECT_URL = re.compile(r"model|simul|evaluare[_-]?nationala|rezerv|olimpiad|concurs", re.I)

def fetch(url, timeout=25):
    try:
        r = requests.get(url, headers=UA, timeout=timeout, allow_redirects=True)
        return r.content if r.status_code == 200 else None
    except Exception:
        return None

def pdf_text(buf, pages=2):
    try:
        rd = PdfReader(io.BytesIO(buf))
        out = []
        for p in rd.pages[:pages]:
            try: out.append(p.extract_text() or "")
            except Exception: pass
        return " ".join(out)
    except Exception:
        return ""

def verify(buf, slug, an):
    """Return (tip, squashed_text) or None."""
    if not buf or len(buf) < 5000 or buf[:4] != b"%PDF": return None
    f = squash(pdf_text(buf))
    if not f: return None
    if "bacalaureat" not in f: return None
    if str(an) not in f: return None
    if "clasaaviii" in f or "evaluareanationala" in f: return None
    if "model" in f[:600]: return None       # header says it's a model paper
    if "simulare" in f[:600]: return None    # header says simulation
    for group in SLUG_REQ[slug]:
        if not any(k in f for k in group): return None
    tip = "barem" if ("baremdeevaluare" in f or "baremdecorectare" in f or "baremdenotare" in f) else "subiect"
    if tip == "subiect" and ("varianta" not in f and "subiect" not in f): return None
    return tip, f

def variant_of(url, text_sq):
    m = re.search(r"(?:var|bar)[_-]?(?:ianta)?[_-]?0?(\d{1,3})", url, re.I)
    if m: return int(m.group(1))
    m = re.search(r"varianta0?(\d{1,3})", text_sq[:800])
    if m: return int(m.group(1))
    return -1

def session_of(url):
    u = norm(url)
    if "august" in u or "sept" in u or "toamn" in u: return "august"
    if "special" in u: return "speciala"
    return "iunie"

def upload(path, buf):
    r = requests.post(f"{SB_URL}/storage/v1/object/bac-pdfs/{path}",
        headers={"Authorization": f"Bearer {SB_KEY}", "Content-Type": "application/pdf", "x-upsert": "true"},
        data=buf, timeout=60)
    return r.status_code in (200, 201)

def storage_exists(prefix):
    r = requests.post(f"{SB_URL}/storage/v1/object/list/bac-pdfs",
        headers={"Authorization": f"Bearer {SB_KEY}", "Content-Type": "application/json"},
        json={"prefix": prefix, "limit": 100}, timeout=30)
    return {x["name"] for x in r.json() if x.get("id")} if r.status_code == 200 else set()

def fc_search(q, limit=10):
    if not FC_KEY: return []
    try:
        r = requests.post("https://api.firecrawl.dev/v2/search",
            headers={"Authorization": f"Bearer {FC_KEY}", "Content-Type": "application/json"},
            json={"query": q, "limit": limit}, timeout=20)
        if r.status_code != 200: return []
        d = r.json().get("data")
        arr = d if isinstance(d, list) else (d or {}).get("web", [])
        return [x.get("url") for x in arr if x.get("url")]
    except Exception:
        return []

def log(**kw):
    print(json.dumps(kw, ensure_ascii=False), flush=True)

def fill_combo(slug, an, urls):
    """Verify candidates, pair subject+barem by variant, upload. Returns n uploaded."""
    existing = storage_exists(f"{slug}/{an}")
    if "iunie-subiect.pdf" in existing and "iunie-barem.pdf" in existing:
        return 0
    pref = SLUG_PREF_URL.get(slug)
    cands = []  # (sess, tip, variant, prefscore, url, buf)
    seen_sizes = set()
    for u in dict.fromkeys(urls):
        if not re.search(r"\.pdf(\?|$)", u, re.I): continue
        if REJECT_URL.search(u): continue
        buf = fetch(u)
        if buf is None or len(buf) in seen_sizes: continue
        v = verify(buf, slug, an)
        if not v: continue
        tip, f = v
        seen_sizes.add(len(buf))
        cands.append((session_of(u), tip, variant_of(u, f), 0 if (pref and re.search(pref, norm(u))) else 1, u, buf))
    n = 0
    for sess in ("iunie", "august", "speciala"):
        subj = sorted([c for c in cands if c[0] == sess and c[1] == "subiect"], key=lambda c: c[3])
        bare = sorted([c for c in cands if c[0] == sess and c[1] == "barem"], key=lambda c: c[3])
        if not subj and not bare: continue
        # try matched pair first
        pair = None
        for s in subj:
            for b in bare:
                if s[2] != -1 and s[2] == b[2]:
                    pair = (s, b); break
            if pair: break
        chosen = []
        if pair:
            chosen = [pair[0], pair[1]]
        elif subj:
            chosen = [subj[0]]  # upload subject alone; barem only with matching variant
            if bare and (subj[0][2] == -1 or bare[0][2] == -1):
                # variant unknown on one side -> accept best barem (same session, same source family)
                chosen.append(bare[0])
        for sess_, tip_, var_, _, u_, buf_ in chosen:
            path = f"{slug}/{an}/{sess_}-{tip_}.pdf"
            if f"{sess_}-{tip_}.pdf" in existing: continue
            if upload(path, buf_):
                n += 1; existing.add(f"{sess_}-{tip_}.pdf")
                log(event="upload", slug=slug, an=an, path=path, src=u_, variant=var_, size=len(buf_))
        if sess == "iunie" and ("iunie-subiect.pdf" in existing): break
    return n

OFFICIAL_STUBS = {
    "romana": "E_a_romana_real_tehn_{an}_var",
    "matematica-m1": "E_c_matematica_M_mate-info_{an}_var",
    "matematica-m2": "E_c_matematica_M_st-nat_{an}_var",
    "matematica-m3": "E_c_matematica_M_tehnologic_{an}_var",
    "istorie": "E_c_istorie_{an}_var",
    "geografie": "E_d_geografie_{an}_var",
    "biologie": "E_d_bio_veg_anim_{an}_var",
    "fizica": "E_d_fizica_teoretic_vocational_{an}_var",
    "informatica": "E_d_informatica_{an}",
    "logica": "E_d_logica_{an}_var",
    "psihologie": "E_d_psihologie_{an}_var",
    "economie": "E_d_economie_{an}_var",
    "sociologie": "E_d_sociologie_{an}_var",
    "filosofie": "E_d_filosofie_{an}_var",
    "chimie": "E_d_chimie_{an}_var",
}

def search_phase(slugs, years):
    total = 0
    for an in years:
        for slug in slugs:
            existing = storage_exists(f"{slug}/{an}")
            if "iunie-subiect.pdf" in existing and "iunie-barem.pdf" in existing:
                log(event="skip", slug=slug, an=an); continue
            name = {"romana": "limba romana", "matematica-m1": "matematica mate-info",
                    "matematica-m2": "matematica stiintele naturii", "matematica-m3": "matematica tehnologic"}.get(slug, slug)
            queries = []
            if an >= 2011 and slug in OFFICIAL_STUBS:
                queries.append('"' + OFFICIAL_STUBS[slug].format(an=an) + '" pdf')
            queries += [
                f"subiect bacalaureat {name} {an} varianta extrasa pdf",
                f"barem de evaluare bacalaureat {name} {an} pdf",
            ]
            urls = []
            for q in queries:
                urls.extend(fc_search(q)); time.sleep(0.3)
            total += fill_combo(slug, an, urls)
    log(event="search_done", uploaded_total=total)

if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--years", required=True)
    ap.add_argument("--slugs", default="all")
    a = ap.parse_args()
    years = [int(y) for y in a.years.split(",")]
    slugs = list(SLUG_REQ.keys()) if a.slugs == "all" else a.slugs.split(",")
    search_phase(slugs, years)
