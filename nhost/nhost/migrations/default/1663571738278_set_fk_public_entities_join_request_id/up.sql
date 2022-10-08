alter table "public"."entities" drop constraint "entities_join_request_id_fkey",
  add constraint "entities_join_request_id_fkey"
  foreign key ("join_request_id")
  references "public"."group_join_requests"
  ("id") on update cascade on delete cascade;
