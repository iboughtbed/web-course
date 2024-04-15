import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

import { getPost } from "~/server/queries";
import { DeletePostButton } from "../../_components/delete-post-button";
import { PostCard } from "../../_components/post-card";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const postId = parseInt(params.postId);
  const { post } = await getPost(postId);

  if (!post) {
    notFound();
  }

  const user = auth();

  return (
    <div className="container flex flex-col gap-4 py-8">
      <PostCard {...post} />
      {user.userId === post.userId && <DeletePostButton postId={postId} />}
    </div>
  );
}
