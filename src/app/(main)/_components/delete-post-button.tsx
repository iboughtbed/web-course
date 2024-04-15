"use client";

import { Button } from "~/components/ui/button";
import { deletePost } from "~/server/actions";

export function DeletePostButton({ postId }: { postId: number }) {
  return (
    <Button
      variant="destructive"
      onClick={async () => {
        await deletePost(postId);
      }}
    >
      Delete
    </Button>
  );
}
