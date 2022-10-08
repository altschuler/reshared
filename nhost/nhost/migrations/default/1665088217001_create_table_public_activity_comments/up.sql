CREATE TABLE "public"."activity_comments" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "activity_id" uuid NOT NULL, "author_id" uuid NOT NULL, "content" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("activity_id") REFERENCES "public"."activities"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("author_id") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE cascade);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_activity_comments_updated_at"
BEFORE UPDATE ON "public"."activity_comments"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_activity_comments_updated_at" ON "public"."activity_comments" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
