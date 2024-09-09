import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="h-16 bg-secondary flex flex-row">
      <div className="basis-1/3 flex flex-row justify-start items-center pl-2">
        <Button variant="outline" asChild>
          <Link href="/">
          <Image src="/bcuwOnlyTitleNormal.png" alt="BCUW" width={64} height={64} />
          </Link>
        </Button>
      </div>
      <div className="basis-1/3 flex flex-row justify-center items-center">
      </div>
      <div className="basis-1/3 flex flex-row justify-end items-center pr-2">
        <Button variant="outline" asChild>
          <Link href="https://www.bcuw.xyz">Production Site</Link>
        </Button>
      </div>
    </div>
  );
}