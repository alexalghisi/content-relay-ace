import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n-context";

export function SiteFooter() {
  const t = useT();
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
              {t("footer.promoTitle")}
            </p>
            <p className="text-xs sm:text-sm text-white/85 mt-0.5">
              {t("footer.promoText")}
            </p>
          </div>
          <a
            href="https://grileadmitere.ro"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 rounded-full bg-white text-indigo-700 px-4 py-2 text-sm font-semibold hover:bg-white/90 shrink-0"
          >
            {t("footer.promoCta")}
          </a>
        </div>
      </div>

      <div className="container-page py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="font-bold text-base mb-3">MeditatiiDirect.ro</div>
          <p className="text-muted-foreground leading-relaxed">
            {t("footer.about")}
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">{t("footer.students")}</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/meditatii" className="hover:text-foreground">{t("footer.search")}</Link></li>
            <li><Link to="/harta-blocajelor" className="hover:text-foreground">{t("footer.map")}</Link></li>
            <li><Link to="/scaner-lacune" className="hover:text-foreground">{t("footer.scanner")}</Link></li>
            <li><Link to="/simulare-ai" className="hover:text-foreground">{t("footer.sim")}</Link></li>
            <li><Link to="/meditator-ai" className="hover:text-foreground">{t("nav.meditator")}</Link></li>
            <li><Link to="/profesori" className="hover:text-foreground">{t("footer.teachers")}</Link></li>
            <li><Link to="/materii" className="hover:text-foreground">{t("footer.subjects")}</Link></li>
            <li><Link to="/preturi-meditatii" className="hover:text-foreground">{t("footer.prices")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">{t("footer.exams")}</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/variante-bacalaureat" className="hover:text-foreground">{t("footer.bac")}</Link></li>
            <li><Link to="/evaluare-nationala" className="hover:text-foreground">{t("footer.en")}</Link></li>
            <li><Link to="/calculator-media-evaluare-nationala" className="hover:text-foreground">{t("footer.enCalc")}</Link></li>
            <li><Link to="/admitere" className="hover:text-foreground">{t("footer.admission")}</Link></li>
            <li><Link to="/meditatii-evaluare-nationala" className="hover:text-foreground">{t("footer.enTutoring")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">{t("footer.company")}</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/despre" className="hover:text-foreground">{t("footer.aboutUs")}</Link></li>
            <li><Link to="/cum-functioneaza" className="hover:text-foreground">{t("nav.how")}</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">{t("footer.contact")}</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">{t("footer.blog")}</Link></li>
            <li><Link to="/tutoriale" className="hover:text-foreground">{t("footer.tutorials")}</Link></li>
            <li><Link to="/parteneri" className="hover:text-foreground">{t("footer.partners")}</Link></li>
            <li><Link to="/termeni" className="hover:text-foreground">{t("footer.terms")}</Link></li>
            <li><Link to="/confidentialitate" className="hover:text-foreground">{t("footer.privacy")}</Link></li>
            <li><Link to="/politica-cookies" className="hover:text-foreground">{t("footer.cookies")}</Link></li>
          </ul>
        </div>
      </div>

      {/* Silos SEO: matrix materii × orașe top — internal linking puternic */}
      <div className="border-t border-border">
        <div className="container-page py-10">
          <div className="font-semibold text-sm mb-4">{t("footer.popular")}</div>
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
          <span>© {new Date().getFullYear()} MeditatiiDirect.ro — {t("footer.rights")}</span>
          <span>{t("footer.love")}</span>
        </div>
      </div>
    </footer>
  );
}
