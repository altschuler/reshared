import { DetailedActivityFragment, ThingCardFragment } from '../../../generated/graphql';
import { BaseEntry } from './BaseEntry';
import { ImageThumbList } from '../ImageThumbList';
import { Space } from 'antd';

export interface ThingEntryProps {
    activity: DetailedActivityFragment;
    thing: ThingCardFragment;
}

export const ThingEntry = ({ activity, thing }: ThingEntryProps) => (
    <BaseEntry actor={thing.owner} title={`shared ${thing.name}`} date={activity.created_at}>
        <Space direction="vertical">
            <ImageThumbList thing={thing} />
            {thing.description}
        </Space>
    </BaseEntry>
);
