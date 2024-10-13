import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import {
  DeleteUserButton,
  UpdateUserDiscordDataButton,
} from "~/components/setting-user-buttons";
import { getOAuthToken } from "~/lib/auth/discord";
import { data } from "~/server/queries";
import { Badge } from "~/components/ui/badge";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { PWTable, userPWColumnsOwnerSide } from "~/components/user-pw-table";
import { playerWarpType } from "~/lib/consts";
import Link from "next/link";

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return (
      <main className="mx-2 mb-2 h-full w-full overflow-y-scroll rounded-lg bg-background p-2">
        <div className="prose">
          <h1>User not found.</h1>
        </div>
      </main>
    );
  }
  const userData = await data.get.getUser(user.id);
  if (!userData || userData === "user not found") {
    return (
      <main className="mx-2 mb-2 h-full w-full overflow-y-scroll rounded-lg bg-background p-2">
        <div className="prose">
          <h1>User not found.</h1>
        </div>
      </main>
    );
  }
  const pwfetch = await data.get.pw.getPlayerWarpsByOwner(userData.uuid);
  const pws: playerWarpType[] =
    pwfetch == "playerwarp not found" ? [] : (pwfetch as playerWarpType[]);
  return (
    <main className="mx-2 mb-2 h-full w-full overflow-y-scroll rounded-lg bg-background p-2">
      <div className="prose">
        <h2>Your Player Warps</h2>
        <br />
        <PWTable columns={userPWColumnsOwnerSide} data={pws} />
      </div>
      <div className="container mx-auto px-4 pt-8 pb-16 sm:px-6 lg:px-8 max-w-[1024px] flex flex-row justify-center">
      <Button variant="outline" asChild>
        <Link href="/user/settings/my/pws/new">New Player Warp</Link>
      </Button>
      </div>
    </main>
  );
}
