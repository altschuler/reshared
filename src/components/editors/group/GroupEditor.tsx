import { Alert, Button, Checkbox, Form, Input } from 'antd';
import { createUseEditor, EditorState } from '../AbstractEditor';
import { CreateGroupInput } from '../../../generated/graphql';

export interface EditorGroup {
    name: string;
    description: string | null;
    public: boolean;
}

export type GroupEditorState = EditorState<EditorGroup>;

export interface GroupEditorProps {
    state: GroupEditorState;
    loading?: boolean;
    error?: string;
    onSubmit: (state: GroupEditorState) => unknown;
}

export const GroupEditor = ({ state, loading, error, onSubmit }: GroupEditorProps) => {
    const { present } = state;
    return (
        <div>
            <Form name="basic" validateTrigger="onBlur" onFinish={onSubmit}>
                {error && (
                    <Form.Item>
                        <Alert type="error" message={error} />
                    </Form.Item>
                )}
                <Form.Item rules={[{ required: true, min: 5 }]}>
                    <Input
                        placeholder="Group name"
                        value={present.name}
                        onChange={(e) => state.update({ name: e.target.value })}
                    />
                </Form.Item>

                <Form.Item rules={[{ required: true, min: 10 }]}>
                    <Input
                        placeholder="Group name"
                        value={present.description || ''}
                        onChange={(e) => state.update({ description: e.target.value })}
                    />
                </Form.Item>

                <Form.Item valuePropName="checked" extra="Public groups are open to all users">
                    <Checkbox>Public</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button loading={loading} disabled={loading} type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export const useGroupEditor = createUseEditor<EditorGroup>({
    name: '',
    description: '',
    public: false,
});

export const asCreateInput = ({ present }: GroupEditorState): CreateGroupInput => ({
    name: present.name,
    description: present.description || '',
    public: present.public,
});
