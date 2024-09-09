"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function RandomItem() {
  const router = useRouter()
  return (
    <Button variant="outline" onClick={() => router.push('/api/random/item?redirect=true')}>
      Go to Random Item
    </Button>
  );
}
