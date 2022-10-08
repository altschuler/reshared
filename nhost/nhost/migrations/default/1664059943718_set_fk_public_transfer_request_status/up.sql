alter table "public"."transfer_request" drop constraint "transfer_request_status_fkey",
  add constraint "transfer_request_status_fkey"
  foreign key ("status")
  references "public"."transfer_request_status"
  ("value") on update cascade on delete restrict;
