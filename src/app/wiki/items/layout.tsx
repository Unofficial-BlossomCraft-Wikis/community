export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="rounded-lg bg-background w-full h-full scroll-auto mx-2 mb-2 p-2">
        {children}
    </main>

  );
}
