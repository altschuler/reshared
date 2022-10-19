import { Alert, Drawer, message, Modal } from 'antd';
import { useCallback } from 'react';
import {
    GqlOps,
    GroupCardFragment,
    GroupPostFragment,
    Group_Post_Type_Enum,
    useCreateGroupPostMutation,
    useDeleteGroupPostMutation,
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
    const [remove, removeMutation] = useDeleteGroupPostMutation({
        refetchQueries: [GqlOps.Query.GroupPostList, GqlOps.Query.GroupActivity],
    });

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

    const handleDelete = useCallback(() => {
        if (!post) {
            return;
        }

        remove({ variables: { id: post.id } })
            .then(() => {
                message.success('Post has been deleted');
                dispose();
            })
            .catch((err) => Modal.error({ title: 'Failed to delete post', content: err.message }));
    }, [post]);

    const isRequest = post.type === Group_Post_Type_Enum.Request;

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title={`Edit ${isRequest ? 'request' : 'post'} in ${post.group.name}`}
            placement="right"
            onClose={dispose}
            open={visible}>
            <PostEditor
                state={editorState}
                loading={mutation.loading}
                onSubmit={handlePost}
                onDelete={handleDelete}
                submitLabel="Update"
            />

            {mutation.error && <Alert type="error" message={mutation.error.message} />}
        </Drawer>
    );
};
