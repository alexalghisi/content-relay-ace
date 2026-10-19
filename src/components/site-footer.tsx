import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40 mt-24">
      {/* Cross-promo: GrileAdmitere.ro (același owner) */}
      <div className="border-b border-border bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
        <div className="container-page py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-300 text-indigo-900 px-3 py-1 text-[11px] font-bold tracking-wide shrink-0">
            GRILE ADMITERE
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm sm:text-base leading-snug">
              Pregătire pentru admitere la toate facultățile din România
            </p>
            <p className="text-xs sm:text-sm text-white/85 mt-0.5">
              UMF, ASE, Politehnica, Drept, Poliție + 100 universități. Testează-te gratuit pe GrileAdmitere.ro
            </p>
          </div>
          <a
            href="https://grileadmitere.ro"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 rounded-full bg-white text-indigo-700 px-4 py-2 text-sm font-semibold hover:bg-white/90 shrink-0"
          >
            Vezi grilele →
          </a>
        </div>
      </div>

      <div className="container-page py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="font-bold text-base mb-3">MeditatiiDirect.ro</div>
          <p className="text-muted-foreground leading-relaxed">
            Educație la un click distanță. Meditații cu profesori verificați în toată România — chat direct, fără intermediari.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Pentru elevi</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/meditatii" className="hover:text-foreground">Caută meditații</Link></li>
            <li><Link to="/harta-blocajelor" className="hover:text-foreground">Harta Blocajelor — ce noțiune îți lipsește</Link></li>
            <li><Link to="/profesori" className="hover:text-foreground">Profesori</Link></li>
            <li><Link to="/materii" className="hover:text-foreground">Materii</Link></li>
            <li><Link to="/preturi-meditatii" className="hover:text-foreground">Prețuri</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Examene</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/variante-bacalaureat" className="hover:text-foreground">Variante BAC (subiecte + bareme)</Link></li>
            <li><Link to="/evaluare-nationala" className="hover:text-foreground">Evaluarea Națională — calendar și reguli</Link></li>
            <li><Link to="/calculator-media-evaluare-nationala" className="hover:text-foreground">Calculator medie Evaluarea Națională</Link></li>
            <li><Link to="/admitere" className="hover:text-foreground">Admitere facultate</Link></li>
            <li><Link to="/meditatii-evaluare-nationala" className="hover:text-foreground">Meditații Evaluare Națională</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Companie</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/despre" className="hover:text-foreground">Despre noi</Link></li>
            <li><Link to="/cum-functioneaza" className="hover:text-foreground">Cum funcționează</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog &amp; ghiduri</Link></li>
            <li><Link to="/tutoriale" className="hover:text-foreground">Tutoriale</Link></li>
            <li><Link to="/parteneri" className="hover:text-foreground">Parteneri</Link></li>
            <li><Link to="/termeni" className="hover:text-foreground">Termeni și condiții</Link></li>
            <li><Link to="/confidentialitate" className="hover:text-foreground">Confidențialitate (GDPR)</Link></li>
            <li><Link to="/politica-cookies" className="hover:text-foreground">Politica de cookies</Link></li>
          </ul>
        </div>
      </div>

      {/* Silos SEO: matrix materii × orașe top — internal linking puternic */}
      <div className="border-t border-border">
        <div className="container-page py-10">
          <div className="font-semibold text-sm mb-4">Meditații populare după oraș</div>
          <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-xs text-muted-foreground">
            {([
              ["matematica", "Matematică"],
              ["romana", "Română"],
              ["engleza", "Engleză"],
              ["informatica", "Informatică"],
              ["fizica", "Fizică"],
              ["chimie", "Chimie"],
              ["biologie", "Biologie"],
              ["istorie", "Istorie"],
            ] as const).map(([slug, name]) => (
              <div key={slug} className="leading-relaxed">
                <span className="font-medium text-foreground">{name}:</span>{" "}
                {([
                  ["bucuresti", "București"],
                  ["cluj-napoca", "Cluj"],
                  ["timisoara", "Timișoara"],
                  ["iasi", "Iași"],
                  ["brasov", "Brașov"],
                  ["constanta", "Constanța"],
                ] as const).map(([city, cityName], i, arr) => (
                  <span key={city}>
                    <Link
                      to="/meditatii/$materie/$oras"
                      params={{ materie: slug, oras: city }}
                      className="hover:text-foreground hover:underline"
                    >
                      {cityName}
                    </Link>
                    {i < arr.length - 1 && " · "}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} MeditatiiDirect.ro — Toate drepturile rezervate.</span>
          <span>Made with ♥ pentru educație în România.</span>
        </div>
      </div>
    </footer>
  );
}
