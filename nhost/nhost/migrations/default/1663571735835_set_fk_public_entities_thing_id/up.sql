alter table "public"."entities" drop constraint "entities_thing_id_fkey",
  add constraint "entities_thing_id_fkey"
  foreign key ("thing_id")
  references "public"."things"
  ("id") on update cascade on delete cascade;
