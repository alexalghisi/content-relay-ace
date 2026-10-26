import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

/**
 * The teacher's board: Markdown (tables keep their columns, code blocks keep their lines) and
 * LaTeX math ($…$, $$…$$) so matrices, fractions and systems are laid out like on paper.
 */
export default function TablaRender({ text }: { text: string }) {
  return (
    <div className="tabla-md max-w-none overflow-x-auto text-base leading-relaxed [&_.katex-display]:my-3 [&_.katex-display]:overflow-x-auto [&_code]:rounded [&_code]:bg-background [&_code]:px-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-1.5 [&_pre]:my-2 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-background [&_pre]:p-3 [&_table]:my-2 [&_table]:border-collapse [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-1 [&_th]:border [&_th]:border-border [&_th]:bg-background [&_th]:px-3 [&_th]:py-1 [&_ul]:list-disc [&_ul]:pl-6">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}>
        {text}
      </ReactMarkdown>
    </div>
  );
}

/** A drawing (SVG) from the teacher, shown as an image so no script inside it can run. */
export function FiguraSvg({ svg }: { svg: string }) {
  const clean = svg.trim();
  if (!/^<svg[\s>]/i.test(clean)) return null;
  const src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(clean.includes("xmlns=") ? clean : clean.replace(/^<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"'))}`;
  return <img src={src} alt="Desenul profesoarei" className="mx-auto my-2 max-h-[420px] w-full max-w-xl rounded-lg bg-white object-contain p-2" />;
}
