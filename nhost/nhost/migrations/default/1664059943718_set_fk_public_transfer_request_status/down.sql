alter table "public"."transfer_request" drop constraint "transfer_request_status_fkey",
  add constraint "transfer_request_status_fkey"
  foreign key ("thing_id")
  references "public"."things"
  ("id") on update cascade on delete cascade;
