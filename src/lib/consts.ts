import { APIAvatarDecorationData, APIUser, GuildMemberFlags, Snowflake } from "discord-api-types/v10";

export const WikiPages = [
  {
    "name": "Home",
    "path": "/wiki"
  },
  {
    "name": "Crates",
    "path": "/wiki/crates"
  },
  {
    "name": "Items",
    "path": "/wiki/items"
  }
]

export const LegalPages = [
  {
    "name": "Privacy Policy",
    "path": "/legal/privacy-policy"
  },
  {
    "name": "Cookie Policy",
    "path": "/legal/cookies"
  }
]

export type Crates = {
  id: string;
  path: string;
  name: string;
  btn_name: string;
  items: string[];
}

export type Items = {
  id: string;
  path: string;
  slug: string;
  name: string;
  crate: string;
  crate_slug: string;
  crate_path: string;
  rarity: string;
  lore: string;
  image_url: string;
  mono_image_url: string;
  item_slot_image_url: string;
  winchance: number;
  enchantments?: { name: string, level: number }[];
  unmodifiable?: boolean;
  unbreakable?: boolean;
  dyed?: boolean;
  customtexture?: boolean;
}

export type DiscordGuildMemberType = {
      user?: APIUser;
      nick?: string;
      avatar?: string;
      roles?: Snowflake[];
      joined_at?: string;
      premium_since?: string;
      deaf?: boolean;
      mute?: boolean;
      flags?: GuildMemberFlags;
      pending?: boolean;
      permissions?: string;
      communication_disabled_until?: string;
      avatar_decoration_data?: APIAvatarDecorationData;
}