import React, { useCallback, useState } from 'react';
import { Button, List, message, Spin, Typography } from 'antd';
import { DateDisplay, UserAvatar } from '../../components/display';
import Link from 'next/link';
import {
    GqlOps,
    Group_Join_Request_Status_Enum,
    GroupDetailsFragment,
    GroupJoinRequestCardFragment,
    useGroupJoinRequestsQuery,
    useHandleJoinRequestMutation,
} from '../../generated/graphql';
import { urlFor } from '../../utils/urls';

export interface JoinRequestListProps {
    group: GroupDetailsFragment;
}

export const JoinRequestList = (props: JoinRequestListProps) => {
    const [response, setResponse] = useState('');

    const { data, loading, error } = useGroupJoinRequestsQuery({
        variables: {
            where: {
                status: { _eq: Group_Join_Request_Status_Enum.Pending },
                group_id: { _eq: props.group.id },
            },
        },
    });

    const [handle, handleMutation] = useHandleJoinRequestMutation({
        refetchQueries: [GqlOps.Query.GroupJoinRequests],
        awaitRefetchQueries: true,
    });

    const requests = data?.group_join_requests || [];

    const handleAccept = useCallback(
        (req: GroupJoinRequestCardFragment) => {
            handle({
                variables: { input: { join_request_id: req.id, accepted: true, response } },
            }).then(() => message.success('Request accepted'));
        },
        [handle, response],
    );

    const handleReject = useCallback(
        (req: GroupJoinRequestCardFragment) => {
            handle({
                variables: { input: { join_request_id: req.id, accepted: false, response } },
            }).then(() => message.success('Request rejected'));
        },
        [handle, response],
    );

    return (
        <List
            data-cy="join-request-list"
            header={<Typography.Title level={5}>Pending membership requests</Typography.Title>}
            loading={loading}
            itemLayout="horizontal"
            dataSource={requests}
            locale={{ emptyText: 'No pending requests' }}
            renderItem={(req) => (
                <List.Item
                    data-cy="item"
                    extra={handleMutation.loading && <Spin />}
                    actions={[
                        <Button
                            data-cy="accept:btn"
                            key="accept"
                            disabled={handleMutation.loading}
                            size="small"
                            type="primary"
                            onClick={() => handleAccept(req)}>
                            Accept
                        </Button>,
                        <Button
                            data-cy="reject:btn"
                            key="reject"
                            disabled={handleMutation.loading}
                            size="small"
                            danger
                            onClick={() => handleReject(req)}>
                            Reject
                        </Button>,
                    ]}>
                    <List.Item.Meta
                        avatar={<UserAvatar user={req.user} />}
                        title={
                            <Link href={urlFor.user.profile(req.user)}>{req.user.displayName}</Link>
                        }
                        description={
                            <Typography.Text>
                                Request sent on <DateDisplay utc={req.created_at} showDistance />:{' '}
                                {req.message || <i>no message from user</i>}
                            </Typography.Text>
                        }
                    />
                </List.Item>
            )}
        />
    );
};
