import {
    Group_Post_Type_Enum,
    GroupPostFragment,
    useCreateGroupPostCommentMutation,
} from '../../../generated/graphql';
import { isEmpty } from 'lodash-es';
import { useAuth } from '../../../utils/auth';
import { EditPostDrawer, useDialogs } from '../../dialogs';
import { CommentEditor, CommentEditorState, useCommentEditor } from '../../editors';
import { useCallback, useMemo, useState } from 'react';
import { Button, Comment, List, Modal } from 'antd';
import { UserAvatar } from '../UserAvatar';
import { DateDisplay } from '../DateDisplay';
import { EditOutlined } from '@ant-design/icons';
import { BaseEntry } from './BaseEntry';

export interface GroupPostEntryProps {
    post: GroupPostFragment;
}

export const GroupPostEntry = ({ post }: GroupPostEntryProps) => {
    const auth = useAuth();
    const { showDialog } = useDialogs();
    const commentEditorState = useCommentEditor();
    const [showCommentEditor, setShowCommentEditor] = useState(false);

    const [addComment, commentMutation] = useCreateGroupPostCommentMutation();

    const handleEdit = useCallback(() => showDialog(EditPostDrawer, { post }), [post, showDialog]);
    const handleAddComment = useCallback(
        (state: CommentEditorState) => {
            addComment({
                variables: {
                    groupPostId: post.id,
                    input: { content: state.present.content, author_id: auth.user?.id },
                },
            })
                .then(() => state.reset())
                .catch((err) =>
                    Modal.error({ title: 'Failed to add comment', content: err.message }),
                );
        },
        [addComment, auth.user?.id, post.id],
    );

    const handleCancel = useCallback(() => {
        setShowCommentEditor(false);
        commentEditorState.reset();
    }, [commentEditorState]);

    const title = useMemo(
        () =>
            post.type === Group_Post_Type_Enum.Message
                ? 'posted a message'
                : 'is looking for something',
        [post.type],
    );

    const orderedComments = useMemo(() => post.comments.slice().reverse(), [post.comments]);

    return (
        <BaseEntry
            actor={post.author}
            title={title}
            date={post.created_at}
            extra={
                post.author.id === auth.user?.id && (
                    <Button key="edit" size="small" icon={<EditOutlined />} onClick={handleEdit}>
                        Edit
                    </Button>
                )
            }>
            <p>{post.content}</p>

            {!isEmpty(post.comments) && (
                <List
                    header={`${post.comments.length} ${
                        post.comments.length === 1 ? 'reply' : 'replies'
                    }`}
                    itemLayout="horizontal"
                    dataSource={orderedComments}
                    renderItem={(comment) => (
                        <li>
                            <Comment
                                author={comment.comment.author.displayName}
                                avatar={<UserAvatar user={comment.comment.author} />}
                                content={comment.comment.content}
                                datetime={
                                    <DateDisplay utc={comment.comment.created_at} mode="datetime" />
                                }
                            />
                        </li>
                    )}
                />
            )}

            {showCommentEditor ? (
                <Comment
                    avatar={auth.user && <UserAvatar user={auth.user} />}
                    content={
                        <CommentEditor
                            state={commentEditorState}
                            onSubmit={handleAddComment}
                            onCancel={handleCancel}
                            loading={commentMutation.loading}
                        />
                    }
                />
            ) : (
                <Button type="link" onClick={() => setShowCommentEditor(true)}>
                    Reply
                </Button>
            )}
        </BaseEntry>
    );
};
