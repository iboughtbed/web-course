import remarkGfm from "remark-gfm";

import { Editor } from "../_components/editor";
import { MemoizedReactMarkdown } from "../_components/markdown";

export default function MarkdownPage() {
  const content =
    "## Hello, world\n This is **markdown**\n Visit www.github.com";

  return (
    <div className="container flex flex-col gap-8 py-8">
      <MemoizedReactMarkdown
        className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
        remarkPlugins={[remarkGfm]}
        components={{
          p({ children }) {
            return <p className="mb-2 last:mb-0">{children}</p>;
          },
        }}
      >
        {content}
      </MemoizedReactMarkdown>
      <Editor />
    </div>
  );
}
