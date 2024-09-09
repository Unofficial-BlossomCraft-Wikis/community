import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { data } from '~/server/queries';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const crates = await data.get.crates.getAll()
  return (
    <div className='h-[calc(100vh-4rem)] flex flex-row'>
      <div className='h-full w-16 flex flex-col gap-4 pl-2 scroll-auto'>
        {crates.map((data) => (
          <Button
            key={data.name}
            variant={"outline"}
            asChild
          >
            <Link href={data.path}>{data.btn_name}</Link>
          </Button>
        ))}
      </div>
      <div className='h-[calc(100%-0.5rem)] w-[calc((100vw-4rem)-1rem)]'>
        {children}
      </div>
    </div>

  );
}
