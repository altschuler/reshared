import { Alert, Button, message, Space, Spin, Typography } from 'antd';
import { head } from 'lodash-es';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { ErrorDisplay } from '../../components/display';
import {
    GroupCardFragment,
    useGroupDetailsQuery,
    useJoinGroupWithTokenMutation,
} from '../../generated/graphql';
import { useAuth } from '../../utils/auth';
import { useMembership } from '../../utils/group';
import { urlFor } from '../../utils/urls';
import { GroupLayout } from './GroupLayout';

const useStyles = createUseStyles({});

export interface GroupJoinPageProps {
    tokenValid: boolean;
}

export const GroupJoinPage = (props: GroupJoinPageProps) => {
    const router = useRouter();
    const auth = useAuth();
    const classes = useStyles();
    const { id, token } = router.query;

    const { data, loading, error } = useGroupDetailsQuery({ variables: { shortId: id as string } });

    const group = head(data?.groups);
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
                You need to <Link href={urlFor.auth.login()}>sign in</Link> to join the group{' '}
                <i>{group.name}</i>.
            </Typography.Title>
        </Space>
    );
};
const LoggedInContent = ({ group, token }: { group: GroupCardFragment; token: string }) => {
    const router = useRouter();

    const [join, mutation] = useJoinGroupWithTokenMutation({
        variables: { input: { group_id: group.id, join_token: token } },
        context: { headers: { 'x-hasura-role': 'me' } },
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

        <Link href={urlFor.group.home(group)} legacyBehavior>
            <Button type="link">Go to group home</Button>
        </Link>
    </Space>
);
