import { Drawer, message } from 'antd';
import { useCallback } from 'react';
import {
    GqlOps,
    GroupCardFragment,
    GroupPostFragment,
    Group_Post_Type_Enum,
    useCreateGroupPostMutation,
} from '../../generated/graphql';
import { DialogProps } from './DialogProvider';
import { asPostCreateInput, PostEditor, PostEditorState, usePostEditor } from '../editors';

export interface CreatePostDrawerProps extends DialogProps<GroupPostFragment | null> {
    group: GroupCardFragment;
    type?: Group_Post_Type_Enum;
}

export const CreatePostDrawer = (props: CreatePostDrawerProps) => {
    const { group, type, resolve, dispose, visible } = props;

    const editorState = usePostEditor({ group, type });

    const [createPost, mutation] = useCreateGroupPostMutation({
        refetchQueries: [GqlOps.Query.GroupPostList, GqlOps.Query.GroupActivity],
    });

    const handlePost = useCallback(
        (state: PostEditorState) => {
            createPost({ variables: { input: asPostCreateInput(state) } }).then(({ data }) => {
                const created = data?.insert_group_posts_one;
                if (created) {
                    message.success('Post created');
                    state.reset();
                    resolve(created);
                }
            });
        },
        [createPost, resolve],
    );

    const title = editorState.present.group
        ? `Create post in ${editorState.present.group.name}`
        : 'Create post';

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title={title}
            placement="right"
            onClose={dispose}
            visible={visible}>
            <PostEditor
                showGroup={!props.group}
                state={editorState}
                loading={mutation.loading}
                onSubmit={handlePost}
            />
        </Drawer>
    );
};
