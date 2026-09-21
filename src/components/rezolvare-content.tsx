import { useEffect, useRef, useState } from "react";

/**
 * Randează conținutul unei rezolvări (text structurat cu `## Subiectul I`,
 * `### ...`, liste, blocuri de cod ```), transformând fiecare secțiune
 * într-un acordeon indexabil (conținutul rămâne în HTML, doar e ascuns vizual
 * prin <details>, deci Google îl vede).
 */

interface Block {
  heading: string;
  body: string;
}

function splitSections(raw: string): Block[] {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let current: Block | null = null;
  for (const line of lines) {
    const m = /^##\s+(.*)$/.exec(line);
    if (m) {
      if (current) blocks.push(current);
      current = { heading: m[1].trim(), body: "" };
    } else if (current) {
      current.body += line + "\n";
    } else {
      current = { heading: "Rezolvare", body: line + "\n" };
    }
  }
  if (current) blocks.push(current);
  return blocks;
}

function InlineText({ text }: { text: string }) {
  // bold **...** simplu, restul text brut (fără HTML injectat)
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>,
      )}
    </>
  );
}

function Body({ body }: { body: string }) {
  const out: React.ReactNode[] = [];
  const lines = body.split("\n");
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3).trim();
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) code.push(lines[i++]);
      i++;
      out.push(
        <pre key={key++} className="mt-3 overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 text-sm">
          <code data-lang={lang}>{code.join("\n")}</code>
        </pre>,
      );
      continue;
    }
    const h3 = /^###\s+(.*)$/.exec(line);
    if (h3) {
      out.push(
        <h3 key={key++} className="mt-5 text-base font-semibold">
          {h3[1]}
        </h3>,
      );
      i++;
      continue;
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      const items: string[] = [];
      const ordered = /^\s*\d+\./.test(line);
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ""));
        i++;
      }
      const ListTag = ordered ? "ol" : "ul";
      out.push(
        <ListTag key={key++} className={`mt-3 space-y-1 pl-5 text-muted-foreground ${ordered ? "list-decimal" : "list-disc"}`}>
          {items.map((it, n) => (
            <li key={n}>
              <InlineText text={it} />
            </li>
          ))}
        </ListTag>,
      );
      continue;
    }
    if (line.trim() === "") {
      i++;
      continue;
    }
    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !/^(#{2,3}\s|\s*([-*]|\d+\.)\s|```)/.test(lines[i])) {
      paragraph.push(lines[i]);
      i++;
    }
    out.push(
      <p key={key++} className="mt-3 text-muted-foreground">
        <InlineText text={paragraph.join(" ")} />
      </p>,
    );
  }
  return <>{out}</>;
}

export function RezolvareContent({ content }: { content: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [blocks] = useState(() => splitSections(content));

  // KaTeX (încărcat din head-ul rutei) randează formulele după montare.
  useEffect(() => {
    const w = window as unknown as { renderMathInElement?: (el: Element, o?: unknown) => void };
    if (!ref.current) return;
    const run = () =>
      w.renderMathInElement?.(ref.current!, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        throwOnError: false,
      });
    if (w.renderMathInElement) run();
    else {
      const t = window.setTimeout(run, 1200);
      return () => window.clearTimeout(t);
    }
  }, [blocks]);

  return (
    <div ref={ref} className="mt-6 space-y-3">
      {blocks.map((b, i) => (
        <details key={i} open={i === 0} className="card-soft group p-5" id={`sectiune-${i + 1}`}>
          <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
            {b.heading}
            <span className="ml-2 text-xs font-normal text-primary group-open:hidden">arată rezolvarea</span>
          </summary>
          <Body body={b.body} />
        </details>
      ))}
    </div>
  );
}
