alter table "public"."thing_images" drop constraint "thing_images_file_id_fkey",
  add constraint "thing_images_file_id_fkey"
  foreign key ("file_id")
  references "public"."file_uploads"
  ("id") on update cascade on delete cascade;
