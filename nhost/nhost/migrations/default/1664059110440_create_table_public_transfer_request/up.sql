CREATE TABLE "public"."transfer_request" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "thing_id" uuid NOT NULL, "message" text NOT NULL, "receiver_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("thing_id") REFERENCES "public"."things"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("receiver_id") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("thing_id"));COMMENT ON TABLE "public"."transfer_request" IS E'requests to transfer a thing to another owner';
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
CREATE TRIGGER "set_public_transfer_request_updated_at"
BEFORE UPDATE ON "public"."transfer_request"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_transfer_request_updated_at" ON "public"."transfer_request" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
