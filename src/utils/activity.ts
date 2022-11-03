import * as Sentry from '@sentry/react';
import { compact } from 'lodash-es';
import {
    ActivityCardFragment,
    Activity_Verb_Enum,
    Group_Post_Type_Enum,
    Transfer_Request_Status_Enum,
    UserCardFragment,
} from '../generated/graphql';

export const activityMessageSafe = (
    activity: ActivityCardFragment,
    currentUser: UserCardFragment | null,
) => {
    const ent = activity.entity;
    const actor = activity.actor?.displayName || '[Deleted user]';

    if (ent.group_thing) {
        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${actor} added ${ent.group_thing.thing.name} to ${ent.group_thing.group.name}`;
        }
    }

    if (ent.group) {
        if (activity.verb === Activity_Verb_Enum.Updated) {
            return `${actor} updated the group ${ent.group.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.Joined) {
            return `${actor} joined the group ${ent.group.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${actor} created the group ${ent.group.name}`;
        }
    }

    if (ent.group_member) {
        const newMemberName = ent.group_member.user.displayName;

        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${newMemberName} joined the group ${ent.group_member.group.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.BecameAdmin) {
            return `${actor} made you an admin of the group ${ent.group_member.group.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.BecameOwner) {
            return `${actor} made you the owner of the group ${ent.group_member.group.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.RevokedAdmin) {
            return `${actor} revoked your admin role in the group ${ent.group_member.group.name}`;
        }
    }

    if (ent.group_post) {
        if (
            activity.verb === Activity_Verb_Enum.Added &&
            ent.group_post.type === Group_Post_Type_Enum.Message
        ) {
            return `${actor} posted in ${ent.group_post.group.name}`;
        }

        if (
            activity.verb === Activity_Verb_Enum.Added &&
            ent.group_post.type === Group_Post_Type_Enum.Request
        ) {
            return `${actor} is looking for ${ent.group_post.keyword || 'something'}`;
        }

        if (activity.verb === Activity_Verb_Enum.Resolved) {
            return `${actor} marked their request for ${
                ent.group_post.keyword || 'something'
            } as resolved`;
        }

        if (activity.verb === Activity_Verb_Enum.Updated) {
            return `${actor} updated their post in ${ent.group_post.group.name}`;
        }
    }

    if (ent.group_post_comment) {
        if (activity.verb === Activity_Verb_Enum.Added) {
            const yourPost =
                currentUser && ent.group_post_comment.post.author_id === currentUser.id;
            const isRequest = ent.group_post_comment.post.type === Group_Post_Type_Enum.Request;
            if (isRequest) {
                return `${actor} commented on ${
                    yourPost ? 'your request' : "a request you're participating in"
                } for ${ent.group_post_comment.post.keyword}`;
            }

            return `${actor} commented on ${
                yourPost ? 'your post' : "a post you're participating in"
            } in ${ent.group_post_comment.post.group.name}`;
        }
    }

    if (ent.group_join_request) {
        const req = ent.group_join_request;
        if (activity.verb === Activity_Verb_Enum.Accepted) {
            return `${actor} accepted your request to join ${req.group.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.Rejected) {
            const res = ent.group_join_request.response;
            return `${actor} rejected your request to join ${req.group.name}${
                res ? `. Reason: ${res}` : ''
            }`;
        }

        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${actor} has requested to join ${req.group.name}`;
        }
    }

    if (ent.transfer_request) {
        const req = ent.transfer_request;
        if (activity.verb === Activity_Verb_Enum.Accepted) {
            return `${actor} accepted the transfer of ${req.thing!.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.Rejected) {
            return `${actor} rejected the transfer of ${req.thing!.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.Added) {
            const accepted = req.status === Transfer_Request_Status_Enum.Accepted;
            const rejected = req.status === Transfer_Request_Status_Enum.Rejected;
            const cancelled = req.status === Transfer_Request_Status_Enum.Cancelled;

            return compact([
                `${actor} requested to transfer ownership of ${req.thing!.name} to you`,
                req.message && `Message from ${actor}: "${req.message}"`,
                accepted && 'You accepted',
                rejected && 'You rejected',
                cancelled && `${actor} cancelled the request`,
            ]).join('. ');
        }
    }

    Sentry.captureMessage('Unsupported activity type', { extra: { activity } });

    console.log(activity);
    return null;
};

export const activityMessage = (
    activity: ActivityCardFragment,
    currentUser: UserCardFragment | null,
) => {
    return activityMessageSafe(activity, currentUser) || `Unknown activity`;
};
