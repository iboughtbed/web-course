import { SiteHeader } from "~/components/site-header";
import { getServerAuthSession } from "~/server/auth";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={session?.user} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
