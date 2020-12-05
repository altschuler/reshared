import { ThingCardFragment } from '../../generated/graphql';
import { Card } from 'antd';
import { SettingOutlined, EllipsisOutlined, EditOutlined } from '@ant-design/icons';
import { UserAvatar } from './UserAvatar';

export interface ThingCardProps {
    thing: ThingCardFragment;
}

export const ThingCard = ({ thing }: ThingCardProps) => {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
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
