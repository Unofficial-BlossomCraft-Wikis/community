import Link from "next/link";
import { Button } from "~/components/ui/button";
import { LegalPages } from "~/lib/consts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-row">
      <div className="flex h-full w-16 flex-col gap-4 scroll-auto pl-2">
        {LegalPages.map((data) => {
          const name = data.name.replaceAll(" ", "<br />");
          return (
            <Button key={data.name} variant={"outline"} asChild>
              <Link
                href={data.path}
                dangerouslySetInnerHTML={{ __html: name }}
              />
            </Button>
          );
        })}
      </div>
      <div className="h-[calc(100%-0.5rem)] w-[calc((100vw-4rem)-1rem)]">
        {children}
      </div>
    </div>
  );
}
