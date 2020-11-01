import { ThingCardFragment } from '../../generated/graphql';
import { Avatar, Card } from 'antd';
import { SettingOutlined, EllipsisOutlined, EditOutlined } from '@ant-design/icons';

export interface ThingCardProps {
    thing: ThingCardFragment;
    className?: string;
}

export const ThingCard = ({ thing, className }: ThingCardProps) => {
    return (
        <Card
            className={className}
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
                avatar={
                    <Avatar
                        alt={thing.owner.display_name || 'anonymous'}
                        src={thing.owner.avatar_url || ''}
                    />
                }
                title={thing.name}
                description={'A thing wow'}
            />
        </Card>
    );
};
