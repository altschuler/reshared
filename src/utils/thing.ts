import { ThingCardFragment, UserCardFragment } from '../generated/graphql';

export const ownsThing = (thing?: ThingCardFragment | null, user?: UserCardFragment | null) =>
    thing && user && thing.owner.id === user.id;
