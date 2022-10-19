import {
    Activity_Verb_Enum,
    NotificationCardFragment,
    Notifications,
    UserCardFragment,
} from '../../../generated/graphql';
import { ServerFindNotifcationDocument } from '../../../generated/server-queries';
import { fixQuery, makeEventHandler, sendMail } from '../../../server';
import { activityMessageSafe } from '../../../utils/activity';
import { urlFor } from '../../../utils/urls';

interface EmailConfig {
    // Whether it's an immediate email worthy
    direct?: boolean;
    // Whether it's a "daily digest" type of email worthy
    digest?: boolean;
    // The subject of the potential email
    subject: string;
    // CTA link
    link?: string;
}

export default makeEventHandler<Notifications>(async (args, ctx) => {
    // We're only interested in new notifications (also configured in Hasura, but just in case)
    if (args.event.op !== 'INSERT') {
        return ctx.success({
            success: true,
            message: `ok: skipping notification event of type ${args.event.op}`,
        });
    }

    const query = await ctx.adminClient.query({
        query: fixQuery(ServerFindNotifcationDocument),
        variables: { id: args.event.data.new!.id },
    });

    const notification = query.data.notifications_by_pk;

    // Should not be able to happen, but who knows, and we'll just ignore it
    if (!notification) {
        return ctx.success({
            success: true,
            message: `warning: notification not found (odd situation)`,
        });
    }

    const config = getEmailConfig(notification, notification.user);

    // TODO: check if user has disabled email settings for this activity
    if (config?.direct) {
        const message = activityMessageSafe(notification.activity as any, notification.user);

        if (!message) {
            return ctx.error('Unhandled activity type');
        }

        await sendMail({
            to: notification.user.email,
            subject: config.subject,
            template: 'new_activity',
            data: {
                user_name: notification.user.displayName,
                message,
                link: urlFor.activity(notification.activity),
                settings_link: urlFor.user.settings(true),
            },
        });
    }

    return ctx.success({ success: true });
}, true);

const getEmailConfig = (
    notification: NotificationCardFragment,
    receiver: Pick<UserCardFragment, 'id' | 'displayName'>,
): EmailConfig | null => {
    const { activity } = notification!;
    const ent = activity.entity;
    const verb = activity.verb;

    if (ent.group_member) {
        if (verb === Activity_Verb_Enum.BecameAdmin) {
            return {
                direct: true,
                subject: `You have been made an admin of ${ent.group_member.group.name}`,
            };
        }

        if (verb === Activity_Verb_Enum.BecameOwner) {
            return {
                direct: true,
                subject: `You have been made the owner of ${ent.group_member.group.name}`,
            };
        }

        if (verb === Activity_Verb_Enum.RevokedAdmin) {
            return {
                direct: true,
                subject: `You are no longer an admin of ${ent.group_member.group.name}`,
            };
        }
    }

    if (ent.group_post) {
        if (verb === Activity_Verb_Enum.Added) {
            return {
                direct: false,
                subject: `New post in ${ent.group_post.group.name}`,
            };
        }
    }

    if (ent.group_post_comment) {
        if (verb === Activity_Verb_Enum.Added) {
            const yourPost = ent.group_post_comment.post.author_id === receiver.id;
            return {
                direct: true,
                subject: `New reply to ${yourPost ? 'your' : 'a'} post in ${
                    ent.group_post_comment.post.group.name
                }`,
            };
        }
    }

    if (ent.group_join_request) {
        if (verb === Activity_Verb_Enum.Accepted) {
            return {
                direct: true,
                subject: `Your request to join ${ent.group_join_request.group.name} has been accepted`,
            };
        }

        if (verb === Activity_Verb_Enum.Rejected) {
            return {
                direct: true,
                subject: `Your request to join ${ent.group_join_request.group.name} has been accepted`,
            };
        }

        if (verb === Activity_Verb_Enum.Added) {
            return {
                direct: true,
                subject: `Someone would like to join ${ent.group_join_request.group.name}`,
            };
        }
    }

    if (ent.transfer_request) {
        const { receiver, original_owner: giver, thing } = ent.transfer_request;

        if (!receiver || !giver || !thing) {
            return null;
        }

        if (verb === Activity_Verb_Enum.Accepted) {
            return {
                direct: true,
                subject: `${receiver.displayName} accepted ownership of ${thing.name}`,
            };
        }

        if (verb === Activity_Verb_Enum.Rejected) {
            return {
                direct: true,
                subject: `${receiver.displayName} declined to take ownership of ${thing.name}`,
            };
        }

        if (verb === Activity_Verb_Enum.Added) {
            return {
                direct: true,
                subject: `${giver.displayName} wants to transfer ownership of ${thing.name} to you`,
            };
        }
    }

    return null;
};
