import { GroupCardFragment } from '../generated/graphql';

const makeUrl = (absolute: boolean, path: string) =>
    `${absolute ? process.env.NEXT_PUBLIC_ROOT_URL : ''}${path}`;

export const urlFor = {
    home: (absolute = false) => makeUrl(absolute, ''),
    group: {
        home: (group: GroupCardFragment, absolute = false) =>
            makeUrl(absolute, `/groups/${group.id}`),
        members: (group: GroupCardFragment, absolute = false) =>
            makeUrl(absolute, `/groups/${group.id}/members`),
        settings: (group: GroupCardFragment, absolute = false) =>
            makeUrl(absolute, `/groups/${group.id}/settings`),
        joinLink: (group: GroupCardFragment, token: string, absolute = false) =>
            makeUrl(absolute, `/groups/${group.id}/join/${token}`),
    },
};
