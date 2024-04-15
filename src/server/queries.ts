import "server-only";

import { db } from "~/server/db";

export async function getPosts() {
  const posts = await db.query.posts.findMany({
    columns: {
      id: true,
      name: true,
      createdAt: true,
    },
    orderBy: (model, { desc }) => desc(model.id),
  });

  return { posts };
}

export async function getPost(id: number) {
  const post = await db.query.posts.findFirst({
    columns: {
      id: true,
      name: true,
      userId: true,
      createdAt: true,
    },
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!post) throw new Error("Post not found");

  return { post };
}
