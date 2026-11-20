import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const slugifyHeading = (text: string) => text.toLowerCase()
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Fișierele video din articole (`![alt](/blog-media/x.mp4 "Legendă")`) se redau ca buclă mută, ca un GIF. */
export const esteVideo = (src: string) => /\.(mp4|webm)(\?.*)?$/i.test(src);

/** Un paragraf care conține doar o imagine devine figură (o <figure> nu are voie în <p>). */
type NodHast = { type: string; tagName?: string; value?: string; children?: NodHast[] };
const doarImagine = (node?: NodHast) => {
  const copii = (node?.children ?? []).filter((c) => !(c.type === "text" && !c.value?.trim()));
  return copii.length === 1 && copii[0]!.type === "element" && copii[0]!.tagName === "img";
};

function Media({ src, alt, title }: { src?: string; alt?: string; title?: string }) {
  if (!src) return null;
  return (
    <figure className="my-7">
      {esteVideo(src) ? (
        <video
          src={src}
          aria-label={alt}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="w-full rounded-xl border border-border bg-muted"
        />
      ) : (
        <img
          src={src}
          alt={alt ?? ""}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full rounded-xl border border-border bg-card"
        />
      )}
      {title && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">{title}</figcaption>
      )}
    </figure>
  );
}

// Markdown is rendered without raw HTML; unsafe link protocols are rejected by the library.
export function BlogContent({ content }: { content: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
    h1: ({ children }) => <h2 className="mt-8 text-xl font-bold">{children}</h2>,
    h2: ({ children }) => <h2 id={slugifyHeading(String(children))} className="mt-8 scroll-mt-24 text-xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 text-lg font-semibold">{children}</h3>,
    p: ({ node, children }) => doarImagine(node as NodHast | undefined)
      ? <>{children}</>
      : <p className="mt-4 leading-relaxed text-foreground/90">{children}</p>,
    img: ({ src, alt, title }) => <Media src={typeof src === "string" ? src : undefined} alt={alt} title={title} />,
    ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6">{children}</ul>,
    ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6">{children}</ol>,
    a: ({ href, children }) => <a href={href} className="break-words text-primary underline">{children}</a>,
    table: ({ children }) => <div className="mt-5 overflow-x-auto"><table className="w-full border-collapse text-sm">{children}</table></div>,
    th: ({ children }) => <th className="border border-border bg-muted p-3 text-left">{children}</th>,
    td: ({ children }) => <td className="border border-border p-3 align-top">{children}</td>,
    blockquote: ({ children }) => <blockquote className="mt-5 border-l-2 border-primary pl-4 text-muted-foreground">{children}</blockquote>,
  }}>{content}</ReactMarkdown>;
}
