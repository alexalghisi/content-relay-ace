import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40 mt-24">
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
            <li><Link to="/profesori" className="hover:text-foreground">Profesori</Link></li>
            <li><Link to="/materii" className="hover:text-foreground">Materii</Link></li>
            <li><Link to="/preturi-meditatii" className="hover:text-foreground">Prețuri</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Examene</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/meditatii-bac" className="hover:text-foreground">Pregătire BAC</Link></li>
            <li><Link to="/subiecte-bac" className="hover:text-foreground">Subiecte BAC</Link></li>
            <li><Link to="/variante-bacalaureat" className="hover:text-foreground">Variante BAC</Link></li>
            <li><Link to="/admitere" className="hover:text-foreground">Admitere facultate</Link></li>
            <li><Link to="/meditatii-evaluare-nationala" className="hover:text-foreground">Evaluare Națională</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Companie</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/despre" className="hover:text-foreground">Despre noi</Link></li>
            <li><Link to="/cum-functioneaza" className="hover:text-foreground">Cum funcționează</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/termeni" className="hover:text-foreground">Termeni</Link></li>
            <li><Link to="/confidentialitate" className="hover:text-foreground">Confidențialitate</Link></li>
          </ul>
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
