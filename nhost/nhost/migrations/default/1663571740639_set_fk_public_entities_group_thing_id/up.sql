alter table "public"."entities" drop constraint "entities_group_thing_id_fkey",
  add constraint "entities_group_thing_id_fkey"
  foreign key ("group_thing_id")
  references "public"."group_thing"
  ("id") on update cascade on delete cascade;
