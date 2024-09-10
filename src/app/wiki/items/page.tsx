// import RandomItem from "~/components/random/item";

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const isInf = searchParams.inf === "true"; // Adjusting to ensure it's a boolean
  const infSlug = searchParams.infslug || ""; // Providing a default value if undefined

  console.log(isInf, infSlug);

  return (
    <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
      {isInf ? <h1 className="text-[5vw] font-bold">Item Not Found: {infSlug}</h1> : null}
      {/* <RandomItem /> */}
    </main>
  );
}

