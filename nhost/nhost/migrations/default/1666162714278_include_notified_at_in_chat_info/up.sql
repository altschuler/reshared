CREATE OR REPLACE VIEW "public"."chat_group_member_info" AS 
 
SELECT
  cgm.user_id,
  cgm.last_read,
  cm.chat_group_id,
  max(cm.created_at) AS last_message_at,
  CASE
    WHEN (
      (cgm.last_read < max(cm.created_at) or cgm.last_read is null)
      AND (max(cm.created_at) IS NOT NULL)
    ) THEN true
    ELSE false
  END AS has_unread,
  cgm.id,
  cgm.notified_at
FROM
  (
    chat_messages cm
    JOIN chat_group_members cgm ON ((cgm.chat_group_id = cm.chat_group_id))
  )
GROUP BY
  cgm.id,
  cm.chat_group_id,
  cgm.user_id,
  cgm.last_read;
