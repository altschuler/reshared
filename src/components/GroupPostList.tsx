import {
    Group_Post_Type_Enum,
    Group_Posts_Bool_Exp,
    Group_Posts_Order_By,
    GroupPostFragment,
    Order_By,
    ThingCardFragment,
    useCreateGroupPostCommentMutation,
    useGroupPostListQuery,
} from '../generated/graphql';
import { isEmpty } from 'lodash';
import { useAuth } from '../utils/auth';
import { EditPostDrawer, EditThingDrawer, useDialogs } from './dialogs';
import { usePagination } from '../utils/list';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Comment, Button, Card, Divider, List, Input, Form, message, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { DateDisplay, UserAvatar } from './display';
import { createUseStyles } from 'react-jss';
import { CommentEditor, CommentEditorState, useCommentEditor } from './editors';

const useStyles = createUseStyles({
    search: {
        maxWidth: 200,
    },
    thumbnail: {
        width: 40,
        height: 40,
        border: '1px solid #EEE',
        borderRadius: 3,
        cursor: 'pointer',
        '& img': {
            borderRadius: 3,
        },
        '&:hover': {
            borderColor: '#1890ff',
        },
        transition: 'border-color 0.3s',
    },
});

export interface GroupPostListProps {
    initial?: GroupPostFragment[];
    where: Group_Posts_Bool_Exp;
    skip?: boolean;
    orderBy?: Group_Posts_Order_By[];
    hideSearch?: boolean;
    emptyText?: ReactNode | (() => ReactNode);
}

export const GroupPostList = (props: GroupPostListProps) => {
    const auth = useAuth();
    // const [query, setQuery] = useState('');
    // const debouncedQuery = useDebounce(query, 300);
    const { showDialog } = useDialogs();
    const pgn = usePagination();
    const classes = useStyles();

    const { data, previousData, loading } = useGroupPostListQuery({
        skip: props.skip,
        variables: {
            limit: pgn.limit,
            offset: pgn.offset,
            orderBy: [{ created_at: Order_By.Desc }],
            where: {
                _and: [props.where],
            },
        },
    });

    const results = data || previousData;
    const posts = results?.group_posts || previousData?.group_posts || [];
    const total = results?.group_posts_aggregate.aggregate?.count || 0;

    useEffect(() => pgn.setTotal(total), [total, pgn]);

    return (
        <List
            loading={loading}
            itemLayout="horizontal"
            size="large"
            pagination={pgn.config}
            dataSource={posts}
            locale={props.emptyText ? { emptyText: props.emptyText } : undefined}
            renderItem={(post) => <GroupPostDisplay key={post.id} post={post} />}
        />
    );
};

interface GroupPostDisplayProps {
    post: GroupPostFragment;
}

const GroupPostDisplay = ({ post }: GroupPostDisplayProps) => {
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
        <Card
            size="small"
            title={
                <span>
                    <UserAvatar showName user={post.author} /> {post.author.displayName} {title}
                </span>
            }
            extra={[
                <DateDisplay key="date" utc={post.created_at} showDistance mode="datetime" />,
                post.author.id === auth.user?.id && (
                    <Button key="edit" size="small" icon={<EditOutlined />} onClick={handleEdit}>
                        Edit
                    </Button>
                ),
            ]}
            style={{ width: '100%', maxWidth: 800, marginBottom: '2em' }}>
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
        </Card>
    );
};
