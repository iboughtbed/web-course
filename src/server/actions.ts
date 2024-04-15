"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export async function createPost(name: string) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const post = await db
    .insert(posts)
    .values({
      name,
      userId: user.userId,
    })
    .returning({ id: posts.id })
    .then((res) => res[0]);

  if (post) {
    redirect(`/post/${post?.id}`);
  }
}

export async function deletePost(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const post = await db.query.posts.findFirst({
    columns: {
      userId: true,
    },
    where: (model, { eq }) => eq(model.id, id),
  });

  if (user.userId !== post?.userId) throw new Error("Unauthorized");

  await db.delete(posts).where(eq(posts.id, id));

  revalidatePath(`/post/${id}`);
  redirect("/new");
}
