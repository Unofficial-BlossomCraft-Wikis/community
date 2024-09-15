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

export default async function HomePage() {
  // const user = await currentUser();
  // if (user == null || user == undefined) {
  //   return <p>User not found</p>;
  // }
  // const token = await getOAuthToken();
  // const userData = await data.get.getUser(user.id);
  // if (
  //   userData == null ||
  //   userData == undefined ||
  //   userData == "user not found"
  // ) {
  //   return <p>User not found</p>;
  // }
  return (
    <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
      <div className="prose">
        <h1>Pardon our dust, This page is currently under construction.</h1>
      </div>
    </main>
  );
}
