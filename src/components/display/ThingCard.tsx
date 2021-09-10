import { ThingCardFragment } from '../../generated/graphql';
import { head } from 'lodash';
import { Card } from 'antd';
import { SettingOutlined, EllipsisOutlined, EditOutlined } from '@ant-design/icons';
import { UserAvatar } from './UserAvatar';
import Image from 'next/image';
import { useMemo } from 'react';

export interface ThingCardProps {
    thing: ThingCardFragment;
}

export const ThingCard = ({ thing }: ThingCardProps) => {
    const imageUrl = useMemo(
        () => head(thing.images)?.file.url || 'https://placekitten.com/300/180',
        [thing.images],
    );
    return (
        <Card
            style={{ width: 300 }}
            cover={<Image alt="example" src={imageUrl} />}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Card.Meta
                avatar={<UserAvatar user={thing.owner} />}
                title={thing.name}
                description={'A thing wow'}
            />
        </Card>
    );
};
