import { noop } from 'lodash-es';
import { Drawer, message } from 'antd';
import { useCallback } from 'react';
import {
    GqlOps,
    GroupCardFragment,
    Group_Role_Enum,
    useCreateGroupMutation,
} from '../../generated/graphql';
import { DialogProps } from './DialogProvider';
import { asGroupCreateInput, GroupEditor, useGroupEditor } from '../editors';

export const CreateGroupDrawer = (props: DialogProps<GroupCardFragment | null>) => {
    const { resolve, dispose, visible } = props;
    const editorState = useGroupEditor();

    const [createGroup, createMutation] = useCreateGroupMutation({
        refetchQueries: [GqlOps.Query.ListGroups, GqlOps.Query.UserPrivateDetails],
        awaitRefetchQueries: true,
    });

    const handleCreateGroup = useCallback(() => {
        const input = asGroupCreateInput(editorState);
        createGroup({
            variables: {
                input: {
                    ...input,
                    memberships: {
                        data: [{ role: Group_Role_Enum.Owner }],
                    },
                },
            },
        })
            .then(({ data }) => {
                // @ts-ignore
                const created = data?.insert_groups_one;
                if (created) {
                    message.success('Group created');
                    editorState.reset();
                    resolve(created);
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
            open={visible}>
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
