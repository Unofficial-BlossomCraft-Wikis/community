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
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";

export default async function HomePage() {
  const user = await currentUser();
  if (user == null || user == undefined) {
    return <p>User not found</p>;
  }
  const token = await getOAuthToken();
  const userData = await data.get.getUser(user.id);
  if (
    userData == null ||
    userData == undefined ||
    userData == "user not found"
  ) {
    return <p>User not found</p>;
  }
  return (
    <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
      <div className="prose">
        <h2>Update Discord Data</h2>
        <p>
          Update discord nickname and roles (nickname and roles on This site)
        </p>
        <p>Current Nickname:</p>
        <b className="mention">{userData.discord_username}</b>
        <p>Current Roles:</p>
        <div className="flex flex-row gap-2 flex-wrap">
          {userData.iscelestial && (
            <Badge variant={"celestial"}>Celestial</Badge>
          )}
          {userData.isimmortal && <Badge variant={"immortal"}>Immortal</Badge>}
          {userData.isemperor && <Badge variant={"emperor"}>Emperor</Badge>}
          {userData.isshogun && <Badge variant={"shogun"}>Shogun</Badge>}
          {userData.issamurai && <Badge variant={"samurai"}>Samurai</Badge>}
          {userData.ispancake && <Badge variant={"pancake"}>Pancake</Badge>}
        </div>
        <p>Current Servers:</p>
        <div className="flex flex-row gap-2 pb-2 flex-wrap">
          {userData.cherry && <Badge variant={"cherry"}>Cherry</Badge>}
          {userData.spirit && <Badge variant={"spirit"}>Spirit</Badge>}
          {userData.lotus && <Badge variant={"lotus"}>Lotus</Badge>}
          {userData.tulip && <Badge variant={"tulip"}>Tulip</Badge>}
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          {user && token && (
            <UpdateUserDiscordDataButton userId={user.id} token={token} />
          )}
        </Suspense>
        <h2>Delete Account</h2>
        <p>Delete your account and all data associated with it</p>

        <Suspense fallback={<p>Loading...</p>}>
          
        </Suspense>
        <AlertDialog>
          <Button variant={"destructive"} asChild>
            <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
          </Button>
          <AlertDialogContent className="bg-secondary">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              {user && <DeleteUserButton userId={user.id} />}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </main>
  );
}
