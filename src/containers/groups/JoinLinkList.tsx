import React, { useCallback } from 'react';
import { Button, List, message, Modal, Popconfirm, Space, Switch, Typography } from 'antd';
import {
    GqlOps,
    GroupDetailsFragment,
    GroupJoinTokenCardFragment,
    useCreateJoinTokenMutation,
    useGroupJoinTokensQuery,
    useDeleteJoinTokenMutation,
    useUpdateJoinTokenMutation,
} from '../../generated/graphql';
import { format } from 'date-fns';
import { urlFor } from '../../utils/urls';

export interface JoinRequestListProps {
    group: GroupDetailsFragment;
}

export const JoinLinkList = (props: JoinRequestListProps) => {
    const { data, loading, error } = useGroupJoinTokensQuery({
        variables: {
            where: {
                group_id: { _eq: props.group.id },
            },
        },
    });

    const [create, createMutation] = useCreateJoinTokenMutation({
        refetchQueries: [GqlOps.Query.GroupJoinTokens],
        awaitRefetchQueries: true,
    });
    const [remove, removeMutation] = useDeleteJoinTokenMutation({
        refetchQueries: [GqlOps.Query.GroupJoinTokens],
        awaitRefetchQueries: true,
    });
    const [update, updateMutation] = useUpdateJoinTokenMutation();

    const requests = data?.group_join_tokens || [];

    const handleCreate = useCallback(() => {
        create({
            variables: {
                input: {
                    group_id: props.group.id,
                    note: `Created on ${format(new Date(), 'MM/dd/yyyy')}`,
                },
            },
        })
            .then(() => message.success('Join Link created'))
            .catch((err) => Modal.error({ title: 'Error', content: err.message }));
    }, [create, props.group.id]);

    const handleToggle = useCallback(
        (token: GroupJoinTokenCardFragment) => {
            update({
                variables: { id: token.id, input: { disabled: !token.disabled } },
            })
                .then(() => message.info(`Join Link ${token.disabled ? 'enabled' : 'disabled'}`))
                .catch((err) => Modal.error({ title: 'Error', content: err.message }));
        },
        [update],
    );

    const handleUpdateNote = useCallback(
        (token: GroupJoinTokenCardFragment, note: string) => {
            update({
                variables: { id: token.id, input: { note: note } },
            })
                .then(() => message.info('Join Link note updated'))
                .catch((err) => Modal.error({ title: 'Error', content: err.message }));
        },
        [update],
    );

    const handleDelete = useCallback(
        (token: GroupJoinTokenCardFragment) => {
            remove({ variables: { id: token.id } })
                .then(() => message.info('Join Link deleted'))
                .catch((err) => Modal.error({ title: 'Error', content: err.message }));
        },
        [remove],
    );

    return (
        <div>
            <Typography.Title level={4}>Join Links</Typography.Title>

            <Typography.Paragraph>
                Create and share a Join Link with a trusted group of people to easily allow them to
                join your private group. Anyone with the link can join this group, so share with
                care.
            </Typography.Paragraph>
            <Typography.Paragraph>
                Join Links can be disabled or deleted at any time.
            </Typography.Paragraph>

            <Button loading={createMutation.loading} type="primary" onClick={handleCreate}>
                Create Join Link
            </Button>

            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={requests}
                locale={{ emptyText: 'No Join Links' }}
                renderItem={(token) => (
                    <List.Item
                        actions={[
                            <Space key="toggle">
                                <Switch
                                    disabled={updateMutation.loading}
                                    loading={updateMutation.loading}
                                    checked={!token.disabled}
                                    onChange={() => handleToggle(token)}
                                />
                            </Space>,

                            <Popconfirm
                                key="reject"
                                disabled={removeMutation.loading}
                                title="Deleting the Join Link will permanently disable it, and cannot be undone. Use Disable to temporarily make the Join Link inactive."
                                onConfirm={() => handleDelete(token)}>
                                <Button disabled={removeMutation.loading} size="small" danger>
                                    Delete
                                </Button>
                            </Popconfirm>,
                        ]}>
                        <List.Item.Meta
                            title={
                                <Typography.Link copyable>
                                    {urlFor.group.joinLink(props.group, token.token)}
                                </Typography.Link>
                            }
                        />
                        <Typography.Text
                            editable={{
                                maxLength: 250,
                                onChange: (note) => handleUpdateNote(token, note),
                            }}>
                            {token.note || ''}
                        </Typography.Text>
                    </List.Item>
                )}
            />
        </div>
    );
};
