import { Alert, Button, Checkbox, Form, Input, Popconfirm, Space } from 'antd';
import Joi from 'joi';
import { useCallback } from 'react';
import {
    GroupCardFragment,
    GroupPostFragment,
    Group_Posts_Insert_Input,
    Group_Posts_Set_Input,
    Group_Post_Type_Enum,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { GroupPostTypeSelect, GroupSelect } from '../forms';
import { createUseEditor, EditorState } from './AbstractEditor';

export const postSchema = Joi.object<EditorPost>({
    content: Joi.string().min(10).max(1000).messages({
        'string.empty': 'Required',
        'string.min': 'Write a bit more',
        'string.max': 'Keep it a little shorter (max 1000 characters)',
    }),
    keyword: Joi.when('type', {
        is: Group_Post_Type_Enum.Request,
        then: Joi.string().required().min(4).max(50).messages({
            'string.empty': 'Required',
            'string.min': 'Keep it between 5 and 50 characters',
            'string.max': 'Keep it between 5 and 50 characters',
        }),
        otherwise: Joi.optional(),
    }),

    type: Joi.string().valid(Group_Post_Type_Enum.Request, Group_Post_Type_Enum.Message),
    group: Joi.any(),
});

export interface EditorPost {
    content: string;
    type: Group_Post_Type_Enum;
    resolved: boolean;
    group: GroupCardFragment | null;
    pinned: boolean;
    keyword: string;
}

export const makeEditorPost = (source?: GroupPostFragment): EditorPost => ({
    content: source?.content || '',
    type: source?.type || Group_Post_Type_Enum.Request,
    resolved: source?.resolved || false,
    group: source?.group || null,
    pinned: source?.pinned || false,
    keyword: source?.keyword || '',
});

export type PostEditorState = EditorState<EditorPost>;

export interface PostEditorProps {
    state: PostEditorState;
    loading?: boolean;
    error?: string;
    submitLabel?: string;
    showGroup?: boolean;
    onDelete?: () => unknown;
    onSubmit: (state: PostEditorState) => unknown;
}

export const PostEditor = (props: PostEditorProps) => {
    const { state, loading, error, submitLabel, onSubmit } = props;
    const { present } = state;
    const { isAdmin } = useMembership(state.present.group);

    const isRequest = present.type === Group_Post_Type_Enum.Request;
    const handleSubmit = useCallback(() => state.submit() && onSubmit(state), [onSubmit, state]);
    const contentPlaceholder = isRequest
        ? 'Describe in more detail what are you looking for'
        : "What's on your mind?";

    return (
        <div>
            <Form layout="horizontal">
                {props.showGroup && (
                    <Form.Item label="Group" {...state.ant('group')}>
                        <GroupSelect
                            multiple={false}
                            value={present.group}
                            onChange={(group) => state.update({ group })}
                        />
                    </Form.Item>
                )}

                <Form.Item {...state.ant('type')}>
                    <GroupPostTypeSelect
                        multiple={false}
                        value={present.type}
                        onChange={(type) => state.update({ type })}
                    />
                </Form.Item>

                {!isRequest && isAdmin && (
                    <Form.Item extra="Pinned posts are shown at the top on the group home page">
                        <Checkbox
                            data-cy="pinned:cb"
                            checked={present.pinned}
                            onChange={(e) => state.update({ pinned: e.target.checked })}>
                            Pinned
                        </Checkbox>
                    </Form.Item>
                )}

                {isRequest && (
                    <Form.Item
                        {...state.ant('keyword', {
                            help: (
                                <span>
                                    Choose one or a few keywords that describe what you're looking
                                    for, such as <i>chairs</i>, <i>5mm wood drill</i> or{' '}
                                    <i>children's books</i>.
                                </span>
                            ),
                        })}>
                        <Input
                            placeholder="Keyword"
                            showCount
                            maxLength={50}
                            value={present.keyword}
                            onBlur={() => state.touch('keyword')}
                            onChange={(e) => state.update({ keyword: e.target.value })}
                        />
                    </Form.Item>
                )}

                <Form.Item {...state.ant('content')}>
                    <Input.TextArea
                        autoSize
                        placeholder={contentPlaceholder}
                        showCount
                        maxLength={1000}
                        value={present.content}
                        onBlur={() => state.touch('content')}
                        onChange={(e) => state.update({ content: e.target.value })}
                    />
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Button
                            loading={loading}
                            disabled={loading}
                            type="primary"
                            onClick={handleSubmit}>
                            {submitLabel || 'Post'}
                        </Button>

                        {props.onDelete && (
                            <Popconfirm
                                title="Are you sure you want to delete this post?"
                                onConfirm={props.onDelete}
                                okText="Yes"
                                okType="danger"
                                cancelText="No">
                                <Button loading={loading} disabled={loading} type="default" danger>
                                    Delete
                                </Button>
                            </Popconfirm>
                        )}
                    </Space>
                </Form.Item>

                {error && (
                    <Form.Item>
                        <Alert type="error" message={error} />
                    </Form.Item>
                )}
            </Form>

            {/* <PostDisplay
                post={{
                    id: 'x',
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    author: auth.userDetails!,
                    content: state.present.content,
                    comments: [],
                    keyword: state.present.keyword,
                    group: state.present.group as any,
                    pinned: state.present.pinned,
                    resolved: false,
                    type: state.present.type,
                }}
            /> */}
        </div>
    );
};

export const usePostEditor = createUseEditor(makeEditorPost(), postSchema);

export const asPostCreateInput = ({ present }: PostEditorState): Group_Posts_Insert_Input => ({
    content: present.content,
    type: present.type,
    group_id: present.group?.id,
    resolved: present.resolved,
    pinned: present.type === Group_Post_Type_Enum.Message && present.pinned,
    keyword: present.type === Group_Post_Type_Enum.Request ? present.keyword : '',
});

export const asPostUpdateInput = ({ present }: PostEditorState): Group_Posts_Set_Input => ({
    content: present.content,
    type: present.type,
    resolved: present.resolved,
    pinned: present.type === Group_Post_Type_Enum.Message && present.pinned,
    keyword: present.type === Group_Post_Type_Enum.Request ? present.keyword : '',
});
