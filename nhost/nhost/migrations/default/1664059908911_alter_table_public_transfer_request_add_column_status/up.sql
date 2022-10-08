alter table "public"."transfer_request" add column "status" text
 not null default 'pending';
