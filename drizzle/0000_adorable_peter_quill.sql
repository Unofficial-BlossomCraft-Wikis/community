CREATE TABLE IF NOT EXISTS "bcuw_buying" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"buyer_id" varchar,
	"item" varchar,
	"price" bigint DEFAULT 1000000,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bcuw_selling" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"seller_id" varchar,
	"item" varchar,
	"price" bigint DEFAULT 1000000,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bcuw_server" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"registered_users" bigint DEFAULT 0,
	"icon" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bcuw_user_server" (
	"user_id" varchar,
	"server_id" serial NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bcuw_user" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar(16),
	"discord_username" varchar,
	"items" json,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bcuw_buying" ADD CONSTRAINT "bcuw_buying_buyer_id_bcuw_user_id_fk" FOREIGN KEY ("buyer_id") REFERENCES "public"."bcuw_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bcuw_selling" ADD CONSTRAINT "bcuw_selling_seller_id_bcuw_user_id_fk" FOREIGN KEY ("seller_id") REFERENCES "public"."bcuw_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bcuw_user_server" ADD CONSTRAINT "bcuw_user_server_user_id_bcuw_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."bcuw_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bcuw_user_server" ADD CONSTRAINT "bcuw_user_server_server_id_bcuw_server_id_fk" FOREIGN KEY ("server_id") REFERENCES "public"."bcuw_server"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
