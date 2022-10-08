alter table "public"."entities" drop constraint "entities_group_id_fkey",
  add constraint "entities_group_id_fkey"
  foreign key ("group_id")
  references "public"."groups"
  ("id") on update cascade on delete set null;
