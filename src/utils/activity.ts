import {
    Activity_Verb_Enum,
    ActivityCardFragment,
    UserCardFragment,
    Transfer_Request_Status_Enum,
} from '../generated/graphql';
import * as Sentry from '@sentry/react';
import { ReactNode } from 'react';
import { compact } from 'lodash';

export const activityMessage = (
    activity: ActivityCardFragment,
    currentUser: UserCardFragment | null,
): ReactNode => {
    const ent = activity.entity;
    const actor = activity.actor?.displayName || '[Deleted user]';

    if (ent.group_thing) {
        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${actor} added ${ent.group_thing.thing.name} to ${ent.group_thing.group.name}`;
        }

        return `${actor} ${activity.verb} thing`;
    }

    if (ent.group) {
        if (activity.verb === Activity_Verb_Enum.Updated) {
            return `${actor} updated the group ${ent.group.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.Joined) {
            return `${actor} joined the group ${ent.group.name}`;
        }

        return `${actor} ${activity.verb} group`;
    }

    if (ent.group_member) {
        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${actor} joined the group ${ent.group_member.group.name}`;
        }
    }

    if (ent.group_post) {
        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${actor} posted in ${ent.group_post.group.name}`;
        }

        return `${actor} ${activity.verb} post`;
    }

    if (ent.group_post_comment) {
        if (activity.verb === Activity_Verb_Enum.Added) {
            const yourPost =
                currentUser && ent.group_post_comment.post.author_id === currentUser.id;
            return `${actor} commented on ${
                yourPost ? 'your post' : "a post you're participating in,"
            } in ${ent.group_post_comment.post.group.name}`;
        }

        return `${actor} ${activity.verb} comment`;
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

        // Fallback
        return `${actor} ${activity.verb} group join request`;
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

        // Fallback
        return `${actor} ${activity.verb} request to transfer thing`;
    }

    if (ent.user) {
        return `${actor} ${activity.verb} user`;
    }

    Sentry.captureMessage('Unhandled activity type', { extra: { activity } });

    return `Unknown activity`;
};
