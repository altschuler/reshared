alter table "public"."transfer_request"
  add constraint "transfer_request_status_fkey"
  foreign key ("status")
  references "public"."transfer_request_status"
  ("value") on update restrict on delete restrict;
