"use client";

import { useState } from "react";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import { MemoizedReactMarkdown } from "./markdown";

export function Editor() {
  const [content, setContent] = useState("");

  return (
    <Tabs defaultValue="write" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="write">Write</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="write">
        <Textarea
          placeholder="I bought a new bed"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </TabsContent>
      <TabsContent value="preview">
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkBreaks]}
        >
          {content}
        </MemoizedReactMarkdown>
      </TabsContent>
    </Tabs>
  );
}
