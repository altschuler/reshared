import { Drawer, message } from 'antd';
import { useCallback } from 'react';
import {
    GqlOps,
    GroupCardFragment,
    GroupPostFragment,
    useCreateGroupPostMutation,
    useUpdateGroupMutation,
    useUpdateGroupPostMutation,
} from '../../generated/graphql';
import { DialogProps } from './DialogProvider';
import {
    asPostCreateInput,
    asPostUpdateInput,
    makeEditorPost,
    PostEditor,
    PostEditorState,
    usePostEditor,
} from '../editors';

export interface EditPostDrawerProps extends DialogProps<GroupPostFragment | null> {
    post: GroupPostFragment;
}

export const EditPostDrawer = (props: EditPostDrawerProps) => {
    const { post, resolve, dispose, visible } = props;

    const editorState = usePostEditor(makeEditorPost(post));

    const [updatePost, mutation] = useUpdateGroupPostMutation({});

    const handlePost = useCallback(
        (state: PostEditorState) => {
            updatePost({ variables: { id: post.id, input: asPostUpdateInput(state) } }).then(
                ({ data }) => {
                    const updated = data?.update_group_posts_by_pk;
                    if (updated) {
                        message.success('Post edited');
                        state.reset();
                        resolve(updated);
                    }
                },
            );
        },
        [post.id, resolve, updatePost],
    );

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title={`Edit post in ${post.group.name}`}
            placement="right"
            onClose={dispose}
            visible={visible}>
            <PostEditor state={editorState} loading={mutation.loading} onSubmit={handlePost} />
        </Drawer>
    );
};
