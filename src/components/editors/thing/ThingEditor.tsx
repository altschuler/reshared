import { Alert, Button, Form, Input } from 'antd';
import { createUseEditor, EditorState } from '../AbstractEditor';
import {
    FileUploadCardFragment,
    GroupCardFragment,
    Thing_Type_Enum,
    ThingDetailsFragment,
    ThingImageCardFragment,
    Things_Insert_Input,
    UpdateThingInput,
} from '../../../generated/graphql';
import { GroupSelect, ImageInput, ThingTypeSelect } from '../../forms';

export interface EditorThingImage {
    id?: string;
    description: string;
    order: number;
    file: FileUploadCardFragment;
}

export const makeEditorThingImage = (source: ThingImageCardFragment): EditorThingImage => ({
    id: source.id,
    description: source.description || '',
    order: source.order || 0,
    file: source.file,
});

export interface EditorThing {
    id?: string | null;
    name: string;
    groups: GroupCardFragment[];
    images: EditorThingImage[];
    description: string;
    category: string;
    type: Thing_Type_Enum | null;
}

export const makeEditorThing = (source?: ThingDetailsFragment): EditorThing => ({
    id: source?.id || null,
    name: source?.name || '',
    groups: source?.group_relations.map((r) => r.group) || [],
    images: source?.images.map(makeEditorThingImage) || [],
    category: source?.category || '',
    description: source?.description || '',
    type: source?.type || null,
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

                <Form.Item label="Description" rules={[{ required: true, max: 500 }]}>
                    <Input
                        placeholder="Description"
                        value={present.description}
                        onChange={(e) => state.update({ description: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Type">
                    <ThingTypeSelect
                        value={present.type}
                        onChange={(type) => state.update({ type })}
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

                <Form.Item label="Images">
                    <ImageInput
                        value={present.images}
                        onChange={(images) => state.update({ images })}
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
    category: present.category,
    description: present.description,
    type: present.type,
    images: {
        data: present.images.map((i) => ({
            file_id: i.file.id,
            description: i.description,
            order: i.order,
        })),
    },
});

export const asThingUpdateInput = ({ present }: ThingEditorState): UpdateThingInput => ({
    id: present.id,
    name: present.name,
    groups: present.groups.map((g) => ({ groupId: g.id })),
    category: present.category,
    description: present.description,
    type: present.type,
    images: present.images.map((i) => ({
        fileId: i.file.id,
        description: i.description,
        order: i.order,
    })),
});
