import Banner from "~/components/banner";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
      <Banner />
      {children}
    </main>
  );
}
