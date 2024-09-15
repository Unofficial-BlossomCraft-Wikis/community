'use server'

import { revalidatePath } from "next/cache";
import { type pwcategories } from "~/lib/consts";
import { data } from "~/server/queries";

export async function newPW(
  name: string, 
  command_name: string, 
  description: string, 
  serverid: number, 
  ownerid: string, 
  items: string[], 
  pwcategory: pwcategories
) {
  console.log("Incoming data:", { name, command_name, description, serverid, ownerid, items, pwcategory });
  
  await data.post.pw.newPlayerWarp(name, command_name, description, serverid, ownerid, items, pwcategory);
  revalidatePath("/user/settings/my/pws");
}