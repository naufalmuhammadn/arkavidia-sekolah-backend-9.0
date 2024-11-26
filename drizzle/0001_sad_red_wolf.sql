CREATE TABLE IF NOT EXISTS "todo" (
	"id" text PRIMARY KEY NOT NULL,
	"authorId" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"is_completed" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "todo" ADD CONSTRAINT "todo_authorId_user_id_fk" FOREIGN KEY ("authorId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
