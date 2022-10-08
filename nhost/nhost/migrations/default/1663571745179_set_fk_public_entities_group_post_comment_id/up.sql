alter table "public"."entities" drop constraint "entities_group_post_comment_id_fkey",
  add constraint "entities_group_post_comment_id_fkey"
  foreign key ("group_post_comment_id")
  references "public"."group_post_comment"
  ("id") on update cascade on delete cascade;
