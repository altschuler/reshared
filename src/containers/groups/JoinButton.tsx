import {
    GroupCardFragment,
    useCancelJoinRequestMutation,
    useJoinGroupMutation,
    useRequestJoinGroupMutation,
} from '../../generated/graphql';
import { useAuth } from '../../utils/auth';
import { useCallback, useState } from 'react';
import { Button, Input, message, Popconfirm } from 'antd';
import { createUseStyles } from 'react-jss';
import Link from 'next/link';
import { urlFor } from '../../utils/urls';

const useStyles = createUseStyles({
    requestForm: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 300,
    },
    popover: {
        '& .ant-popover-message-title': {
            paddingLeft: 0,
        },
    },
});

export const JoinButton = ({ group, dataCy }: { group: GroupCardFragment; dataCy?: string }) => {
    const auth = useAuth();
    const classes = useStyles();
    const [join, joinMutation] = useJoinGroupMutation({
        context: { headers: { 'x-hasura-role': 'me' } },
    });
    const [requestJoin, requestJoinMutation] = useRequestJoinGroupMutation();
    const [cancelRequest, cancelRequestMutation] = useCancelJoinRequestMutation();
    const [requestMessage, setRequestMessage] = useState('');

    const isMember = auth.userDetails?.memberships.find((m) => m.group.id === group.id);
    const joinRequest = auth.userDetails?.group_join_requests.find((r) => r.group_id === group.id);

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
        return (
            <Link href={urlFor.auth.register()} passHref legacyBehavior>
                <Button data-cy={dataCy} type="link">
                    Sign up to join group
                </Button>
            </Link>
        );
    }

    // Member
    if (isMember) {
        return <span>You're a member</span>;
    }

    // Public, non-member
    if (group.public) {
        return (
            <Button
                data-cy={dataCy}
                type="primary"
                loading={joinMutation.loading}
                onClick={handleJoin}>
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
                <Button data-cy={dataCy} type="default" loading={cancelRequestMutation.loading}>
                    Request pending...
                </Button>
            </Popconfirm>
        );
    }

    // Private, non-member, no request
    return (
        <Popconfirm
            overlayClassName={classes.popover}
            icon={null}
            title={
                <div className={classes.requestForm}>
                    <p>
                        You can optionally add a short message to the group's administrator, such as
                        who you are or why you would like to join {group.name}.
                    </p>
                    <Input
                        data-cy="confirm:message:in"
                        placeholder="Message"
                        value={requestMessage}
                        onChange={(e) => setRequestMessage(e.target.value)}
                    />
                </div>
            }
            okButtonProps={{ ['data-cy']: 'confirm:ok:btn' } as any}
            onConfirm={handleRequest}
            okText="Send request"
            cancelText="Cancel">
            <Button data-cy={dataCy} type="primary" loading={requestJoinMutation.loading}>
                Request to join
            </Button>
        </Popconfirm>
    );
};
