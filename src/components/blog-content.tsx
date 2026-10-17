import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const slugifyHeading = (text: string) => text.toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Markdown is rendered without raw HTML; unsafe link protocols are rejected by the library.
export function BlogContent({ content }: { content: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
    h1: ({ children }) => <h2 className="mt-8 text-xl font-bold">{children}</h2>,
    h2: ({ children }) => <h2 id={slugifyHeading(String(children))} className="mt-8 scroll-mt-24 text-xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 text-lg font-semibold">{children}</h3>,
    p: ({ children }) => <p className="mt-4 leading-relaxed text-foreground/90">{children}</p>,
    ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6">{children}</ul>,
    ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6">{children}</ol>,
    a: ({ href, children }) => <a href={href} className="break-words text-primary underline">{children}</a>,
    table: ({ children }) => <div className="mt-5 overflow-x-auto"><table className="w-full border-collapse text-sm">{children}</table></div>,
    th: ({ children }) => <th className="border border-border bg-muted p-3 text-left">{children}</th>,
    td: ({ children }) => <td className="border border-border p-3 align-top">{children}</td>,
    blockquote: ({ children }) => <blockquote className="mt-5 border-l-2 border-primary pl-4 text-muted-foreground">{children}</blockquote>,
  }}>{content}</ReactMarkdown>;
}