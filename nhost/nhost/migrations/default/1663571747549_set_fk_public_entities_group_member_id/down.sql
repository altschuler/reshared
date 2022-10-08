alter table "public"."entities" drop constraint "entities_group_member_id_fkey",
  add constraint "entities_group_member_id_fkey"
  foreign key ("group_member_id")
  references "public"."group_members"
  ("id") on update cascade on delete set null;
