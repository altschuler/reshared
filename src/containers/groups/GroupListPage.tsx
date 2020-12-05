import { GroupCardFragment, Order_By, useListGroupsQuery } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { Avatar, Button, List, Space, Typography } from 'antd';
import Link from 'next/link';
import { EyeInvisibleOutlined, EyeOutlined, GiftOutlined, TeamOutlined } from '@ant-design/icons';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { useDialogs } from '../../components/dialogs/DialogProvider';
import { CreateGroupDrawer } from '../../components/dialogs/CreateGroupDrawer';
import { JoinButton } from './JoinButton';
import { PaginationConfig } from 'antd/lib/pagination';
import { useRouter } from 'next/router';

const useStyles = createUseStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    thing: {
        marginRight: '2em',
    },
    header: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
}));

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
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const handlePaginationChange = useCallback((page: number, pageSize: number) => {
        setPage(page);
        setPageSize(pageSize);
    }, []);

    const { data, loading, error } = useListGroupsQuery({
        variables: { limit: 10, offset: 0, orderBy: { created_at: Order_By.Desc } },
    });

    const pagination = useMemo(
        () =>
            ({
                hideOnSinglePage: true,
                onChange: handlePaginationChange,
                current: page,
                pageSize,
                total: data?.groups_aggregate.aggregate?.count || 0,
            } as PaginationConfig),
        [data?.groups_aggregate.aggregate?.count, handlePaginationChange, page, pageSize],
    );

    const handleCreateGroup = useCallback(
        () =>
            dialogs
                .showDialog(CreateGroupDrawer)
                .then((group: GroupCardFragment) => router.push(`/groups/${group.id}`)),
        [dialogs, router],
    );

    const groups = data?.groups || [];

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography.Title>Groups</Typography.Title>
                <Button type="primary" onClick={handleCreateGroup}>
                    Create Group
                </Button>
            </div>

            <List
                loading={loading}
                itemLayout="horizontal"
                size="large"
                pagination={pagination}
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
                            title={<Link href={`/groups/${group.id}`}>{group.name}</Link>}
                            description={group.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};
