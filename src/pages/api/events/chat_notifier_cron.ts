import { MailData, makeCronHandler, sendMail } from '../../../server';
import {
    ServerUnreadChatMemberDocument,
    ServerUpdateChatGroupMemberDocument,
} from '../../../generated/server-queries';
import { flatMap, groupBy, map, uniq } from 'lodash-es';
import dayjs from 'dayjs';
import { urlFor } from '../../../utils/urls';

export default makeCronHandler<any>(async (_args, ctx) => {
    const query = await ctx.adminClient.query({
        query: ServerUnreadChatMemberDocument,
    });
    const unreads = query.data?.chat_group_member_info;

    // TODO: this filtering should be done by the query
    const needsNotification = unreads.filter((u) => {
        const notified_at = u.chat_group_member?.notified_at;
        const qualifies =
            !notified_at ||
            (!u.last_read && !notified_at) ||
            dayjs(notified_at).isBefore(u.last_read);
        const lastReadMoreThan10minAgo =
            !u.last_read || dayjs(u.last_read).isBefore(dayjs().subtract(10, 'minutes'));

        return u.user && qualifies && lastReadMoreThan10minAgo;
    });

    const byUser = groupBy(needsNotification, (u) => u.user?.id);
    const emails = map(byUser, (unreadChats): MailData<any> => {
        const user = unreadChats[0].user!;

        const messages = unreadChats.map((u) => u.chat_group?.messages[0]);
        return {
            to: user.email,
            subject: 'New message on Reshared',
            template: 'new_chat',
            data: {
                user_name: user.displayName,
                sender_names: uniq(
                    messages.map((m) => m?.sender.displayName || '[ deleted user ]'),
                ).join(' and '),
                // message: messages.map((m) => m?.message),
                link: urlFor.chat.root(true),
                settings_link: urlFor.user.settings(true),
            },
        };
    });

    await sendMail(emails);

    const notifiedIds = flatMap(byUser).map((u) => u.chat_group_member!.id);
    const update = await ctx.adminClient.mutate({
        mutation: ServerUpdateChatGroupMemberDocument,
        variables: {
            chat_group_member_ids: notifiedIds,
            input: {
                notified_at: 'now()',
            },
        },
    });

    ctx.success({
        success: true,
        notified: notifiedIds,
        affected_rows: update.data?.update_chat_group_members?.affected_rows,
    });
});
