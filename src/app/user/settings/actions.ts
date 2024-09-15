'use server'

import { revalidatePath } from "next/cache";
import { data } from "~/server/queries";

 
export async function updateUserData(id: string, token: string) {
  await data.post.user.updateAllDiscordData(id, token);
  revalidatePath("/user/settings");
}

export async function deleteUser(id: string) {
  await data.delete.deleteUser(id);
}