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
    root: (absolute = false) => makeUrl(absolute, '/'),
    home: (absolute = false) => makeUrl(absolute, '/home'),
    search: (absolute = false) => makeUrl(absolute, `/search`),
    messages: {
        emailChanged: (absolute = false) => makeUrl(absolute, `/email-changed`),
    },
    auth: {
        login: (absolute = false) => makeUrl(absolute, '/login'),
        logout: (absolute = false) => makeUrl(absolute, '/logout'),
        register: (absolute = false) => makeUrl(absolute, '/register'),
    },
    chat: {
        root: (absolute = false) => makeUrl(absolute, '/chat'),
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
        things: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/things`),
        members: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/members`),
        settings: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/settings`),
        joinLink: (group: GroupWithId, token: string, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/join/${token}`),
    },
    site: {
        privacy: (absolute = false) => makeUrl(absolute, `/site/privacy`),
        terms: (absolute = false) => makeUrl(absolute, `/site/terms`),
        contact: (absolute = false) => makeUrl(absolute, `/site/contact`),
        attributions: (absolute = false) => makeUrl(absolute, `/site/attributions`),
    },

    // Will redirect to another url
    activity: (activity: ActivityCardFragment) => {
        const ent = activity.entity;
        const verb = activity.verb;

        // Navigate to the related entity
        if (ent.group_thing) {
            // TODO: link to thing page
            return urlFor.thing(ent.group_thing.thing);
        } else if (ent.group_post) {
            return urlFor.group.home(ent.group_post.group);
        } else if (ent.group_member) {
            return urlFor.group.home(ent.group_member.group);
        } else if (ent.group_post_comment) {
            // TODO: link to post somehow
            return urlFor.group.home(ent.group_post_comment.post.group);
        } else if (ent.group) {
            return urlFor.group.home(ent.group);
        } else if (ent.group_join_request) {
            // For admins
            if (verb === Activity_Verb_Enum.Added) {
                return urlFor.group.members(ent.group_join_request.group);
            }
            // For requester
            else {
                return urlFor.group.home(ent.group_join_request.group);
            }
        } else if (ent.user) {
            // user
        }

        // TODO: handle all cases
        return '';
    },
};
