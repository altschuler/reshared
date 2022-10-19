import { Alert, Divider, message, Modal, Spin, Typography } from 'antd';
import { head } from 'lodash-es';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import {
    asGroupUpdateInput,
    GroupEditor,
    makeEditorGroup,
    useGroupEditor,
} from '../../components/editors';
import { useGroupDetailsQuery, useUpdateGroupMutation } from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { DeleteButton } from './DeleteButton';
import { GroupLayout } from './GroupLayout';
import { JoinLinkList } from './JoinLinkList';

export const GroupSettingsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const editorState = useGroupEditor();

    const [updateGroup, updateMutation] = useUpdateGroupMutation();
    const { data, loading, error } = useGroupDetailsQuery({
        variables: { shortId: id as string },
        onCompleted: (data) => {
            const group = head(data.groups);
            if (group) {
                editorState.set(makeEditorGroup(group));
            }
        },
    });
    const group = head(data?.groups);

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
