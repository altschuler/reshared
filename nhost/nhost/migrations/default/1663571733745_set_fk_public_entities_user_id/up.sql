alter table "public"."entities" drop constraint "entities_user_id_fkey",
  add constraint "entities_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update cascade on delete cascade;
