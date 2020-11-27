﻿import {
    GroupCardFragment,
    useGroupDetailsQuery,
    useJoinGroupWithTokenMutation,
} from '../../generated/graphql';
import { useRouter } from 'next/router';
import { Alert, Button, message, Space, Spin, Typography } from 'antd';
import { GroupLayout } from './GroupLayout';
import { useAuth } from '../../utils/auth';
import { useMembership } from '../../utils/group';
import { createUseStyles } from 'react-jss';
import Link from 'next/link';
import { useCallback } from 'react';
import { AuthForm } from '../../components/AuthForm';
import { urlFor } from '../../utils/urls';
import { ErrorDisplay } from '../../components/display/ErrorDisplay';

const useStyles = createUseStyles({});

export interface GroupJoinPageProps {
    tokenValid: boolean;
}

export const GroupJoinPage = (props: GroupJoinPageProps) => {
    const router = useRouter();
    const auth = useAuth();
    const classes = useStyles();
    const { id, token } = router.query;

    const { data, loading, error } = useGroupDetailsQuery({ variables: { id: id as string } });

    const group = data?.groups_by_pk;
    const { isMember } = useMembership(group);

    if (loading) {
        return <Spin />;
    }

    if (error || !group) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    const renderContent = () => {
        if (!props.tokenValid) {
            return <InvalidTokenContent />;
        }

        if (isMember) {
            return <AlreadyMemberContent group={group} />;
        }

        if (auth.user) {
            return <LoggedInContent group={group} token={token as string} />;
        }

        return <NotLoggedInContent group={group} />;
    };

    return <GroupLayout group={group}>{renderContent()}</GroupLayout>;
};

const InvalidTokenContent = () => {
    return (
        <Typography.Title level={5}>
            This link is not valid, either it does not exists or it has been disabled by a group
            administrator.
        </Typography.Title>
    );
};

const NotLoggedInContent = ({ group }: { group: GroupCardFragment }) => {
    return (
        <Space
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
            <Typography.Title style={{ marginBottom: '2em' }} level={5}>
                You need to be logged in to join the group <i>{group.name}</i>.
            </Typography.Title>

            <AuthForm />
        </Space>
    );
};
const LoggedInContent = ({ group, token }: { group: GroupCardFragment; token: string }) => {
    const router = useRouter();

    const [join, mutation] = useJoinGroupWithTokenMutation({
        variables: { input: { group_id: group.id, join_token: token } },
    });

    const handleJoin = useCallback(() => {
        join().then(() => {
            message.success('You have joined the group');
            return router.push(urlFor.group.home(group));
        });
    }, [group, join, router]);

    return (
        <Space
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
            <Typography.Title style={{ marginBottom: '2em' }} level={5}>
                Do you want to join the group <i>{group.name}</i>?
            </Typography.Title>
            <Button loading={mutation.loading} type="primary" onClick={handleJoin}>
                Join
            </Button>

            {mutation.error && <ErrorDisplay error={mutation.error.message} />}
        </Space>
    );
};

const AlreadyMemberContent = ({ group }: { group: GroupCardFragment }) => (
    <Space
        style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
        <Typography.Title level={5}>
            You're already a member of <i>{group.name}</i>
        </Typography.Title>

        <Link href={`/groups/${group.id}`}>
            <Button type="link">Go to group home</Button>
        </Link>
    </Space>
);