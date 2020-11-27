import React, { useCallback } from 'react';
import { Button, message, Modal, Popconfirm, Typography } from 'antd';
import { GroupCardFragment, useDeleteGroupMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { urlFor } from '../../utils/urls';

export interface DeleteButtonProps {
    group: GroupCardFragment;
}

export const DeleteButton = (props: DeleteButtonProps) => {
    const router = useRouter();
    const [deleteGroup, mutation] = useDeleteGroupMutation();
    const handleDelete = useCallback(() => {
        deleteGroup({ variables: { id: props.group.id } })
            .then(() => {
                message.info('The group has been deleted');
                return router.push(urlFor.home());
            })
            .catch((err) => Modal.error({ title: 'Deletion failed', content: err.message }));
    }, [deleteGroup, props.group.id, router]);

    return (
        <Popconfirm
            okText="I understand, delete this group permanently"
            okType="danger"
            onConfirm={handleDelete}
            title={
                <div style={{ maxWidth: 300 }}>
                    <Typography.Paragraph>
                        Are you absolutely sure that you want to delete this group{' '}
                        <strong>permanently</strong>? It <strong>cannot be undone</strong> and all
                        content within the group will be immediately deleted forever.
                    </Typography.Paragraph>
                </div>
            }>
            <Button danger type="primary" loading={mutation.loading}>
                Delete group
            </Button>
        </Popconfirm>
    );
};
