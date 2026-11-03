"""Read-only production checks. No credentials, account creation or personal data."""
import concurrent.futures
import json
import os
import sys
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

BASE = os.environ.get("HEALTH_BASE_URL", "https://meditatiidirect.ro").rstrip("/")
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.meta = {}; self.canonical = []; self.h1 = 0; self.lang = None; self.title = ""; self.in_title = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html": self.lang = a.get("lang")
        if tag == "h1": self.h1 += 1
        if tag == "title": self.in_title = True
        if tag == "meta": self.meta[a.get("name") or a.get("property")] = a.get("content", "")
        if tag == "link" and a.get("rel") == "canonical": self.canonical.append(a.get("href"))
    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
    def handle_data(self, data):
        if self.in_title: self.title += data

def get(path):
    req = urllib.request.Request(BASE + path, headers={"User-Agent": "MeditatiiDirectHealth/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r: return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e: return e.code, e.read().decode("utf-8", "replace")

def check_page(path):
    status, text = get(path); p = Page(); p.feed(text)
    failures = []
    if status != 200: failures.append("HTTP status")
    if p.lang != "ro": failures.append("language")
    if p.h1 != 1: failures.append("H1 count")
    if not p.title.strip() or "Lovable App" in p.title: failures.append("title")
    for key in ["description", "og:title", "og:description", "og:type", "twitter:card"]:
        if not p.meta.get(key): failures.append(key)
    if "noindex" in p.meta.get("robots", ""): failures.append("indexability")
    if len(p.canonical) != 1 or (p.canonical[0] or "").rstrip("/") != (BASE + path).rstrip("/"): failures.append("canonical")
    return {"path": path, "failures": failures, "title": p.title}

def main():
    paths = ["/", "/meditatii", "/pentru-profesori", "/profesor-ai", "/blog", "/subiecte-admitere"]
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex: results = list(ex.map(check_page, paths))
    failures = [{"path": r["path"], "checks": r["failures"]} for r in results if r["failures"]]
    if len({r["title"] for r in results}) != len(results): failures.append({"path": "pages", "checks": ["duplicate titles"]})
    status, robots = get("/robots.txt")
    if status != 200 or "Sitemap: " + BASE + "/sitemap.xml" not in robots: failures.append({"path": "/robots.txt", "checks": ["sitemap declaration"]})
    status, sitemap = get("/sitemap.xml")
    count = 0
    try:
        root = ET.fromstring(sitemap)
        urls = [e.text or "" for e in root.findall("{*}url/{*}loc")]; count = len(urls)
        if status != 200 or not urls or len(urls) != len(set(urls)): raise ValueError("invalid sitemap")
        if any("?" in u or not u.startswith(BASE + "/") for u in urls): raise ValueError("noncanonical URLs")
        if urls.count(BASE + "/subiecte-admitere") != 1: raise ValueError("admission duplicate/missing")
    except Exception: failures.append({"path": "/sitemap.xml", "checks": ["XML, uniqueness and canonical URLs"]})
    if get("/health-not-found-7b32ef9")[0] != 404: failures.append({"path": "unknown URL", "checks": ["real 404"]})
    report = {"base": BASE, "pages_checked": len(paths), "sitemap_urls": count, "failures": failures}
    print(json.dumps(report, ensure_ascii=False, indent=2))
    sys.exit(1 if failures else 0)
if __name__ == "__main__": main()