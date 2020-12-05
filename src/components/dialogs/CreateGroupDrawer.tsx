import { noop } from 'lodash';
import { Drawer, message } from 'antd';
import { useCallback } from 'react';
import { GqlOps, GroupCardFragment, useCreateGroupMutation } from '../../generated/graphql';
import { DialogProps } from './DialogProvider';
import { asGroupCreateInput, GroupEditor, useGroupEditor } from '../editors';

export const CreateGroupDrawer = (props: DialogProps<GroupCardFragment | null>) => {
    const { resolve, dispose, visible } = props;
    const editorState = useGroupEditor();

    const [createGroup, createMutation] = useCreateGroupMutation({
        refetchQueries: [GqlOps.Query.ListGroups, GqlOps.Query.UserPrivateDetails],
    });

    const handleCreateGroup = useCallback(() => {
        const input = asGroupCreateInput(editorState);
        createGroup({ variables: { input } })
            .then(({ data }) => {
                if (data?.createGroup.group) {
                    message.success('Group created');
                    editorState.reset();
                    resolve(data?.createGroup.group);
                }
            })
            .catch(noop);
    }, [createGroup, editorState, resolve]);

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title="Create Group"
            placement="right"
            onClose={dispose}
            visible={visible}>
            <GroupEditor
                error={createMutation.error?.message}
                state={editorState}
                loading={createMutation.loading}
                submitLabel="Create Group"
                onSubmit={handleCreateGroup}
            />
        </Drawer>
    );
};
