import { GroupCardFragment, Order_By, useListGroupsQuery } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { Avatar, Button, List, PageHeader, Space, Typography } from 'antd';
import Link from 'next/link';
import { EyeInvisibleOutlined, EyeOutlined, GiftOutlined, TeamOutlined } from '@ant-design/icons';
import { ReactNode, useCallback, useEffect } from 'react';
import { useDialogs, CreateGroupDrawer } from '../../components/dialogs';
import { JoinButton } from './JoinButton';
import { useRouter } from 'next/router';
import { usePagination } from '../../utils/list';
import { urlFor } from '../../utils/urls';
import { PageLayout } from '../root/PageLayout';

const useStyles = createUseStyles({
    thing: {
        marginRight: '2em',
    },
    header: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
});

const IconText = ({ icon, text }: { icon: ReactNode; text: string | number }) => (
    <Space>
        {icon}
        {text}
    </Space>
);

export const GroupListPage = () => {
    const dialogs = useDialogs();
    const classes = useStyles();
    const router = useRouter();
    const pgn = usePagination();

    const { data, loading, error } = useListGroupsQuery({
        variables: {
            limit: pgn.limit,
            offset: pgn.offset,
            orderBy: { created_at: Order_By.Desc },
        },
    });

    const total = data?.groups_aggregate.aggregate?.count || 0;
    useEffect(() => pgn.setTotal(total), [pgn, total]);

    const handleCreateGroup = useCallback(
        () =>
            dialogs
                .showDialog(CreateGroupDrawer)
                .then((group: GroupCardFragment) => router.push(`/groups/${group.id}`)),
        [dialogs, router],
    );

    const groups = data?.groups || [];

    return (
        <PageLayout>
            <PageHeader
                title="Groups"
                extra={
                    <Button type="primary" onClick={handleCreateGroup}>
                        Create Group
                    </Button>
                }>
                <List
                    loading={loading}
                    itemLayout="horizontal"
                    size="large"
                    pagination={pgn.config}
                    dataSource={groups}
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
            </PageHeader>
        </PageLayout>
    );
};
