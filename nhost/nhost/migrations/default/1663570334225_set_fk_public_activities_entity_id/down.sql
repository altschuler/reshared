alter table "public"."activities" drop constraint "activities_entity_id_fkey",
  add constraint "activities_entity_id_fkey"
  foreign key ("entity_id")
  references "public"."entities"
  ("id") on update cascade on delete set null;
