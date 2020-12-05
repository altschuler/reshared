import { Alert, Button, Checkbox, Form, Input } from 'antd';
import { createUseEditor, EditorState } from '../AbstractEditor';
import { CreateGroupInput, GroupDetailsFragment } from '../../../generated/graphql';

export interface EditorGroup {
    name: string;
    description: string | null;
    public: boolean;
}

export const makeEditorGroup = (source?: GroupDetailsFragment): EditorGroup => ({
    name: source?.name || '',
    description: source?.description || '',
    public: source?.public || false,
});

export type GroupEditorState = EditorState<EditorGroup>;

export interface GroupEditorProps {
    state: GroupEditorState;
    loading?: boolean;
    error?: string;
    submitLabel?: string;
    onSubmit: (state: GroupEditorState) => unknown;
}

export const GroupEditor = (props: GroupEditorProps) => {
    const { state, loading, error, submitLabel, onSubmit } = props;
    const { present } = state;
    return (
        <div>
            <Form name="basic" layout="vertical" validateTrigger="onBlur" onFinish={onSubmit}>
                <Form.Item label="Name" rules={[{ required: true, min: 5 }]}>
                    <Input
                        placeholder="Name"
                        value={present.name}
                        onChange={(e) => state.update({ name: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Description" rules={[{ required: true, min: 10 }]}>
                    <Input.TextArea
                        showCount
                        maxLength={250}
                        placeholder="Description"
                        value={present.description || ''}
                        onChange={(e) => state.update({ description: e.target.value })}
                    />
                </Form.Item>

                <Form.Item extra="A public group is open for anyone to join">
                    <Checkbox
                        checked={present.public}
                        onChange={(e) => state.update({ public: e.target.checked })}>
                        Public
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button loading={loading} disabled={loading} type="primary" htmlType="submit">
                        {submitLabel || 'Save'}
                    </Button>
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

export const useGroupEditor = createUseEditor<EditorGroup>(makeEditorGroup());

export const asGroupCreateInput = ({ present }: GroupEditorState): CreateGroupInput => ({
    name: present.name,
    description: present.description || '',
    public: present.public,
});
