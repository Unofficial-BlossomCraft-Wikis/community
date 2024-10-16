// import RandomItem from "~/components/random/item";

export default function HomePage({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const isInf = searchParams.inf === "true";
  const infSlug = searchParams.infslug ?? "";

  return (
    <main className="mx-2 mb-2 h-full w-full overflow-y-scroll rounded-lg bg-background p-2">
      {isInf ? <h1 className="text-[5vw] font-bold">Item Not Found: {infSlug}</h1> : null}
      Pardon our dust, This page is currently under construction.
      {/* <RandomItem /> */}
    </main>
  );
}

