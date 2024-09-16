"use client";

import { Button } from "./ui/button";

export default function PWCopyButton({ command_name }: { command_name: string }) {
  return (
    <Button variant="outline" onClick={() => navigator.clipboard.writeText(`/pw ${command_name}`) }>/pw {command_name}</Button>
  );
}