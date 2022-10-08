alter table "public"."groups"
  add constraint "groups_banner_file_id_fkey"
  foreign key ("banner_file_id")
  references "storage"."files"
  ("id") on update cascade on delete set null;
