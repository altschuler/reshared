import { DetailedActivityFragment, ThingCardFragment } from '../../../generated/graphql';
import { BaseEntry } from './BaseEntry';

export interface ThingEntryProps {
    activity: DetailedActivityFragment;
    thing: ThingCardFragment;
}

export const ThingEntry = ({ activity, thing }: ThingEntryProps) => (
    <BaseEntry activity={activity} actor={thing.owner} title={`shared ${thing.name}`} />
);
