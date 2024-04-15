import { notFound } from "next/navigation";

import { getServerAuthSession } from "~/server/auth";
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

  const session = await getServerAuthSession();

  return (
    <div className="container flex flex-col gap-4 py-8">
      <PostCard {...post} />
      {session?.user.id === post.userId && <DeletePostButton postId={postId} />}
    </div>
  );
}
