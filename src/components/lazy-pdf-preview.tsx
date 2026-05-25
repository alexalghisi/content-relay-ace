import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  title: string;
  className?: string;
}

/**
 * Iframe-ul de preview PDF este greu — îl montăm doar când userul derulează aproape de el.
 * Câștig direct pentru LCP / TBT și pentru bugetul de CPU pe mobil (criteriu AdSense).
 */
export function LazyPdfPreview({ src, title, className = "h-[80vh] w-full" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className="overflow-hidden rounded-xl border border-border bg-card">
      {visible ? (
        <iframe src={src} title={title} className={className} loading="lazy" />
      ) : (
        <div className={`${className} grid place-items-center text-sm text-muted-foreground`}>
          Se încarcă previzualizarea PDF…
        </div>
      )}
    </div>
  );
}
