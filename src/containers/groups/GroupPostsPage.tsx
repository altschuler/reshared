import { Alert, Button, Card, Comment, List, Modal, Skeleton, Space, Spin, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { head, isEmpty } from 'lodash-es';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { EditPostDrawer, useDialogs } from '../../components/dialogs';
import { DateDisplay, UserAvatar } from '../../components/display';
import { CommentEditor, CommentEditorState, useCommentEditor } from '../../components/editors';
import {
    GroupPostFragment,
    Group_Post_Type_Enum,
    Order_By,
    useCreateGroupPostCommentMutation,
    useGroupDetailsQuery,
    useGroupPostListQuery,
} from '../../generated/graphql';
import { useAuth } from '../../utils/auth';
import { GroupLayout } from './GroupLayout';

export const GroupPostsPage = () => {
    const router = useRouter();

    const classes = useStyles();
    const { id: shortId } = router.query as { id: string };

    const { data, loading, error } = useGroupDetailsQuery({
        variables: { shortId: shortId as string },
    });
    const group = head(data?.groups);

    const postsQuery = useGroupPostListQuery({
        variables: {
            limit: 10,
            offset: 0,
            orderBy: [{ created_at: Order_By.Desc }],
            where: {
                group: { short_id: { _eq: shortId } },
            },
        },
    });

    const posts = postsQuery.data?.group_posts || [];

    if (error || (!loading && !group)) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    if (!group) {
        return <Spin />;
    }

    if (loading) {
        return (
            <GroupLayout activePage="posts" group={group}>
                {[1, 2, 3].map((i) => (
                    <Card key={i} style={{ width: 500, marginTop: 16 }}>
                        <Skeleton loading={loading} avatar={{ size: 'small' }} active></Skeleton>
                    </Card>
                ))}
            </GroupLayout>
        );
    }
    return (
        <GroupLayout activePage="posts" group={group}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {posts.map((post) => (
                    <PostDisplay key={post.id} post={post} />
                ))}
            </Space>
        </GroupLayout>
    );
};

const useStyles = createUseStyles({
    card: {
        boxShadow: '0px 0px 58px 5px rgba(125,125,125,.1)',
    },

    cardHeader: {
        backgroundColor: '#f3f9ff',
    },
});

const PostDisplay = ({ post }: { post: GroupPostFragment }) => {
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
                    <span>{title}</span>
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
                                    content={comment.comment.content}
                                    datetime={
                                        <DateDisplay
                                            utc={comment.comment.created_at}
                                            mode="datetime"
                                        />
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
            </div>
        </Card>
    );
};
