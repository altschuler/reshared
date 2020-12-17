import { ChatGroupCardFragment } from '../generated/graphql';

const makeUrl = (absolute: boolean, path: string) =>
    `${absolute ? process.env.NEXT_PUBLIC_ROOT_URL : ''}${path}`;

interface GroupWithId {
    short_id: string;
}
export const urlFor = {
    home: (absolute = false) => makeUrl(absolute, ''),
    chat: {
        new: (absolute = false) => makeUrl(absolute, '/chat/new'),
        group: (chatGroup: ChatGroupCardFragment, absolute = false) =>
            makeUrl(absolute, `/chat/${chatGroup.id}`),
    },
    group: {
        home: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}`),
        members: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/members`),
        settings: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/settings`),
        joinLink: (group: GroupWithId, token: string, absolute = false) =>
            makeUrl(absolute, `/groups/${group.short_id}/join/${token}`),
    },
};
