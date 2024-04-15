import { getPosts } from "~/server/queries";
import { PostCard } from "./_components/post-card";

export default async function HomePage() {
  const { posts } = await getPosts();

  return (
    <div className="container flex flex-wrap gap-8 py-8">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
