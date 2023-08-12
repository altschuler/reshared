import { CheckCircleTwoTone, EditOutlined } from '@ant-design/icons';
import { Comment } from '@ant-design/compatible';

import { Badge, Button, Card, List, message, Modal, Space, Tooltip, Typography } from 'antd';
import clsx from 'clsx';
import { isEmpty } from 'lodash-es';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
    GroupPostFragment,
    Group_Post_Type_Enum,
    useCreateGroupPostCommentMutation,
    useUpdateGroupPostMutation,
} from '../../generated/graphql';
import { useAuth } from '../../utils/auth';
import { urlFor } from '../../utils/urls';
import { EditPostDrawer, useDialogs } from '../dialogs';
import { DateDisplay, UserAvatar } from '../display';
import { CommentEditor, CommentEditorState, useCommentEditor } from '../editors';

const useStyles = createUseStyles({
    card: {
        flex: 1,
        boxShadow: '0px 0px 58px 5px rgba(125,125,125,.1)',
    },

    pinned: {
        border: '1px solid #188ffe',
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

    const [updatePost, mutation] = useUpdateGroupPostMutation({});

    const handleEdit = useCallback(() => showDialog(EditPostDrawer, { post }), [post, showDialog]);
    const handleResolve = useCallback(() => {
        updatePost({ variables: { id: post.id, input: { resolved: true } } })
            .then(() => message.success('Your request has been marked as resolved'))
            .catch((err) =>
                Modal.error({
                    title: 'Something unexpected happened',
                    content: `An error happened while updating your thing, the server said: ${err.message}'`,
                }),
            );
    }, [post]);

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
            ? `${post.author.displayName} ${post.pinned ? 'pinned' : 'posted'} a message`
            : `${post.author.displayName} is looking for ${post.keyword || 'something'}`;

    const isAuthor = post.author.id === auth.user?.id;
    const comments = useMemo(() => post.comments.slice().reverse(), [post.comments]);

    const card = (
        <Card
            className={clsx(classes.card, post.pinned && classes.pinned)}
            size="small"
            title={
                <Space>
                    <UserAvatar user={post.author} />
                    {link ? (
                        <Link href={urlFor.group.post(post)} legacyBehavior>{title}</Link>
                    ) : (
                        <span>{title}</span>
                    )}
                </Space>
            }
            extra={
                <Space style={post.pinned ? { paddingRight: 50 } : {}}>
                    <Typography.Text type="secondary">
                        <DateDisplay mode="distance" utc={post.created_at} />
                    </Typography.Text>

                    {isAuthor && (
                        <Button
                            key="edit"
                            size="small"
                            icon={<EditOutlined />}
                            onClick={handleEdit}>
                            Edit
                        </Button>
                    )}

                    {isAuthor && post.type === Group_Post_Type_Enum.Request && !post.resolved && (
                        <Tooltip title="If you've found what you were looking for then mark the request as resolved">
                            <Button
                                key="resolve"
                                size="small"
                                icon={<CheckCircleTwoTone />}
                                onClick={handleResolve}>
                                Resolve
                            </Button>
                        </Tooltip>
                    )}

                    {post.type === Group_Post_Type_Enum.Request && post.resolved && (
                        <Tooltip key="resolved" title="The request has been resolved">
                            <CheckCircleTwoTone twoToneColor="#52c41a" />
                        </Tooltip>
                    )}
                </Space>
            }>
            <Typography.Paragraph style={{ whiteSpace: 'pre-wrap' }}>
                {post.content}
            </Typography.Paragraph>

            <div>
                {!isEmpty(comments) && (
                    <List
                        header={`${comments.length} ${comments.length === 1 ? 'reply' : 'replies'}`}
                        itemLayout="horizontal"
                        dataSource={comments}
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

    return post.pinned ? <Badge.Ribbon text="Pinned">{card}</Badge.Ribbon> : card;
};
