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
  mc_username: varchar("name", { length: 16 }),
  discord_username: varchar("discord_username"),
  items: json("items"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const user_servers = createTable("user_server", {
  user_id: varchar('user_id').references(() => users.id),
  server_id: serial('server_id').references(() => servers.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});