import { Drawer, message } from 'antd';
import { useCallback } from 'react';
import {
    GqlOps,
    GroupCardFragment,
    GroupPostFragment,
    useCreateGroupPostMutation,
} from '../../generated/graphql';
import { DialogProps } from './DialogProvider';
import { asPostCreateInput, PostEditor, PostEditorState, usePostEditor } from '../editors';

export interface CreatePostDrawerProps extends DialogProps<GroupPostFragment | null> {
    group: GroupCardFragment;
}

export const CreatePostDrawer = (props: CreatePostDrawerProps) => {
    const { group, resolve, dispose, visible } = props;

    const editorState = usePostEditor({ group });

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

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title={`Post in ${group.name}`}
            placement="right"
            onClose={dispose}
            visible={visible}>
            <PostEditor state={editorState} loading={mutation.loading} onSubmit={handlePost} />
        </Drawer>
    );
};
