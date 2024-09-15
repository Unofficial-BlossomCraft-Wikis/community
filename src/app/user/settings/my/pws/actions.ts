'use server'

import { revalidatePath } from "next/cache";
import { data } from "~/server/queries";

export async function deletePW(id: string) {
  await data.delete.deletePlayerWarp(id);
  revalidatePath("/user/settings/my/pws");
}