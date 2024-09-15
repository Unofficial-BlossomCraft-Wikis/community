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
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "~/components/ui/card";
import { PWCreationForm } from "~/components/pw-creation-form";

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return (
      <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
        <div className="prose">
          <h1>User not found.</h1>
        </div>
      </main>
    );
  }
  const userData = await data.get.getUser(user.id);
  if (!userData || userData === "user not found") {
    return (
      <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
        <div className="prose">
          <h1>User not found.</h1>
        </div>
      </main>
    );
  }
  return (
    <main className="mx-2 mb-2 flex h-full w-full flex-col items-center justify-center overflow-scroll rounded-lg bg-background p-2">
      <Card className="w-full bg-secondary sm:w-96 overflow-scroll">
        <CardHeader>
          <CardTitle>New PW</CardTitle>
          <CardDescription>
            Create a new player warp
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <PWCreationForm userId={user.id} />
        </CardContent>
        <CardFooter>
          <p className="text-xs">Please follow offical BlossomCraft rules when naming and making the description of your player warp.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
