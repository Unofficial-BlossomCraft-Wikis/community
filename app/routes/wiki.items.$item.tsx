import { Button } from "~/components/ui/button";
import { Link, useLocation } from "@remix-run/react";
import { items } from "~/lib/consts"


export default function Index() {
  const location = useLocation();
  const item = items.find((item) => item.independentpath === location.pathname);
  if (!item) {
    return (
      <div className="rounded-lg bg-background w-full h-full scroll-auto mx-2 mb-2 p-2 justify-center text-center flex flex-1 flex-col">
        <h1 className="text-[10vw] font-bold">Item Not Found</h1>
      </div>
    );
  }
  return (
    <div className="rounded-lg bg-background w-full h-full scroll-auto mx-2 mb-2 p-2">
      <h1 className="text-3xl">{item.name}</h1>
      <img src={item.image} alt={item.name} />
    </div>
  );
}
