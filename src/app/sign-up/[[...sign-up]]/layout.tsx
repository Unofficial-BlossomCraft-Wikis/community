export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const crates = await data.get.crates.getAll()
  return (
    <div className='h-[calc(100vh-4rem)] flex flex-row'>
      <div className='h-[calc(100%-0.5rem)] w-[calc(100vw-1rem)]'>
        {children}
      </div>
    </div>

  );
}
