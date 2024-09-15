DO $$ BEGIN
 CREATE TYPE "public"."pwflagreason" AS ENUM('Does not Exist', 'Harmful content', 'Not Flagged');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "bcuw_playerwarp" ADD COLUMN "flagged" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "bcuw_playerwarp" ADD COLUMN "flagreason" "pwflagreason" DEFAULT 'Not Flagged';