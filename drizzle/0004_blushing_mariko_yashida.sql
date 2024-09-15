DO $$ BEGIN
 CREATE TYPE "public"."pwcategory" AS ENUM('misc', 'shop', 'town', 'farm', 'base');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "bcuw_playerwarp" ALTER COLUMN "ownerid" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bcuw_crate" ADD COLUMN "updated_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "bcuw_item" ADD COLUMN "updated_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "bcuw_playerwarp" ADD COLUMN "command_name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "bcuw_playerwarp" ADD COLUMN "serverid" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "bcuw_playerwarp" ADD COLUMN "pwcategory" "pwcategory" NOT NULL;--> statement-breakpoint
ALTER TABLE "bcuw_playerwarp" ADD COLUMN "updated_at" timestamp with time zone;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bcuw_playerwarp" ADD CONSTRAINT "bcuw_playerwarp_serverid_bcuw_server_id_fk" FOREIGN KEY ("serverid") REFERENCES "public"."bcuw_server"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
