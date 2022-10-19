import { Alert, Button, Input, message, Modal, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { GroupCardFragment, useDeleteGroupMutation } from '../../generated/graphql';
import { urlFor } from '../../utils/urls';

export interface DeleteButtonProps {
    group: GroupCardFragment;
}

export const DeleteButton = (props: DeleteButtonProps) => {
    const router = useRouter();
    const [deleteGroup, mutation] = useDeleteGroupMutation();
    const [open, setOpen] = useState(false);
    const [confirmText, setConfirmText] = useState('');

    const handleCancel = () => {
        setOpen(false);
        setConfirmText('');
    };

    const handleDelete = useCallback(() => {
        deleteGroup({ variables: { id: props.group.id } })
            .then(() => {
                message.info('The group has been deleted');
                return router.push(urlFor.home());
            })
            .catch((err) => Modal.error({ title: 'Deletion failed', content: err.message }));
    }, [deleteGroup, props.group.id, router]);

    const confirmed = confirmText === props.group.name;

    return (
        <div>
            <Button danger type="primary" onClick={() => setOpen(true)} loading={mutation.loading}>
                Delete group
            </Button>

            <Modal
                title={`Delete ${props.group.name}`}
                open={open}
                onOk={handleDelete}
                okText="Delete group permanently"
                okButtonProps={{
                    disabled: !confirmed,
                    type: 'primary',
                    ...({ ['data-cy']: 'delete-group:confirm:btn' } as any),
                }}
                okType="danger"
                confirmLoading={mutation.loading}
                onCancel={handleCancel}>
                {mutation.error && <Alert type="error" message={mutation.error.message} />}

                <Typography.Paragraph>
                    Are you absolutely sure that you want to delete this group{' '}
                    <strong>permanently</strong>? It <strong>cannot be undone</strong> and all
                    content within the group will be immediately deleted forever.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    If so, please enter the name of the group to confirm.
                </Typography.Paragraph>

                <Input
                    data-cy="delete-group:name:in"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder="Group name"
                />
            </Modal>
        </div>
    );
};
