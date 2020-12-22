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
    auth: {
        login: (absolute = false) => makeUrl(absolute, '/login'),
        register: (absolute = false) => makeUrl(absolute, '/register'),
    },
    home: (absolute = false) => makeUrl(absolute, '/'),
    chat: {
        new: (absolute = false) => makeUrl(absolute, '/chat/new'),
        group: (chatGroup: ChatGroupWithId, absolute = false) =>
            makeUrl(absolute, `/chat/${chatGroup.id}`),
    },
    thing: (thing: ThingWithId, absolute = false) => makeUrl(absolute, `/thing/${thing.short_id}`),
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
