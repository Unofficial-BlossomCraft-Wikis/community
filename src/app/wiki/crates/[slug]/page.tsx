import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { data } from '~/server/queries';
import type { Items } from '@/lib/consts';
import { redirect } from 'next/navigation';

export default async function HomePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  redirect(`/wiki/crates`);
  // const crate = await data.get.crates.getBySlug(slug);
  // const items: Items[] = await Promise.all(
  //   crate.items.map((item) => data.get.items.getByName(item))
  // );
  return (
    <main className="rounded-lg bg-background w-full h-full scroll-auto mx-2 mb-2 p-2">
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
