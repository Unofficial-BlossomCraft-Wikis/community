import { eq, sql } from "drizzle-orm";
import { db } from "./db";
import { users } from "./db/schema";

export const data = {
  get: {
    async getUser(id: string) {
      try {
        const user = await db.query.users.findFirst({
          where: eq(sql`${sql`id`}`, id),
        });
        return user;
      } catch (e) {
        console.log(e);
        return "user not found";
      }
    },
  },
  post: {
    async updateUserDiscordName(id: string, name: string) {
      await db
        .update(users)
        .set({ discord_username: name })
        .where(eq(sql`${sql`id`}`, id));
    },
    async createUser(id: string, name: string) {
      await db.insert(users).values({ id, discord_username: name, mc_username: name.replace("🌸 ", "") });
    },
  },
};
