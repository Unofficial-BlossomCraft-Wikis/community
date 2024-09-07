import type { MetaFunction } from "@remix-run/cloudflare";
import { ModeToggle } from "~/components/mode-toggle"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <ModeToggle />
    </div>
  );
}
