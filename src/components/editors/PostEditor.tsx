import { Alert, Button, Form, Input, Popconfirm, Space, Typography } from 'antd';
import { createUseEditor, EditorState } from './AbstractEditor';
import {
    Group_Post_Type_Enum,
    Group_Posts_Insert_Input,
    Group_Posts_Set_Input,
    GroupCardFragment,
    GroupPostFragment,
} from '../../generated/graphql';
import Joi from 'joi';
import { useCallback, useMemo } from 'react';
import { GroupPostTypeSelect, GroupSelect } from '../forms';
import { HeartOutlined } from '@ant-design/icons';

export const postSchema = Joi.object<EditorPost>({
    content: Joi.string().min(10).max(1000).messages({
        'string.empty': 'Required',
        'string.min': 'Write a bit more',
        'string.max': 'Keep it a little shorter (max 1000 characters)',
    }),
    type: Joi.string().valid(Group_Post_Type_Enum.Request, Group_Post_Type_Enum.Message),
    group: Joi.any(),
});

export interface EditorPost {
    content: string;
    type: Group_Post_Type_Enum;
    resolved: boolean;
    group: GroupCardFragment | null;
}

export const makeEditorPost = (source?: GroupPostFragment): EditorPost => ({
    content: source?.content || '',
    type: source?.type || Group_Post_Type_Enum.Request,
    resolved: source?.resolved || false,
    group: source?.group || null,
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

    const handleSubmit = useCallback(() => state.submit() && onSubmit(state), [onSubmit, state]);
    const contentPlaceholder = useMemo(
        () =>
            present.type === Group_Post_Type_Enum.Request
                ? 'What are you looking for?'
                : "What's on your mind?",
        [present.type],
    );

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

                <Form.Item {...state.ant('content')}>
                    <Input.TextArea
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
        </div>
    );
};

export const usePostEditor = createUseEditor(makeEditorPost(), postSchema);

export const asPostCreateInput = ({ present }: PostEditorState): Group_Posts_Insert_Input => ({
    content: present.content,
    type: present.type,
    group_id: present.group?.id,
    resolved: present.resolved,
});

export const asPostUpdateInput = ({ present }: PostEditorState): Group_Posts_Set_Input => ({
    content: present.content,
    type: present.type,
    resolved: present.resolved,
});
