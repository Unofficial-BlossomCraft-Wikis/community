"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function RandomCrate() {
  const router = useRouter()
  return (
    <Button variant="outline" onClick={() => router.push('/api/random/crate?redirect=true')}>
      Go to Random Crate
    </Button>
  );
}
