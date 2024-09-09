// import RandomItem from "~/components/random/item";

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const isInf = searchParams["inf"] == "true";
  const infSlug = searchParams["infslug"];
  return (
    <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
      {isInf ? <h1 className="text-[5vw] font-bold">Item Not Found: {infSlug}</h1> : <></>}
      {/* <RandomItem /> */}
    </main>
  );
}
