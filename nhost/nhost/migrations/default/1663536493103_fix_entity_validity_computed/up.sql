CREATE OR REPLACE FUNCTION public.entity_valid(entity_row entities)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
  SELECT (
    (entity_row.thing_id IS NOT NULL)::integer + 
    (entity_row.group_id IS NOT NULL)::integer + 
    (entity_row.join_request_id IS NOT NULL)::integer + 
    (entity_row.user_id IS NOT NULL)::integer + 
    (entity_row.group_post_id IS NOT NULL)::integer + 
    (entity_row.group_post_comment_id IS NOT NULL)::integer + 
    (entity_row.group_member_id IS NOT NULL)::integer + 
    (entity_row.group_thing_id IS NOT NULL)::integer) = 1
$function$;
