import { Link, useLocation } from "@remix-run/react";
import { crates } from "~/lib/consts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Index() {
  const location = useLocation();
  const crate = crates.find(
    (crate) => crate.independentpath === location.pathname
  );
  if (!crate) {
    return (
      <div
        className='rounded-lg bg-background w-full h-full scroll-auto mx-2 mb-2 p-2 justify-center text-center flex flex-1 flex-col'
        style={{ viewTransitionName: "main-screen" }}
      >
        <h1 className='text-[10vw] font-bold'>crate Not Found</h1>
      </div>
    );
  }
  return (
    <div
      className='rounded-lg bg-background w-full h-full scroll-auto mx-2 mb-2 p-2'
      style={{ viewTransitionName: "main-screen" }}
    >
      <h1 className='text-3xl'>{crate.name}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Chance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            crate.items.map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <Link to={item.independentpath} unstable_viewTransition>
                    <span style={{ viewTransitionName: `title-${item.pathextention}` }}>{item.name}</span>
                  </Link>
                </TableCell>
                <TableCell>{item.winchance}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
