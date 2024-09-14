"use client";

import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import Link from "next/link";

import type { labels } from "~/lib/consts";
import { Separator } from "./ui/separator";

export default function HomeButtonInside( { label, labelSide }: labels) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  if (isHome) {
    if (label) {
      return (
        <Button variant="default" asChild>
          <Link href="/" className={labelSide === "left" ? "flex items-center gap-2 flex-row-reverse" : "flex flex-row items-center gap-2" }>
            <Home className="h-[1.2rem] w-[1.2rem]" />
            <Separator orientation="vertical" />
            <p>Home</p>
            <span className="sr-only">Home</span>
          </Link>
        </Button>
      );
    }
    return (
      <Button variant="default" size="icon" asChild>
        <Link href="/">
          <Home className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Home</span>
        </Link>
      </Button>
    );
  }
  if (label) {
    return (
      <Button variant="outline" asChild>
        <Link href="/" className={labelSide === "left" ? "flex items-center gap-2 flex-row-reverse" : "flex flex-row items-center gap-2" }>
          <Home className="h-[1.2rem] w-[1.2rem]" />
          <Separator orientation="vertical" />
          <p>Home</p>
          <span className="sr-only">Home</span>
        </Link>
      </Button>
    );
  }
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/">
        <Home className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Home</span>
      </Link>
    </Button>
  );
}