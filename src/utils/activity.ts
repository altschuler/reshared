import { Activity_Verb_Enum, ActivityCardFragment } from '../generated/graphql';

export const activityMessage = (activity: ActivityCardFragment) => {
    const ent = activity.entity;
    const sndEnt = activity.secondary_entity;
    const actor = activity.actor?.name || '[Deleted user]';

    if (ent.thing) {
        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${actor} added ${ent.thing.name} to ${sndEnt?.group?.name}`;
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

    if (ent.group_join_request) {
        if (activity.verb === Activity_Verb_Enum.Accepted) {
            return `${actor} accepted your request to join ${sndEnt?.group?.name}`;
        }

        if (activity.verb === Activity_Verb_Enum.Rejected) {
            const res = ent.group_join_request.response;
            return `${actor} rejected your request to join ${sndEnt?.group?.name}${
                res ? `. Reason: ${res}` : ''
            }`;
        }

        if (activity.verb === Activity_Verb_Enum.Added) {
            return `${actor} has requested to join ${sndEnt?.group?.name}`;
        }

        // Fallback
        return `${actor} ${activity.verb} group join request`;
    }

    if (ent.user) {
        return `${actor} ${activity.verb} user`;
    }

    // TODO: log sentry
    return `Unknown activity, this is a bug in the application!`;
};
