import { Link } from "@tanstack/react-router";
import { Construction } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
  showSoon?: boolean;
}

export function PageShell({ title, description, children, showSoon = true }: Props) {
  return (
    <section className="container-page py-16 lg:py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {children}

      {showSoon && !children && (
        <div className="mt-10 card-soft p-8 max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary">
              <Construction className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Conținut în pregătire</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Această secțiune va fi populată în iterațiile următoare ale portării (profesori, conținut educațional, articole).
                Între timp, poți explora celelalte secțiuni.
              </p>
              <Link to="/" className="btn-primary mt-5">Înapoi acasă</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
