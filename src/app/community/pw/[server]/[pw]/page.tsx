// import RandomCrate from "~/components/random/crate";
import Link from "next/link";
import PWCopyButton from "~/components/pw-copy-button";
import { Button } from "~/components/ui/button";
import { playerWarpType } from "~/lib/consts";
import { data } from "~/server/queries";

export default async function HomePage({
  params,
}: {
  params: { pw: string };
}) {
  const { pw } = params;
  const pwfetch = await data.get.pw.getPlayerWarp(pw);
  if (pwfetch == "playerwarp not found") {
    return (
      <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
        <h1>Player Warp not found.</h1>
      </main>
    );
  }
  const pwData = pwfetch as playerWarpType;
  const ownerData = await data.get.getUser(pwData.ownerid);
  if (ownerData == null || ownerData == undefined || ownerData == "user not found") {
    return (
      <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
        <h1>Player Warp not found.</h1>
      </main>
    );
  }
  return (
    <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
      <div className="prose">
        <h1>{pwData.name}</h1>
        <p>{pwData.description}</p>
        <p>Owner: <Button variant="link" asChild><Link href={`/user/${ownerData.uuid}`}>{ownerData.discord_username}</Link></Button></p>
        <PWCopyButton command_name={pwData.command_name} />
      </div>
    </main>
  );
}