import { Link } from "@tanstack/react-router";
import { BadgeCheck, MapPin, Wifi } from "lucide-react";
import type { AnuntCard } from "@/lib/pagina-locala.functions";

/** Cardul unui anunț activ de profesor (pagini locale și pagini de materie). */
export function AnuntCardView({ a }: { a: AnuntCard }) {
  return (
    <Link
      to="/anunt/$slug"
      params={{ slug: a.seo_slug || a.id }}
      className="card-soft flex flex-col p-5 transition hover:border-primary/40 hover:shadow-[var(--shadow-pop)]"
    >
      <div className="flex items-center gap-3">
        {a.avatar_url ? (
          <img
            src={a.avatar_url}
            alt={a.teacher_name ?? "Profesor"}
            loading="lazy"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-semibold text-primary">
            {(a.teacher_name ?? "P").charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{a.teacher_name ?? "Profesor"}</p>
          <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <BadgeCheck className="h-3 w-3 text-primary" /> Anunț activ
          </p>
        </div>
        {a.is_promoted && (
          <span className="ml-auto rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-medium text-primary">
            Promovat
          </span>
        )}
      </div>
      <p className="mt-3 line-clamp-2 text-sm font-medium">{a.title}</p>
      <div className="mt-4 flex items-end justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          {a.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {a.location}
            </span>
          )}
          {a.is_online && (
            <span className="inline-flex items-center gap-1 text-primary">
              <Wifi className="h-3 w-3" /> Online
            </span>
          )}
        </span>
        {a.price_per_hour ? (
          <span className="text-base font-bold text-foreground">{a.price_per_hour} lei/h</span>
        ) : null}
      </div>
    </Link>
  );
}
