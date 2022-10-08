alter table "public"."user_settings"
  add constraint "user_settings_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update cascade on delete cascade;
