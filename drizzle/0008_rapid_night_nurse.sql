ALTER TABLE "bcuw_playerwarp" DROP CONSTRAINT "bcuw_playerwarp_ownerid_bcuw_user_id_fk";
--> statement-breakpoint
ALTER TABLE "bcuw_playerwarp" ALTER COLUMN "ownerid" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "bcuw_user" ALTER COLUMN "uuid" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bcuw_playerwarp" ADD CONSTRAINT "bcuw_playerwarp_ownerid_bcuw_user_uuid_fk" FOREIGN KEY ("ownerid") REFERENCES "public"."bcuw_user"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "bcuw_user" ADD CONSTRAINT "bcuw_user_uuid_unique" UNIQUE("uuid");