import Link from "next/link";

interface PostCardProps {
  id: number;
  name: string | null;
  createdAt: Date;
}

export function PostCard({ id, name, createdAt }: PostCardProps) {
  return (
    <Link
      href={`/post/${id}`}
      className="space-y-2 rounded-md border px-4 py-3"
    >
      <p>{name}</p>
      <p className="text-muted-foreground text-sm">
        {createdAt.toDateString()}
      </p>
    </Link>
  );
}
