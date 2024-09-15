CREATE TABLE IF NOT EXISTS "bcuw_crate" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"button_name" varchar NOT NULL,
	"path" varchar NOT NULL,
	"items" json
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bcuw_item" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"button_name" varchar NOT NULL,
	"path" varchar NOT NULL,
	"crate" varchar NOT NULL,
	"crate_path" varchar NOT NULL,
	"rarity" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"mono_image_url" varchar NOT NULL,
	"item_slot_image_url" varchar NOT NULL,
	"winchance" bigint NOT NULL,
	"enchantments" json,
	"unmodifiable" boolean DEFAULT false NOT NULL,
	"unbreakable" boolean DEFAULT false NOT NULL,
	"dyed" boolean DEFAULT false NOT NULL,
	"customtexture" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
DROP TABLE "bcuw_user_server";--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "mc_username" varchar(16);--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "isbcuw" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "isbcuw_admin" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "iscelestial" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "isimmortal" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "isemperor" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "isshogun" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "issamurai" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "ispancake" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "cherry" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "spirit" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "lotus" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD COLUMN "tulip" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_user" DROP COLUMN IF EXISTS "name";