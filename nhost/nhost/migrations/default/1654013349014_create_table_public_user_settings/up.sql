CREATE TABLE "public"."user_settings" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "updated_at" timestamptz NOT NULL DEFAULT now(), "avatar_file_id" uuid, PRIMARY KEY ("id") , FOREIGN KEY ("avatar_file_id") REFERENCES "storage"."files"("id") ON UPDATE cascade ON DELETE set null);COMMENT ON TABLE "public"."user_settings" IS E'Settings for a user';
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
CREATE TRIGGER "set_public_user_settings_updated_at"
BEFORE UPDATE ON "public"."user_settings"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_settings_updated_at" ON "public"."user_settings" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
