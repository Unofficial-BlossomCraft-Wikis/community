import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import BCUW from "../../public/bcuwOnlyTitleNormal.png";
import { CommunityButton, HomeButton, LegalButton, WikiButton } from "./navbar-buttons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import UserButton from "./user-button";

export default function Navbar() {
  return (
    <Sheet>
      <div className="flex h-16 flex-row bg-secondary">
        <div className="flex basis-1/2 flex-row items-center justify-start gap-4 pl-2 md:basis-1/3">
          <div className="w-16 flex flex-col gap-4">
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </SheetTrigger>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">
              <Image src={BCUW} alt="BCUW" width={64} height={64} unoptimized />
            </Link>
          </Button>
        </div>
        <div className="flex basis-1/3 flex-row items-center justify-center gap-4 max-md:hidden">
          <WikiButton />
          <CommunityButton />
        </div>
        <div className="flex flex-auto basis-1/2 flex-row items-center justify-end gap-2 pr-2 md:basis-1/3">
          <Button variant="outline" asChild className="max-md:hidden">
            <Link href="https://www.bcuw.xyz">Production Site</Link>
          </Button>
          <UserButton />
          <ThemeToggle />
        </div>
      </div>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col justify-center gap-4 overflow-y-scroll">
              <HomeButton label={true} labelSide="right" />
              <WikiButton label={true} labelSide="right" />
              <CommunityButton label={true} labelSide="right" />
              <Separator />
              <LegalButton label={true} labelSide="right" />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
