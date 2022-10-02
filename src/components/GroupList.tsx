import { ReactNode, useEffect } from 'react';
import {
    CheckCircleTwoTone,
    EyeInvisibleOutlined,
    EyeOutlined,
    GiftOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Avatar, List, Space, Tooltip } from 'antd';
import Link from 'next/link';
import {
    Groups_Bool_Exp,
    Groups_Order_By,
    Order_By,
    useListGroupsQuery,
} from '../generated/graphql';
import { useAuth } from '../utils/auth';
import { isMember } from '../utils/group';
import { usePagination } from '../utils/list';
import { urlFor } from '../utils/urls';
import { ImageDisplay } from './display';

export interface GroupListProps {
    where: Groups_Bool_Exp;
    orderBy?: Groups_Order_By[];
    emptyText?: ReactNode;
    dataCy?: string;
}

const IconText = ({ icon, text }: { icon: ReactNode; text: string | number }) => (
    <Space>
        {icon}
        {text}
    </Space>
);

export const GroupList = (props: GroupListProps) => {
    const auth = useAuth();
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
            data-cy={props.dataCy}
            loading={loading}
            itemLayout="horizontal"
            size="large"
            pagination={pgn.config}
            dataSource={groups}
            locale={props.emptyText ? { emptyText: props.emptyText } : undefined}
            renderItem={(group) => (
                <List.Item
                    data-cy={props.dataCy && `${props.dataCy}:item`}
                    key={group.name}
                    actions={[
                        isMember(group, auth.user) && (
                            <Tooltip title="You're a member">
                                <CheckCircleTwoTone twoToneColor="#52c41a" />
                            </Tooltip>
                        ),
                        <IconText
                            icon={group.public ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            text={group.public ? 'Public' : 'Private'}
                            key="public"
                        />,
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
                    ]}>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                icon={
                                    group.banner_file && (
                                        <ImageDisplay
                                            width={100}
                                            height={100}
                                            file={group.banner_file}
                                        />
                                    )
                                }
                            />
                        }
                        title={
                            <Link passHref href={urlFor.group.home(group)}>
                                <a data-cy="title">{group.name}</a>
                            </Link>
                        }
                        description={group.description}
                    />
                </List.Item>
            )}
        />
    );
};
