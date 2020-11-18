import { GqlOps, GroupCardFragment, useCreateGroupMutation } from '../../generated/graphql';
import { DialogProps } from './DialogProvider';
import { Drawer, message } from 'antd';
import { asCreateInput, GroupEditor, useGroupEditor } from '../editors';
import { useCallback } from 'react';

export const CreateGroupDrawer = (props: DialogProps<GroupCardFragment | null>) => {
    const { resolve, dispose, visible } = props;
    const editorState = useGroupEditor();

    const [createGroup, createMutation] = useCreateGroupMutation({
        refetchQueries: [GqlOps.Query.ListGroups],
    });

    const handleCreateGroup = useCallback(() => {
        const input = asCreateInput(editorState);
        createGroup({ variables: { input } }).then(({ data }) => {
            if (data?.createGroup.group) {
                message.success('Group created');
                editorState.reset();
                resolve(data?.createGroup.group);
            }
        });
    }, [createGroup, editorState, resolve]);

    return (
        <Drawer title="Create Group" placement="right" onClose={dispose} visible={visible}>
            <GroupEditor
                error={createMutation.error?.message}
                state={editorState}
                loading={createMutation.loading}
                onSubmit={handleCreateGroup}
            />
        </Drawer>
    );
};
