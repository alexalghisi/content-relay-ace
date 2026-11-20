#!/usr/bin/env python3
"""Pune coperta în frontmatter și imaginile în text (după primul paragraf al secțiunii date).
Idempotent: nu adaugă de două ori aceeași imagine. Folosit o singură dată pentru articolele existente;
articolele noi își scriu direct imaginile în Markdown."""
import glob, re, sys

def aplica(slug, coperta_alt, inserari):
    f = glob.glob(f"src/content/blog/*-{slug}.md")[0]
    s = open(f, encoding="utf-8").read()
    fm_end = s.index("\n---", 4)
    fm, body = s[:fm_end], s[fm_end:]
    if "\nimage:" not in fm:
        fm = re.sub(r"(\ntags:[^\n]*)", lambda m: m.group(1) + f"\nimage: /blog-media/{slug}/coperta.jpg\nimageAlt: \"{coperta_alt}\"", fm, count=1)
    for titlu, fisier, alt, legenda in inserari:
        src = fisier if fisier.startswith("/") else f"/blog-media/{slug}/{fisier}"
        if src in body:
            continue
        i = body.index("\n## " + titlu)
        # sfârșitul primului bloc de după titlu
        start = body.index("\n\n", i + 1) + 2
        fin = body.find("\n\n", start)
        fin = len(body) if fin == -1 else fin
        linie = f"\n\n![{alt}]({src} \"{legenda}\")"
        body = body[:fin] + linie + body[fin:]
    open(f, "w", encoding="utf-8").write(fm + body)
    print("ok", slug)

STRUCT = "punctaj-pe-subiecte.webp"
PAG = "subiect-oficial-2026.webp"
VID = "subiect-si-barem.mp4"

def subiect(slug, materie, varianta, h1, h2, h3, rezumat):
    aplica(slug, f"Coperta articolului despre subiectele BAC la {materie}, cu prima pagină a subiectului oficial din 2026", [
        (h1, STRUCT, f"Infografic cu punctajul probei de {materie}: {rezumat}, plus 10 puncte din oficiu", "Unde sunt punctele, după subiectele și baremele oficiale din 2026"),
        (h2, PAG, f"Prima pagină a subiectului oficial de {materie}, BAC 2026, {varianta}", f"Subiectul oficial, {varianta}, exact cum îl primești în sală"),
        (h3, VID, f"Animație: prima pagină a subiectului de {materie}, apoi baremul oficial al aceleiași variante", "Subiectul și baremul, unul după altul: așa le lucrezi acasă"),
    ])

subiect("subiecte-bac-istorie-cum-le-lucrezi-cu-baremul", "istorie", "varianta 3, iunie–iulie", "Cum arată proba", "Subiectul I:", "Cum te corectezi", "trei subiecte de câte 30 de puncte")
subiect("subiecte-bac-matematica-m1-cum-le-lucrezi-cu-baremul", "matematică M1", "varianta 3, iunie–iulie", "Cum arată proba", "Subiectul I:", "Cum te corectezi", "trei subiecte de câte 30 de puncte, câte 5 puncte pe item")
subiect("subiecte-bac-chimie-organica-cum-le-lucrezi-cu-baremul", "chimie organică", "varianta 3, iunie", "Cum arată proba", "Subiectul I:", "Problemele de calcul", "Subiectul I 40 de puncte, al II-lea 25, al III-lea 25")
subiect("subiecte-bac-romana-ce-cere-baremul", "română", "varianta 6, iunie, profilul real", "Cum arată proba", "Subiectul I.A", "Subiectul al III-lea", "I.A 30 de puncte, I.B 20, al II-lea 10, al III-lea 30")
subiect("subiecte-bac-logica-cum-le-lucrezi-cu-baremul", "logică", "varianta 3, iunie", "Cine dă proba", "Subiectul I:", "Subiectul al III-lea", "trei subiecte de câte 30 de puncte")
subiect("subiecte-bac-biologie-anatomie-cum-le-lucrezi-cu-baremul", "anatomie", "varianta 3, iunie", "Cum arată proba", "Subiectul I:", "Subiectul al III-lea", "trei subiecte de câte 30 de puncte")
subiect("subiecte-bac-geografie-cum-le-lucrezi-cu-baremul", "geografie", "varianta 3, iunie", "Cui i se adresează", "Harta aduce", "Subiectul al III-lea", "trei subiecte de câte 30 de puncte")
subiect("subiecte-bac-fizica-cum-le-folosesti-cu-barem", "fizică", "filiera teoretică, varianta 3", "Ce scrie pe prima pagină", "Teoretic sau tehnologic", "Baremul se citește", "două arii tematice alese, de câte 45 de puncte")

