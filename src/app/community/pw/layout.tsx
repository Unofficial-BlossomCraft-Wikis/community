import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { data } from '~/server/queries';
import SidebarButton, { FullPathSidebarButton } from "~/components/sidebar-button";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // const crates = await data.get.crates.getAll()
  return (
    <div className='h-[calc(100vh-4rem)] flex flex-row'>
      <div className='h-full w-16 flex flex-col gap-4 pl-2 scroll-auto'>
        <FullPathSidebarButton name="Cherry" path="/community/pw/1" />
        <FullPathSidebarButton name="Spirit" path="/community/pw/2" />
        <FullPathSidebarButton name="Lotus" path="/community/pw/3" />
        <FullPathSidebarButton name="Tulip" path="/community/pw/4" />
      </div>
      <div className='h-[calc(100%-0.5rem)] w-[calc(100vw-4rem-1rem)]'>
        {children}
      </div>
    </div>

  );
}
