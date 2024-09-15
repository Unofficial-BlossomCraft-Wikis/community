"use client";

import { deleteUser, updateUserData } from "~/app/user/settings/actions";
import { Button } from "~/components/ui/button";
import { AlertDialogAction } from "./ui/alert-dialog";

interface UpdateButtonProps {
  userId: string;
  token: string;
}

export function UpdateUserDiscordDataButton({ userId, token }: UpdateButtonProps) {
  return <Button variant="outline" onClick={() => updateUserData(userId, token)}>Update</Button>;
}

export function DeleteUserButton({ userId }: { userId: string }) {
  return <Button variant="destructive" onClick={() => deleteUser(userId)} asChild><AlertDialogAction>Delete</AlertDialogAction></Button>;
}