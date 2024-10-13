import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { data } from "~/server/queries";
// import type { Items } from '@/lib/consts';
import { redirect } from "next/navigation";
import Banner from "~/components/banner";

export default async function HomePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  redirect(`/wiki/crates`);
  // const crate = await data.get.crates.getBySlug(slug);
  // const items: Items[] = await Promise.all(
  //   crate.items.map((item) => data.get.items.getByName(item))
  // );
  return (
    <main className="mx-2 mb-2 h-full w-full overflow-y-scroll rounded-lg bg-background p-2">
      <Banner />
      {/* <h1 className="text-3xl">{crate.name}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Chance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            items.map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <Link href={item.path}>
                    <span>{item.name}</span>
                  </Link>
                </TableCell>
                <TableCell>{item.winchance}%</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table> */}
    </main>
  );
}
