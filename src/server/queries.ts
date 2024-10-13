import { eq, sql } from "drizzle-orm";
import { db } from "./db";
import { buying, playerwarps, selling, servers, users } from "./db/schema";
import { type DiscordGuildMemberType, type pwcategories, rankDiscordRoles } from "~/lib/consts";
import { getUserData } from "~/lib/getusernickname";
import { clerkClient } from "@clerk/nextjs/server";

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
    async getUserByNickname(nickname: string) {
      try {
        const user = await db.query.users.findFirst({
          where: eq(sql`${sql`discord_username`}`, nickname),
        });
        return user;
      } catch (e) {
        console.log(e);
        return "user not found";
      }
    },
    async getUserByUUID(uuid: string) {
      try {
        const user = await db.query.users.findFirst({
          where: eq(sql`${sql`uuid`}`, uuid),
        });
        return user;
      } catch (e) {
        console.log(e);
        return "user not found";
      }
    },
    pw: {
      async getPlayerWarp(id: string) {
        try {
          const playerwarp = await db.query.playerwarps.findFirst({
            where: eq(sql`${sql`id`}`, id),
          });
          return playerwarp;
        } catch (e) {
          console.log(e);
          return "playerwarp not found";
        }
      },
      async getPlayerWarpsByOwner(id: string) {
        try {
          const playerwarps = await db.query.playerwarps.findMany({
            where: eq(sql`${sql`ownerid`}`, id),
          });
          return playerwarps;
        } catch (e) {
          console.log(e);
          return "playerwarp not found";
        }
      },
      async getPlayerWarpsByServer(id: string) {
        try {
          const playerwarps = await db.query.playerwarps.findMany({
            where: eq(sql`${sql`serverid`}`, id),
          });
          return playerwarps;
        } catch (e) {
          console.log(e);
          return "playerwarp not found";
        }
      },
    }
  },
  post: {
    user: {
      async updateAllDiscordData(id: string, token: string) {
        const olduserdata = await data.get.getUser(id);
        if (olduserdata == null || olduserdata == undefined || olduserdata == "user not found") {
          const memberData = await getUserData(token);
          const hasRole = (role: string) => memberData!.roles?.includes(role);
  
          const iscelestial = hasRole(rankDiscordRoles.CELESTRIAL);
          const isimmortal = iscelestial ?? hasRole(rankDiscordRoles.Immortal);
          const isemperor = isimmortal ?? hasRole(rankDiscordRoles.Emperor);
          const isshogun = isemperor ?? hasRole(rankDiscordRoles.Shogun);
          const issamurai = isshogun ?? hasRole(rankDiscordRoles.Samurai);
          const ispancake = hasRole(rankDiscordRoles.Pancake);
          const cherry = hasRole(rankDiscordRoles.Cherry);
          if (cherry) {
            await data.post.server.serverusers.add(1);
          }
          const spirit = hasRole(rankDiscordRoles.Spirit);
          if (spirit) {
            await data.post.server.serverusers.add(2);
          }
          const lotus = hasRole(rankDiscordRoles.Lotus);
          if (lotus) {
            await data.post.server.serverusers.add(3);
          }
          const tulip = hasRole(rankDiscordRoles.Tulip);
          if (tulip) {
            await data.post.server.serverusers.add(4);
          }
          await db
            .update(users)
            .set({
              discord_username:
                memberData!.nick ??
                memberData!.user?.username ??
                memberData!.user?.global_name,
              mc_username: memberData!.nick?.replace("🌸 ", ""),
              iscelestial,
              isimmortal,
              isemperor,
              isshogun,
              issamurai,
              ispancake,
              cherry,
              spirit,
              lotus,
              tulip,
            })
            .where(eq(sql`${sql`id`}`, id));
          return;
        }
        const memberData = await getUserData(token);
        const hasRole = (role: string) => memberData!.roles?.includes(role);

        const iscelestial = hasRole(rankDiscordRoles.CELESTRIAL);
        const isimmortal = iscelestial ?? hasRole(rankDiscordRoles.Immortal);
        const isemperor = isimmortal ?? hasRole(rankDiscordRoles.Emperor);
        const isshogun = isemperor ?? hasRole(rankDiscordRoles.Shogun);
        const issamurai = isshogun ?? hasRole(rankDiscordRoles.Samurai);
        const ispancake = hasRole(rankDiscordRoles.Pancake);
        const cherry = hasRole(rankDiscordRoles.Cherry);
        if (cherry && olduserdata.cherry == false) {
          await data.post.server.serverusers.add(1);
        } else if (!cherry && olduserdata.cherry == true) {
          await data.post.server.serverusers.remove(1);
        }
        const spirit = hasRole(rankDiscordRoles.Spirit);
        if (spirit && olduserdata.spirit == false) {
          await data.post.server.serverusers.add(2);
        } else if (!spirit && olduserdata.spirit == true) {
          await data.post.server.serverusers.remove(2);
        }
        const lotus = hasRole(rankDiscordRoles.Lotus);
        if (lotus && olduserdata.lotus == false) {
          await data.post.server.serverusers.add(3);
        } else if (!lotus && olduserdata.lotus == true) {
          await data.post.server.serverusers.remove(3);
        }
        const tulip = hasRole(rankDiscordRoles.Tulip);
        if (tulip && olduserdata.tulip == false) {
          await data.post.server.serverusers.add(4);
        } else if (!tulip && olduserdata.tulip == true) {
          await data.post.server.serverusers.remove(4);
        }
        await db
          .update(users)
          .set({
            discord_username:
              memberData!.nick ??
              memberData!.user?.username ??
              memberData!.user?.global_name,
            mc_username: memberData!.nick?.replace("🌸 ", ""),
            iscelestial,
            isimmortal,
            isemperor,
            isshogun,
            issamurai,
            ispancake,
            cherry,
            spirit,
            lotus,
            tulip,
          })
          .where(eq(sql`${sql`id`}`, id));
      },
      async create(id: string, memberData: DiscordGuildMemberType) {
        const hasRole = (role: string) => memberData.roles?.includes(role);

        const iscelestial = hasRole(rankDiscordRoles.CELESTRIAL);
        const isimmortal = iscelestial ?? hasRole(rankDiscordRoles.Immortal);
        const isemperor = isimmortal ?? hasRole(rankDiscordRoles.Emperor);
        const isshogun = isemperor ?? hasRole(rankDiscordRoles.Shogun);
        const issamurai = isshogun ?? hasRole(rankDiscordRoles.Samurai);
        const ispancake = hasRole(rankDiscordRoles.Pancake);
        const cherry = hasRole(rankDiscordRoles.Cherry);
        if (cherry) {
          await data.post.server.serverusers.add(1);
        }
        const spirit = hasRole(rankDiscordRoles.Spirit);
        if (spirit) {
          await data.post.server.serverusers.add(2);
        }
        const lotus = hasRole(rankDiscordRoles.Lotus);
        if (lotus) {
          await data.post.server.serverusers.add(3);
        }
        const tulip = hasRole(rankDiscordRoles.Tulip);
        if (tulip) {
          await data.post.server.serverusers.add(4);
        }

        await db.insert(users).values({
          id,
          discord_username:
            memberData.nick ??
            memberData.user?.username ??
            memberData.user?.global_name,
          mc_username: memberData.nick?.replace("🌸 ", ""),
          iscelestial,
          isimmortal,
          isemperor,
          isshogun,
          issamurai,
          ispancake,
          cherry,
          spirit,
          lotus,
          tulip,
        });
      },
    },
    server: {
      serverusers: {
        async add(id: number) {
          await db
            .update(servers)
            .set({ registered_users: sql.raw(`registered_users + 1`) })
            .where(eq(sql`${sql`id`}`, id));
        },
        async remove(id: number) {
          await db
            .update(servers)
            .set({ registered_users: sql.raw(`registered_users - 1`) })
            .where(eq(sql`${sql`id`}`, id));
        },
      },
    },
    pw: {
      async newPlayerWarp(name: string, command_name: string, description: string, serverid: number, ownerid: string, items: string[], pwcategory: pwcategories) {
        await db.insert(playerwarps).values({
          name,
          command_name,
          description,
          ownerid,
          serverid,
          pwcategory,
          items,
        });
      }
    }
  },
  delete: {
    async deleteUser(id: string) {
      await db.delete(buying).where(eq(sql`${sql`buyer_id`}`, id));
      await db.delete(selling).where(eq(sql`${sql`seller_id`}`, id));
      await db.delete(playerwarps).where(eq(sql`${sql`ownerid`}`, id));
      const userdata = await data.get.getUser(id);
      if (userdata == null || userdata == undefined || userdata == "user not found") {
        return;
      }
      if (userdata.cherry) {
        await data.post.server.serverusers.remove(1);
      }
      if (userdata.spirit) {
        await data.post.server.serverusers.remove(2);
      }
      if (userdata.lotus) {
        await data.post.server.serverusers.remove(3);
      }
      if (userdata.tulip) {
        await data.post.server.serverusers.remove(4);
      }
      await clerkClient.users.deleteUser(id)
      await db.delete(users).where(eq(sql`${sql`id`}`, id));
    },
    async deletePlayerWarp(id: string) {
      await db.delete(playerwarps).where(eq(sql`${sql`id`}`, id));
    }
  }
};
