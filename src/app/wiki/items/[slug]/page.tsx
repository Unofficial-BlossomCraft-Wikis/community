// import Link from "next/link";
// import { data } from "~/server/queries";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent } from "~/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "~/components/ui/button";
// import { items } from "~/lib/items";
import { redirect } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // const item = items.find((item) => item.slug == slug);
  // if (item == undefined) {
    redirect(`/wiki/items?inf=true&infslug=${slug}`);
  // }
  return (
    <main className="bg-background mx-2 mb-2 h-full w-full scroll-auto rounded-lg p-2">
      {/* <h1 className="text-3xl">{item.name}</h1> */}
      {/* <Tabs defaultValue="img" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="img">Image</TabsTrigger>
          {item.image_url == item.mono_image_url ? (
            <></>
          ) : (
            <TabsTrigger value="mono_img">Password</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="img">
          <Card>
            <CardContent className="flex flex-col items-center justify-center">
              <img src={item.image_url} alt={item.name} />
            </CardContent>
          </Card>
        </TabsContent>
        {item.image_url == item.mono_image_url ? (
          <></>
        ) : (
          <TabsContent value="mono_img">
            <Card>
              <CardContent className="flex flex-col items-center justify-center">
                <img src={item.mono_image_url} alt={item.name} />
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
      <Button variant="outline" asChild>
        <Link href={`/wiki/crates/${item.crate_slug}`}>To {item.crate}</Link>
      </Button> */}
    </main>
  );
}
