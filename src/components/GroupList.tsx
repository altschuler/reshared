import { Avatar, List, Space } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, GiftOutlined, TeamOutlined } from '@ant-design/icons';
import { JoinButton } from '../containers/groups/JoinButton';
import Link from 'next/link';
import { urlFor } from '../utils/urls';
import { usePagination } from '../utils/list';
import {
    Groups_Bool_Exp,
    Groups_Order_By,
    Order_By,
    useListGroupsQuery,
} from '../generated/graphql';
import { ReactNode, useEffect } from 'react';

export interface GroupListProps {
    where: Groups_Bool_Exp;
    orderBy?: Groups_Order_By[];
    emptyText?: ReactNode | (() => ReactNode);
}

const IconText = ({ icon, text }: { icon: ReactNode; text: string | number }) => (
    <Space>
        {icon}
        {text}
    </Space>
);

export const GroupList = (props: GroupListProps) => {
    const pgn = usePagination();

    const { data, previousData, loading, error } = useListGroupsQuery({
        variables: {
            limit: pgn.limit,
            offset: pgn.offset,
            orderBy: { created_at: Order_By.Desc },
            where: props.where,
        },
    });

    const results = data || previousData;
    const groups = results?.groups || [];
    const total = results?.groups_aggregate.aggregate?.count || 0;
    useEffect(() => pgn.setTotal(total), [pgn, total]);

    return (
        <List
            loading={loading}
            itemLayout="horizontal"
            size="large"
            pagination={pgn.config}
            dataSource={groups}
            locale={props.emptyText ? { emptyText: props.emptyText } : undefined}
            renderItem={(group) => (
                <List.Item
                    key={group.name}
                    actions={[
                        <IconText
                            icon={<TeamOutlined />}
                            text={group.memberships_aggregate.aggregate?.count || 0}
                            key="members"
                        />,
                        <IconText
                            icon={<GiftOutlined />}
                            text={group.thing_relations_aggregate.aggregate?.count || 0}
                            key="things"
                        />,
                        <IconText
                            icon={group.public ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            text={group.public ? 'Public' : 'Private'}
                            key="public"
                        />,

                        <JoinButton group={group} key="join" />,
                    ]}>
                    <List.Item.Meta
                        avatar={<Avatar src={''} />}
                        title={<Link href={urlFor.group.home(group)}>{group.name}</Link>}
                        description={group.description}
                    />
                </List.Item>
            )}
        />
    );
};