aplica("simulare-evaluare-nationala-2027-ghid-pentru-parinti", "Coperta ghidului pentru părinți despre simularea Evaluării Naționale 2027, cu o pagină din subiectul de română", [
    ("Patru lucruri", "subiect-romana-2026.webp", "Pagina cu Subiectul I din proba de română a Evaluării Naționale din iunie 2026", "Așa arată Subiectul I la română: două texte și cerințe pe ele (EN, iunie 2026)"),
])
aplica("model-evaluare-nationala-2027-ce-arata-si-cum-il-lucrezi", "Coperta articolului despre modelul Evaluării Naționale 2027, cu o pagină din modelul la matematică", [
    ("Matematica:", "punctaj-model-matematica.webp", "Infografic: la modelul de matematică, trei subiecte de câte 30 de puncte și 10 din oficiu", "Modelul la matematică, pe subiecte (după baremul oficial)"),
    ("Româna:", "model-romana-2027.webp", "Pagina cu Subiectul I din modelul de română pentru Evaluarea Națională 2027", "Modelul la română: Subiectul I pornește de la două texte"),
    ("Cum lucrezi modelul", "model-matematica-subiect-si-barem.mp4", "Animație: o pagină din modelul de matematică 2027, apoi baremul oficial", "Subiectul și baremul modelului, unul după altul"),
])
aplica("meditatii-matematica-evaluare-nationala-2027-plan-pe-luni", "Coperta planului lunar de pregătire la matematică pentru Evaluarea Națională 2027", [
    ("Înainte de plan", "plan-pe-luni.svg", "Cronologie animată a planului: noiembrie aritmetică, decembrie algebră, ianuarie funcții și geometrie plană, februarie geometrie în spațiu, simularea pe 17 martie, examenul pe 24 iunie", "Planul, lună cu lună, cu datele din calendarul oficial"),
    ("Noiembrie:", "subiect-matematica-2026.webp", "Primele exerciții din Subiectul I la matematică, Evaluarea Națională din iunie 2026", "Subiectul I din iunie 2026: aici se pierd punctele de calcul"),
    ("Februarie:", "harta-blocajelor-matematica.mp4", "Derulare prin pagina Harta Blocajelor la matematică de pe MeditatiiDirect.ro", "Harta Blocajelor: de la ce noțiune pornește fiecare greșeală"),
])
aplica("simulare-bac-2027-plan-de-pregatire", "Coperta planului de pregătire pentru simularea BAC 2027, cu o pagină din simularea 2026 la matematică", [
    ("Datele simulării", "calendar-simulare.svg", "Cronologie animată: simularea BAC 2027 pe 22, 23, 24 și 25 martie, rezultatele pe 9 aprilie, apoi BAC-ul din 14 iunie", "Simularea BAC 2027, zi cu zi (calendarul oficial)"),
    ("Ce te așteaptă", "simulare-2026-matematica-m1.webp", "Prima pagină a subiectului de matematică M_mate-info de la simularea BAC 2026", "Simularea din 2026 la M1: tot programul, nu doar materia predată până în martie"),
    ("Planul, pe etape", "simulare-2026-istorie-subiect-si-barem.mp4", "Animație: subiectul de istorie de la simularea BAC 2026, apoi baremul lui", "Simularea 2026 la istorie: subiectul și baremul"),
])
aplica("vacanta-de-iarna-2026-plan-recapitulare-bac-evaluare-nationala", "Coperta planului de recapitulare în vacanța de iarnă pentru BAC și Evaluarea Națională 2027", [
    ("Planul pe zile", "plan-vacanta.svg", "Cronologie animată a vacanței: 23–27 decembrie pauză, 28–31 decembrie capitolele slabe, 1–2 ianuarie liber, 3–8 ianuarie variante complete, 9–10 ianuarie bilanț, 11 ianuarie modulul 3", "Vacanța, pe zile"),
    ("Înainte de 23 decembrie", "model-en-2027-subiect-si-barem.mp4", "Animație: o pagină din modelul de matematică pentru Evaluarea Națională 2027, apoi baremul oficial", "Lucrezi modelul, apoi te corectezi cu baremul"),
    ("Diferențe între", "o-sesiune-de-lucru.webp", "Infografic: o sesiune de lucru înseamnă un capitol, în trei pași: teoria, exerciții de bază, cerința din subiecte reale", "O sesiune = un capitol, în trei pași"),
])
aplica("cat-costa-meditatiile-2026-cum-alegi-profesorul", "Ilustrație cu o elevă și o profesoară care lucrează la laptop, coperta ghidului despre prețul meditațiilor", [
    ("Unde vezi tarife reale", "preturi-matematica.webp", "Captură din pagina cu prețurile meditațiilor la matematică de pe MeditatiiDirect.ro", "Pagina de prețuri la matematică, cu tarifele calculate din anunțuri (captură din 20 noiembrie 2026)"),
    ("Cinci întrebări", "cinci-intrebari.webp", "Infografic cu cele cinci întrebări pentru primul contact cu un profesor de meditații", "De păstrat în telefon înainte de primul apel"),
    ("Cum ceri oferte", "cum-ceri-oferte.mp4", "Derulare prin formularul de cerere de meditații de pe MeditatiiDirect.ro", "Formularul de cerere: materia, nivelul, orașul, bugetul"),
])
