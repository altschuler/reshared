create view chat_group_member_info as
select
	cgm.user_id,
	cgm.last_read,
	cm.chat_group_id,
	max(created_at) as last_message_at,
	case
		when cgm.last_read < max(created_at)
		and max(created_at) is not null then true
		else false
	end as has_unread,
        cgm.id
from
	chat_messages cm
inner join chat_group_members cgm on
	cgm.chat_group_id = cm.chat_group_id
group by
        cgm.id,
	cm.chat_group_id,
	cgm.user_id,
	cgm.last_read;
