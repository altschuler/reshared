import { Activity_Verb_Enum, ActivityCardFragment } from '../generated/graphql';

const makeUrl = (absolute: boolean, path: string) =>
    `${absolute ? process.env.NEXT_PUBLIC_ROOT_URL : ''}${path}`;

interface GroupWithId {
    short_id: string;
}

interface ThingWithId {
    short_id: string;
}

interface ChatGroupWithId {
    id: string;
}

export const urlFor = {
    home: (absolute = false) => makeUrl(absolute, '/'),
    search: (absolute = false) => makeUrl(absolute, '/search'),
    auth: {
        login: (absolute = false) => makeUrl(absolute, '/login'),
        register: (absolute = false) => makeUrl(absolute, '/register'),
    },
    chat: {
        new: (absolute = false) => makeUrl(absolute, '/chat/new'),
        group: (chatGroup: ChatGroupWithId, absolute = false) =>
            makeUrl(absolute, `/chat/${chatGroup.id}`),
    },
    thing: (thing: ThingWithId, absolute = false) => makeUrl(absolute, `/thing/${thing.short_id}`),
    user: {
        settings: (absolute = false) => makeUrl(absolute, `/settings`),
        things: (absolute = false) => makeUrl(absolute, `/my-things`),
    },
    group: {
        list: (absolute = false) => makeUrl(absolute, `/groups`),
        home: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}`),
        members: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/members`),
        settings: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/settings`),
        joinLink: (group: GroupWithId, token: string, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/join/${token}`),
    },

    // Will redirect to another url
    activity: (activity: ActivityCardFragment) => {
        const ent = activity.entity;
        const sndEnt = activity.secondary_entity;
        const verb = activity.verb;

        // Navigate to the related entity
        if (ent.thing && sndEnt?.group) {
            // TODO: link to thing page
            return urlFor.group.home(sndEnt?.group);
        } else if (ent.group) {
            return urlFor.group.home(ent.group);
        } else if (ent.group_join_request && sndEnt?.group) {
            // For admins
            if (verb === Activity_Verb_Enum.Added) {
                return urlFor.group.members(sndEnt.group);
            }
            // For requester
            else {
                return urlFor.group.home(sndEnt.group);
            }
        } else if (ent.user) {
            // user
        }

        // TODO: handle all cases
        return '';
    },
};
