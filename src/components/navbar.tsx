import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex h-16 flex-row bg-secondary">
      <div className="flex basis-1/3 flex-row items-center justify-start pl-2">
        <Button variant="outline" asChild>
          <Link href="/">
            <Image
              src="/bcuwOnlyTitleNormal.png"
              alt="BCUW"
              width={64}
              height={64}
            />
          </Link>
        </Button>
      </div>
      <div className="flex basis-1/3 flex-row items-center justify-center"></div>
      <div className="flex basis-1/3 flex-row items-center justify-end gap-2 pr-2">
        <Button variant="outline" asChild>
          <Link href="https://www.bcuw.xyz">Production Site</Link>
        </Button>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ThemeToggle />
      </div>
    </div>
  );
}
