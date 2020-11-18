import {
    GroupCardFragment,
    useCancelJoinRequestMutation,
    useJoinGroupMutation,
    useListGroupsQuery,
    useRequestJoinGroupMutation,
} from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { Avatar, Button, Input, List, message, Popconfirm, Space, Typography } from 'antd';
import Link from 'next/link';
import { TeamOutlined, GiftOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { createElement, useCallback, useState } from 'react';
import { useAuth } from '../../utils/auth';
import { useDialogs } from '../../components/dialogs/DialogProvider';
import { CreateGroupDrawer } from '../../components/dialogs/CreateGroupDrawer';

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

const IconText = ({ icon, text }: { icon: any; text: string | number }) => (
    <Space>
        {createElement(icon)}
        {text}
    </Space>
);

const useJoinButtonStyles = createUseStyles(() => ({
    requestForm: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 300,
    },
}));

const JoinButton = ({ group }: { group: GroupCardFragment }) => {
    const auth = useAuth();
    const classes = useJoinButtonStyles();
    const [join, joinMutation] = useJoinGroupMutation();
    const [requestJoin, requestJoinMutation] = useRequestJoinGroupMutation();
    const [cancelRequest, cancelRequestMutation] = useCancelJoinRequestMutation();
    const [requestMessage, setRequestMessage] = useState('');

    const isMember = auth.user?.memberships.find((m) => m.group.id === group.id);
    const joinRequest = auth.user?.group_join_requests.find((r) => r.group_id === group.id);

    const handleJoin = useCallback(() => {
        join({ variables: { groupId: group.id } })
            .then(() => message.success(`Joined ${group.name}`))
            .catch((err) => message.error(err.message));
    }, [group.id, group.name, join]);

    const handleRequest = useCallback(() => {
        requestJoin({ variables: { input: { group_id: group.id, message: requestMessage } } })
            .then(() => message.success(`Request to join ${group.name} sent`))
            .catch((err) => message.error(err.message));
    }, [group.id, group.name, requestJoin, requestMessage]);

    const handleCancelRequest = useCallback(() => {
        if (!joinRequest) {
            return;
        }
        cancelRequest({ variables: { requestId: joinRequest?.id } })
            .then(() => message.success(`Request to join ${group.name} cancelled`))
            .catch((err) => message.error(err.message));
    }, [cancelRequest, group.name, joinRequest]);

    // Anonymous
    if (!auth.user) {
        return <Button type="link">Sign up to join group</Button>;
    }

    // Member
    if (isMember) {
        return <span>You're a member</span>;
    }

    // Public, non-member
    if (group.public) {
        return (
            <Button type="primary" loading={joinMutation.loading} onClick={handleJoin}>
                Join
            </Button>
        );
    }

    // Private, non-member, pending request
    if (joinRequest) {
        return (
            <Popconfirm
                title={
                    <span>
                        Do you want to cancel the request to join <strong>{group.name}</strong>?
                    </span>
                }
                onConfirm={handleCancelRequest}
                okText="Yes"
                okType="danger"
                cancelText="No">
                <Button type="default" loading={cancelRequestMutation.loading}>
                    Request pending...
                </Button>
            </Popconfirm>
        );
    }

    // Private, non-member, no request
    return (
        <Popconfirm
            title={
                <div className={classes.requestForm}>
                    <p>
                        You can <i>optionally</i> add a short message to the group's administrator,
                        such as who you are or why you would like to join {group.name}.
                    </p>
                    <Input
                        placeholder="Message"
                        value={requestMessage}
                        onChange={(e) => setRequestMessage(e.target.value)}
                    />
                </div>
            }
            onConfirm={handleRequest}
            okText="Send request"
            cancelText="Cancel">
            <Button type="primary" loading={requestJoinMutation.loading}>
                Request to join
            </Button>
        </Popconfirm>
    );
};

export const GroupListPage = () => {
    const dialogs = useDialogs();
    const classes = useStyles();

    const { data, loading, error } = useListGroupsQuery({ variables: { limit: 10, offset: 0 } });
    const handleCreateGroup = useCallback(() => {
        dialogs.showDialog(CreateGroupDrawer).then((a) => console.log('dialog response', a));
    }, [dialogs]);

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
                pagination={{
                    hideOnSinglePage: true,
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={groups}
                renderItem={(group) => (
                    <List.Item
                        key={group.name}
                        actions={[
                            <IconText
                                icon={TeamOutlined}
                                text={group.memberships_aggregate.aggregate?.count || 0}
                                key="members"
                            />,
                            <IconText icon={GiftOutlined} text={12} key="things" />,
                            <IconText
                                icon={group.public ? EyeOutlined : EyeInvisibleOutlined}
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

export default GroupListPage;
