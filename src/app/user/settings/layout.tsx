import SidebarButton from "~/components/sidebar-button";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-row">
      <div className="flex h-full w-16 flex-col gap-4 scroll-auto pl-2">
        <SidebarButton name="settings" path={"/user/settings"} />
        <SidebarButton name="items" path={"/user/settings/my/items"} />
        <SidebarButton name="pw's" path={"/user/settings/my/pws"} />
      </div>
      <div className="h-[calc(100%-0.5rem)] w-[calc((100vw-4rem)-1rem)]">
        {children}
      </div>
    </div>
  );
}
