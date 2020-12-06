import { useGroupDetailsQuery, useUpdateGroupMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { Alert, Divider, message, Modal, Spin, Typography } from 'antd';
import { GroupLayout } from './GroupLayout';
import {
    asGroupUpdateInput,
    GroupEditor,
    makeEditorGroup,
    useGroupEditor,
} from '../../components/editors';
import { useCallback } from 'react';
import { JoinLinkList } from './JoinLinkList';
import { DeleteButton } from './DeleteButton';
import { useMembership } from '../../utils/group';

export const GroupSettingsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const editorState = useGroupEditor();

    const [updateGroup, updateMutation] = useUpdateGroupMutation();
    const { data, loading, error } = useGroupDetailsQuery({
        variables: { id: id as string },
        onCompleted: (data) => {
            if (data.groups_by_pk) {
                editorState.set(makeEditorGroup(data?.groups_by_pk));
            }
        },
    });
    const group = data?.groups_by_pk;

    const handleSave = useCallback(() => {
        if (!group) {
            return;
        }

        updateGroup({ variables: { id: group.id, input: asGroupUpdateInput(editorState) } })
            .then(() => message.success('Group updated'))
            .catch((err) => Modal.error({ title: 'Failed to update group', content: err.message }));
    }, [editorState, group, updateGroup]);

    const { isOwner } = useMembership(group);

    if (loading) {
        return <Spin />;
    }

    if (error || !group) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    return (
        <GroupLayout activePage="settings" group={group}>
            <Typography.Title level={4}>Group Details</Typography.Title>
            <GroupEditor
                state={editorState}
                onSubmit={handleSave}
                loading={updateMutation.loading}
                submitLabel="Update"
            />

            <Divider dashed type="horizontal" />

            <JoinLinkList group={group} />

            <Divider dashed type="horizontal" />

            {isOwner && (
                <>
                    <Typography.Title type="danger" level={4}>
                        Danger zone
                    </Typography.Title>
                    <DeleteButton group={group} />
                </>
            )}
        </GroupLayout>
    );
};
