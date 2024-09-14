import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { data } from '~/server/queries';
import SidebarButton from "~/components/sidebar-button";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const crates = await data.get.crates.getAll()
  return (
    <div className='h-[calc(100vh-4rem)] flex flex-row'>
      <div className='h-full w-32 flex flex-col gap-4 pl-2 scroll-auto'>
        <SidebarButton name="Home" path="/community" />
      </div>
      <div className='h-[calc(100%-0.5rem)] w-[calc(100vw-8rem-1rem)]'>
        {children}
      </div>
    </div>

  );
}
