import { GroupCardFragment } from '../../generated/graphql';
import { Avatar, Card } from 'antd';
import { SettingOutlined, EllipsisOutlined, EditOutlined } from '@ant-design/icons';

export interface GroupCardProps {
    group: GroupCardFragment;
}

export const GroupCard = ({ group }: GroupCardProps) => {
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
                // avatar={
                //     <Avatar alt={group.name} src={group.image || ''} />
                // }
                title={group.name}
                description={'A thing wow'}
            />
        </Card>
    );
};
