CREATE TABLE IF NOT EXISTS "bcuw_playerwarp" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"ownerid" varchar,
	"items" json
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bcuw_playerwarp" ADD CONSTRAINT "bcuw_playerwarp_ownerid_bcuw_user_id_fk" FOREIGN KEY ("ownerid") REFERENCES "public"."bcuw_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
