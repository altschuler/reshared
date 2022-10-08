alter table "public"."entities" drop constraint "entities_group_post_id_fkey",
  add constraint "entities_group_post_id_fkey"
  foreign key ("group_post_id")
  references "public"."group_posts"
  ("id") on update cascade on delete set null;
