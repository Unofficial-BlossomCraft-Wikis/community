import { clerkClient } from "@clerk/nextjs/server";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { PWTable, userPWColumns } from "~/components/user-pw-table";
import { playerWarpType } from "~/lib/consts";
import { data } from "~/server/queries";

export default async function HomePage({
  params,
}: {
  params: { uuid: string };
}) {
  const { uuid } = params;
  const user = await data.get.getUserByUUID(uuid);
  if (user == null || user == undefined || user == "user not found") {
    return (
      <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
        <h1>User Not Found</h1>
      </main>
    );
  }
  const pwfetch = await data.get.pw.getPlayerWarpsByOwner(user.id);
  const pws: playerWarpType[] =
    pwfetch == "playerwarp not found" ? [] : (pwfetch as playerWarpType[]);
  const clerkUser = await clerkClient().users.getUser(user.id);
  return (
    <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
      <div className="prose">
        <div className="flex h-[50%] flex-col-reverse justify-center md:flex-row">
          <div className="prose flex flex-col items-center justify-center text-center md:basis-1/2">
            <h1 className="mention">{user.discord_username}</h1>
            <div>
              <h3>Ranks:</h3>
              <div className="mb-2 flex flex-row flex-wrap gap-2">
                {user.iscelestial && (
                  <Badge variant={"celestial"}>Celestial</Badge>
                )}
                {user.isimmortal && (
                  <Badge variant={"immortal"}>Immortal</Badge>
                )}
                {user.isemperor && <Badge variant={"emperor"}>Emperor</Badge>}
                {user.isshogun && <Badge variant={"shogun"}>Shogun</Badge>}
                {user.issamurai && <Badge variant={"samurai"}>Samurai</Badge>}
                {user.ispancake && <Badge variant={"pancake"}>Pancake</Badge>}
              </div>
              <Separator />
              <h3>Servers:</h3>
              <div className="mb-2 flex flex-row flex-wrap gap-2">
                {user.cherry && <Badge variant={"cherry"}>Cherry</Badge>}
                {user.spirit && <Badge variant={"spirit"}>Spirit</Badge>}
                {user.lotus && <Badge variant={"lotus"}>Lotus</Badge>}
                {user.tulip && <Badge variant={"tulip"}>Tulip</Badge>}
              </div>
              <Separator />
              {user.isbcuw && (
                <>
                  <h3>BCUW:</h3>
                  <div className="mb-2 flex flex-row flex-wrap gap-2">
                    <Badge variant={"default"}>BCUW</Badge>
                    {user.isbcuw_admin && (
                      <Badge variant={"default"}>BCUW Admin</Badge>
                    )}
                  </div>
                  <Separator />
                </>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center md:basis-1/2">
            <Avatar className="h-1/2 w-auto">
              <AvatarImage src={clerkUser.imageUrl} className="h-full w-full" />
              <AvatarFallback className="h-full w-full">
                {clerkUser.username ? clerkUser.username : ""}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <h2>Pw&apos;s:</h2>
        <PWTable columns={userPWColumns} data={pws} />
      </div>
    </main>
  );
}
