alter table "public"."user_settings" add column "created_at" timestamptz
 null default now();
