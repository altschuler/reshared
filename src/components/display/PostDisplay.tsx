import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Comment, List, Modal, Space, Typography } from 'antd';
import { isEmpty } from 'lodash-es';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
    GroupPostFragment,
    Group_Post_Type_Enum,
    useCreateGroupPostCommentMutation,
} from '../../generated/graphql';
import { useAuth } from '../../utils/auth';
import { urlFor } from '../../utils/urls';
import { EditPostDrawer, useDialogs } from '../dialogs';
import { DateDisplay, UserAvatar } from '../display';
import { CommentEditor, CommentEditorState, useCommentEditor } from '../editors';

const useStyles = createUseStyles({
    card: {
        boxShadow: '0px 0px 58px 5px rgba(125,125,125,.1)',
    },

    cardHeader: {
        backgroundColor: '#f3f9ff',
    },
});

export const PostDisplay = ({ post, link }: { post: GroupPostFragment; link?: boolean }) => {
    const classes = useStyles();
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

    const title =
        post.type === Group_Post_Type_Enum.Message
            ? `${post.author.displayName} posted a message`
            : `${post.author.displayName} is looking for something`;

    return (
        <Card
            className={classes.card}
            size="small"
            title={
                <Space>
                    <UserAvatar user={post.author} />
                    {link ? (
                        <Link href={urlFor.group.post(post)}>{title}</Link>
                    ) : (
                        <span>{title}</span>
                    )}
                </Space>
            }
            extra={
                <Space>
                    <Typography.Text type="secondary">
                        <DateDisplay mode="distance" utc={post.created_at} />
                    </Typography.Text>

                    {post.author.id === auth.user?.id && (
                        <Button
                            key="edit"
                            size="small"
                            icon={<EditOutlined />}
                            onClick={handleEdit}>
                            Edit
                        </Button>
                    )}
                </Space>
            }>
            <Typography.Paragraph style={{ whiteSpace: 'pre-wrap' }}>
                {post.content}
            </Typography.Paragraph>

            <div>
                {!isEmpty(post.comments) && (
                    <List
                        header={`${post.comments.length} ${
                            post.comments.length === 1 ? 'reply' : 'replies'
                        }`}
                        itemLayout="horizontal"
                        dataSource={post.comments}
                        renderItem={(comment) => (
                            <li>
                                <Comment
                                    author={comment.comment.author.displayName}
                                    avatar={<UserAvatar user={comment.comment.author} />}
                                    content={
                                        <Typography.Text style={{ whiteSpace: 'pre-wrap' }}>
                                            {comment.comment.content}
                                        </Typography.Text>
                                    }
                                    datetime={
                                        <DateDisplay
                                            utc={comment.comment.created_at}
                                            mode="distance"
                                        />
                                    }
                                />
                            </li>
                        )}
                    />
                )}

                {showCommentEditor ? (
                    <Comment
                        avatar={auth.userDetails && <UserAvatar user={auth.userDetails} />}
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
            </div>
        </Card>
    );
};
