"use client";

import { Book, BookOpenText } from "lucide-react";

import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import Link from "next/link";

import type { labels } from "~/lib/consts";
import { Separator } from "./ui/separator";

export default function WikiButtonInside({ label, labelSide }: labels) {
  const pathname = usePathname();
  const isWiki = pathname.startsWith("/wiki");
  if (isWiki) {
    if (label) {
      return (
        <Button variant="default" asChild>
          <Link href="/wiki" className={labelSide === "left" ? "flex items-center gap-2 flex-row-reverse" : "flex flex-row items-center gap-2" }>
            <BookOpenText className="h-[1.2rem] w-[1.2rem]" />
            <Separator orientation="vertical" />
            <p>Wiki</p>
            <span className="sr-only">Wiki</span>
          </Link>
        </Button>
      );
    }
    return (
      <Button variant="default" size="icon" asChild>
        <Link href="/wiki">
          <BookOpenText className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Wiki</span>
        </Link>
      </Button>
    );
  }
  if (label) {
    return (
      <Button variant="outline" asChild>
        <Link href="/wiki" className={labelSide === "left" ? "flex items-center gap-2 flex-row-reverse" : "flex flex-row items-center gap-2" }>
          <Book className="h-[1.2rem] w-[1.2rem]" />
          <Separator orientation="vertical" />
          <p>Wiki</p>
          <span className="sr-only">Wiki</span>
        </Link>
      </Button>
    );
  }
  return (
    <Button variant="outline" size="icon" asChild>
    <Link href="/wiki">
      <Book className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Wiki</span>
    </Link>
    </Button>
  );
}
