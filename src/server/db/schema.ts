// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  bigint,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  uuid,
  json,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `bcuw_${name}`);

export const selling = createTable(
  "selling",
  {
    id: uuid('id').defaultRandom().primaryKey(),
    seller_id: varchar("seller_id").references(() => users.id),
    item: varchar("item"),
    price: bigint("price", { mode: "number" }).default(1000000),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
);

export const buying = createTable(
  "buying",
  {
    id: uuid('id').defaultRandom().primaryKey(),
    buyer_id: varchar("buyer_id").references(() => users.id),
    item: varchar("item"),
    price: bigint("price", { mode: "number" }).default(1000000),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
);

export const servers = createTable("server", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  registered_users: bigint("registered_users", { mode: "number" }).default(0),
  icon: varchar("icon"),
});

export const users = createTable("user", {
  id: varchar("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom(),
  mc_username: varchar("mc_username", { length: 16 }),
  discord_username: varchar("discord_username"),
  isbcuw: boolean("isbcuw").default(false),
  isbcuw_admin: boolean("isbcuw_admin").default(false),
  iscelestial: boolean("iscelestial").default(false),
  isimmortal: boolean("isimmortal").default(false),
  isemperor: boolean("isemperor").default(false),
  isshogun: boolean("isshogun").default(false),
  issamurai: boolean("issamurai").default(false),
  ispancake: boolean("ispancake").default(false),
  cherry: boolean("cherry").default(false),
  spirit: boolean("spirit").default(false),
  lotus: boolean("lotus").default(false),
  tulip: boolean("tulip").default(false),
  items: json("items"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const items = createTable("item", {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar("name").notNull(),
  button_name: varchar("button_name").notNull(),
  path: varchar("path").notNull(),
  crate: varchar("crate").notNull(),
  crate_path: varchar("crate_path").notNull(),
  rarity: varchar("rarity").notNull(),
  image_url: varchar("image_url").notNull(),
  mono_image_url: varchar("mono_image_url").notNull(),
  item_slot_image_url: varchar("item_slot_image_url").notNull(),
  winchance: bigint("winchance", { mode: "number" }).notNull(),
  enchantments: json("enchantments"),
  unmodifiable: boolean("unmodifiable").notNull().default(false),
  unbreakable: boolean("unbreakable").notNull().default(false),
  dyed: boolean("dyed").notNull().default(false),
  customtexture: boolean("customtexture").notNull().default(false),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const crates = createTable("crate", {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar("name").notNull(),
  button_name: varchar("button_name").notNull(),
  path: varchar("path").notNull(),
  items: json("items"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const pwcategories = pgEnum("pwcategory", ["misc", "shop", "town", "farm", "base"]);
export const pwflagreasons = pgEnum("pwflagreason", ["Does not Exist", "Harmful content", "Not Flagged"]);

export const playerwarps = createTable("playerwarp", {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar("name").notNull(),
  command_name: varchar("command_name").notNull(),
  description: varchar("description").default(""),
  ownerid: varchar("ownerid").references(() => users.id).notNull(),
  serverid: serial("serverid").references(() => servers.id).notNull(),
  pwcategory: pwcategories("pwcategory").notNull(),
  items: json("items"),
  flagged: boolean("flagged").default(false),
  flagreason: pwflagreasons("flagreason").default("Not Flagged"),
  createdAt: timestamp("created_at", { withTimezone: true })
  .defaultNow()
  .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});