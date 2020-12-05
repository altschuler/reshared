import { Alert, Button, Form, Input } from 'antd';
import { createUseEditor, EditorState } from '../AbstractEditor';
import {
    GroupCardFragment,
    ThingDetailsFragment,
    Things_Insert_Input,
} from '../../../generated/graphql';
import { GroupSelect } from '../../forms/GroupSelect';

export interface EditorThing {
    name: string;
    groups: GroupCardFragment[];
}

export const makeEditorThing = (source?: ThingDetailsFragment): EditorThing => ({
    name: source?.name || '',
    groups: source?.group_relations.map((r) => r.group) || [],
});

export type ThingEditorState = EditorState<EditorThing>;

export interface ThingEditorProps {
    state: ThingEditorState;
    loading?: boolean;
    error?: string;
    submitLabel?: string;
    onSubmit: (state: ThingEditorState) => unknown;
}

export const ThingEditor = (props: ThingEditorProps) => {
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

                <Form.Item label="Shared in these groups">
                    <GroupSelect
                        placeholder="Select one or more groups"
                        multiple={true}
                        value={present.groups}
                        onChange={(groups) => state.update({ groups })}
                    />
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

export const useThingEditor = createUseEditor<EditorThing>(makeEditorThing());

export const asThingCreateInput = ({ present }: ThingEditorState): Things_Insert_Input => ({
    name: present.name,
    group_relations: { data: present.groups.map((g) => ({ group_id: g.id })) },
});
