alter table "public"."entities"
  add constraint "entities_transfer_request_id_fkey"
  foreign key ("transfer_request_id")
  references "public"."transfer_request"
  ("id") on update cascade on delete cascade;
