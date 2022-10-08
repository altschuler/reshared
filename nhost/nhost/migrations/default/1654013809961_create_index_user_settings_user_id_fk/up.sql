CREATE UNIQUE INDEX "user_settings_user_id_fk" on
  "public"."user_settings" using btree ("user_id");
