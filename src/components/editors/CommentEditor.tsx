import { Alert, Button, Form, Input, Space } from 'antd';
import { createUseEditor, EditorState } from './AbstractEditor';
import { CommentCardFragment } from '../../generated/graphql';
import * as Joi from 'joi';
import { useCallback } from 'react';

export const commentSchema = Joi.object<EditorComment>({
    content: Joi.string().min(1).max(1000).messages({
        'string.empty': 'You must say something',
        'string.max': 'Keep it a little shorter (max 1000 characters)',
    }),
});

export interface EditorComment {
    content: string;
}

export const makeEditorComment = (source?: CommentCardFragment): EditorComment => ({
    content: source?.content || '',
});

export type CommentEditorState = EditorState<EditorComment>;

export interface CommentEditorProps {
    state: CommentEditorState;
    loading?: boolean;
    error?: string;
    submitLabel?: string;
    onSubmit: (state: CommentEditorState) => unknown;
    onCancel: () => unknown;
}

export const CommentEditor = (props: CommentEditorProps) => {
    const { state, loading, error, submitLabel, onSubmit } = props;
    const { present } = state;

    const handleSubmit = useCallback(() => state.submit() && onSubmit(state), [onSubmit, state]);

    return (
        <div>
            <Form layout="vertical">
                <Form.Item {...state.ant('content')}>
                    <Input.TextArea
                        rows={1}
                        onChange={(e) => state.update({ content: e.target.value })}
                        value={present.content}
                    />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button
                            loading={loading}
                            disabled={loading}
                            type="primary"
                            onClick={handleSubmit}>
                            {submitLabel || 'Submit'}
                        </Button>
                        <Button disabled={loading} onClick={props.onCancel}>
                            Cancel
                        </Button>
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

export const useCommentEditor = createUseEditor(makeEditorComment(), commentSchema);

// export const asPostCreateInput = ({ present }: CommentEditorState): Group_Posts_Insert_Input => ({
//     content: present.content,
//     type: present.type,
//     group_id: present.group?.id,
//     resolved: present.resolved,
// });
//
// export const asPostUpdateInput = ({ present }: CommentEditorState): Group_Posts_Set_Input => ({
//     content: present.content,
//     type: present.type,
//     resolved: present.resolved,
// });
