export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container relative flex min-h-screen flex-col items-center justify-center">
      {children}
    </main>
  );
}
