import { DetailedActivityFragment, ThingCardFragment } from '../../../generated/graphql';
import { BaseEntry } from './BaseEntry';
import { ImageThumbList } from '../ImageThumbList';
import { Space, Typography } from 'antd';
import Link from 'next/link';
import { urlFor } from '../../../utils/urls';
import { isEmpty } from 'lodash';

export interface ThingEntryProps {
    activity: DetailedActivityFragment;
    thing: ThingCardFragment;
}

export const ThingEntry = ({ activity, thing }: ThingEntryProps) => (
    <BaseEntry
        actor={thing.owner}
        title={
            <span>
                shared{' '}
                <Link href={urlFor.thing(thing)} passHref>
                    <Typography.Link>{thing.name}</Typography.Link>
                </Link>
            </span>
        }
        date={activity.created_at}>
        {(thing.description || !isEmpty(thing.images)) && (
            <Space direction="vertical">
                <ImageThumbList thing={thing} />
                {thing.description}
            </Space>
        )}
    </BaseEntry>
);
