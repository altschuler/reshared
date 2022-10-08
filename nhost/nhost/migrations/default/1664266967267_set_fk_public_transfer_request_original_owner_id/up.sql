alter table "public"."transfer_request"
  add constraint "transfer_request_original_owner_id_fkey"
  foreign key ("original_owner_id")
  references "auth"."users"
  ("id") on update cascade on delete cascade;
