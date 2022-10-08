alter table "public"."groups"
  add constraint "groups_creator_id_fkey"
  foreign key ("creator_id")
  references "auth"."users"
  ("id") on update cascade on delete set null;
