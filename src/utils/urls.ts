const makeUrl = (absolute: boolean, path: string) =>
    `${absolute ? process.env.NEXT_PUBLIC_ROOT_URL : ''}${path}`;

interface GroupWithId {
    id: string;
}
export const urlFor = {
    home: (absolute = false) => makeUrl(absolute, ''),
    group: {
        home: (group: GroupWithId, absolute = false) => makeUrl(absolute, `/groups/${group.id}`),
        members: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.id}/members`),
        settings: (group: GroupWithId, absolute = false) =>
            makeUrl(absolute, `/groups/${group.id}/settings`),
        joinLink: (group: GroupWithId, token: string, absolute = false) =>
            makeUrl(absolute, `/groups/${group.id}/join/${token}`),
    },
};
