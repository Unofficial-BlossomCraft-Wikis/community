import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { data } from '~/server/queries';
import SidebarButton, { FullPathSidebarButton } from "~/components/sidebar-button";
import PWSidebar from '~/components/pw-sidebar';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { server: number };
}) {
  const { server } = params;
  // const crates = await data.get.crates.getAll()
  return (
    <div className='h-[calc(100vh-4rem)] flex flex-row'>
      <div className='h-full w-32 flex flex-col gap-4 pl-2 overflow-scroll'>
        <PWSidebar serverid={server} />
      </div>
      <div className='h-[calc(100%-0.5rem)] w-[calc(100vw-16rem-1rem)]'>
        {children}
      </div>
    </div>

  );
}
