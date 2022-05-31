import { DetailedActivityFragment, ThingCardFragment } from '../../../generated/graphql';
import { BaseEntry } from './BaseEntry';
import { useMemo } from 'react';
import { ImageThumbList } from '../ImageThumbList';
import { Space } from 'antd';

export interface ThingEntryProps {
    activity: DetailedActivityFragment;
    thing: ThingCardFragment;
}

export const ThingEntry = ({ activity, thing }: ThingEntryProps) => {
    const title = useMemo(() => `shared ${thing.name}`, [thing.name]);
    return (
        <BaseEntry actor={thing.owner} title={title} date={activity.created_at}>
            <Space direction="vertical">
                <ImageThumbList thing={thing} />
                {thing.description}
            </Space>
        </BaseEntry>
    );
};
