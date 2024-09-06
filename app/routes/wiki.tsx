import { Button } from "~/components/ui/button";
import { pages } from "~/lib/consts";
import { Link, Outlet, useLocation } from "@remix-run/react";

export default function Index() {
  const location = useLocation();
  return (
    <div className='h-[calc(100vh-4rem)] flex flex-row'>
      <div className='h-full w-16 flex flex-col gap-4 pl-2 scroll-auto'>
        {pages.map((data) => (
          <Button
            key={data.name}
            variant={data.path === location.pathname ? "default" : "outline"}
            asChild
          >
            <Link to={data.path} unstable_viewTransition>{data.name}</Link>
          </Button>
        ))}
      </div>
      <div className='h-[calc(100%-0.5rem)] w-[calc((100vw-4rem)-1rem)]'>
        <Outlet />
      </div>
    </div>
  );
}
