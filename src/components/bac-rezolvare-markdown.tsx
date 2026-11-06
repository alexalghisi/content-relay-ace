import type { ComponentProps } from "react";
import ReactMarkdown, { type ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

type MarkdownCodeProps = ComponentProps<"code"> & ExtraProps;

interface Props {
  text: string;
  className?: string;
}

/**
 * Renders a step-by-step BAC solution (src/content/rezolvari-bac/*.md):
 *  - Markdown + GFM (tables, lists); raw HTML is never rendered
 *  - inline ($...$) and block ($$...$$) LaTeX through KaTeX
 *  - code blocks in a monospace panel (C/C++ for Informatică)
 */
export function BacRezolvareMarkdown({ text, className = "" }: Props) {
  return (
    <div
      className={
        "max-w-none [&_p]:my-2 [&_p]:leading-relaxed [&_pre]:my-2 " +
        "[&_code]:font-mono [&_ul]:my-2 [&_ul]:pl-5 [&_ul]:list-disc " +
        "[&_ol]:my-2 [&_ol]:pl-5 [&_ol]:list-decimal [&_.katex-display]:my-3 " +
        "[&_.katex-display]:overflow-x-auto [&_.katex]:text-[1.02em] " +
        className
      }
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // Avoid <div> inside <pre> (invalid HTML → hydration mismatch); `code` emits the block.
          pre: ({ children }: ComponentProps<"pre">) => <>{children}</>,
          // `node` is react-markdown's syntax tree node and must not reach the DOM.
          code({ node: _node, className, children, ...props }: MarkdownCodeProps) {
            const match = /language-(\w+)/.exec(className || "");
            const lang = match?.[1] || "cpp";
            const value = String(children).replace(/\n$/, "");
            if (value.includes("\n") || match) {
              return (
                <div className="my-3 overflow-hidden rounded-lg border border-border bg-muted/40 text-sm">
                  <div className="flex items-center justify-between border-b border-border bg-muted px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    <span>{lang}</span>
                    <span className="opacity-60">cod</span>
                  </div>
                  <pre className="m-0 overflow-x-auto px-4 py-3 text-[0.85rem] leading-relaxed">
                    <code className="font-mono">{value}</code>
                  </pre>
                </div>
              );
            }
            return (
              <code
                className="rounded bg-muted px-1.5 py-0.5 text-[0.85em] text-foreground"
                {...props}
              >
                {children}
              </code>
            );
          },
          img({ src, alt }: ComponentProps<"img">) {
            return (
              <img
                src={src}
                alt={alt || ""}
                loading="lazy"
                className="my-3 max-h-96 w-auto rounded-md border border-border bg-white"
              />
            );
          },
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
