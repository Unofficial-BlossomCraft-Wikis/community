import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-2 mb-2 h-full w-full overflow-y-scroll rounded-lg bg-background p-2">
      <div className="prose">
        <h1>Credits</h1>
        <p>Use of BlossomCraft and its logos was granted by LegionOfBullets, Owner of the BlossomCraft Minecraft Server.</p>
        <p>Minecraft and its logos/textures are property of Mojang Studios (Micorsoft).</p>
        <p>The BCUW logo was created by <Link href="https://github.com/altie122">altie122</Link> using the <Link href="https://www.blockbench.net/plugins/minecraft_title_generator">Minecraft Title Generator</Link> plugin for <Link href="https://www.blockbench.net/">Blockbench</Link>.</p>
      </div>
    </main>
  );
}
