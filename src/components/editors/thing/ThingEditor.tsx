import { Alert, Button, Checkbox, Form, Input, Popconfirm, Space, Tooltip, Typography } from 'antd';
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
import { DatePicker, GroupSelect, ThingImageInput, ThingTypeSelect } from '../../forms';
import Joi from 'joi';
import { useCallback } from 'react';
import { formatISO } from 'date-fns';

export const thingSchema = Joi.object<EditorThing>({
    id: Joi.string().uuid({ version: 'uuidv4' }).optional().allow(null),
    name: Joi.string().min(2).max(50).messages({
        'string.empty': 'Required',
        'string.min': 'Minimum two characters',
        'string.max': 'Maximum 50 characters',
    }),
    description: Joi.string().max(500).allow('').message('Maximum 500 characters'),
    category: Joi.string().optional().allow(''),
    type: Joi.string().valid('give', 'have_some', 'lend', 'other'),
    enabled: Joi.boolean(),
    expiry: Joi.date().optional().allow(null),
    groups: Joi.array().items(Joi.any()),
    images: Joi.array().items(
        Joi.object<EditorThingImage>({
            id: Joi.string().uuid({ version: 'uuidv4' }).optional().allow(null),
            description: Joi.string().max(200).allow('').message('Maximum 200 characters'),
            order: Joi.number().integer(),
        }),
    ),
});

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
    enabled: boolean;
    expiry: Date | null;
}

export const makeEditorThing = (source?: ThingDetailsFragment): EditorThing => ({
    id: source?.id || null,
    name: source?.name || '',
    groups: source?.group_relations.map((r) => r.group) || [],
    images: source?.images.map(makeEditorThingImage) || [],
    category: source?.category || '',
    description: source?.description || '',
    type: source?.type || null,
    enabled: source?.enabled || true,
    expiry: source?.expiry || null,
});

export type ThingEditorState = EditorState<EditorThing>;

export interface ThingEditorProps {
    state: ThingEditorState;
    loading?: boolean;
    error?: string;
    submitLabel?: string;
    deleteLoading?: boolean;
    onSubmit: (state: ThingEditorState) => unknown;
    onDelete?: () => unknown;
}

export const ThingEditor = (props: ThingEditorProps) => {
    const { state, loading, error, submitLabel, deleteLoading, onSubmit, onDelete } = props;
    const { present } = state;

    const handleSubmit = useCallback(() => state.submit() && onSubmit(state), [onSubmit, state]);

    return (
        <div>
            <Form layout="vertical">
                <Form.Item label="Name" {...state.ant('name')}>
                    <Input
                        placeholder="Name"
                        value={present.name}
                        onBlur={() => state.touch('name')}
                        onChange={(e) => state.update({ name: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Description" {...state.ant('description')}>
                    <Input.TextArea
                        showCount
                        maxLength={250}
                        placeholder="Description"
                        value={present.description}
                        onBlur={() => state.touch('description')}
                        onChange={(e) => state.update({ description: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Type" {...state.ant('type')}>
                    <ThingTypeSelect
                        multiple={false}
                        value={present.type}
                        onChange={(type) => state.update({ type })}
                    />
                </Form.Item>

                <Form.Item
                    label="Shared in groups"
                    tooltip="The thing can be shared in multiple groups, changes to the thing are applied in all groups. You can change which groups the thing is shared in at any time."
                >
                    <GroupSelect
                        style={{ minWidth: 200 }}
                        placeholder="Select one or more groups"
                        multiple={true}
                        value={present.groups}
                        onChange={(groups) => state.update({ groups })}
                    />
                </Form.Item>

                <Form.Item
                    label="Expiry"
                    tooltip="Optionally select a date upon which the thing will be hidden. Useful when a thing has a last-use date, to mark the date when you will throw it out if no one has shown interest, etc. You can change or disable the expiry at any time."
                >
                    <DatePicker
                        value={present.expiry || undefined}
                        onChange={(expiry) => state.update({ expiry })}
                    />
                </Form.Item>

                <Form.Item>
                    <Tooltip title="Hides the thing from others, useful if it's temporarily unavailable or you are using it yourself, etc.">
                        <Checkbox
                            checked={!present.enabled}
                            onChange={(e) => state.update({ enabled: !e.target.checked })}
                        >
                            Hidden
                        </Checkbox>
                    </Tooltip>
                </Form.Item>

                <Form.Item label="Images">
                    <ThingImageInput
                        onTouch={state.touch}
                        errors={state.errors.touched}
                        value={present.images}
                        onChange={(images) => state.update({ images })}
                    />
                </Form.Item>

                <Form.Item>
                    <Space>
                        {onDelete && (
                            <Popconfirm
                                onConfirm={onDelete}
                                okType="danger"
                                title={
                                    <Typography.Paragraph style={{ maxWidth: 300 }}>
                                        Are you sure you want to delete? It is permanent and all
                                        related data (images, comments) will be deleted as well.
                                    </Typography.Paragraph>
                                }
                            >
                                <Button
                                    loading={deleteLoading}
                                    disabled={loading || deleteLoading}
                                    danger
                                >
                                    Delete
                                </Button>
                            </Popconfirm>
                        )}

                        <Button
                            loading={loading}
                            disabled={loading}
                            type="primary"
                            onClick={handleSubmit}
                        >
                            {submitLabel || 'Save'}
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

export const useThingEditor = createUseEditor(makeEditorThing(), thingSchema);

export const asThingCreateInput = ({ present }: ThingEditorState): Things_Insert_Input => ({
    name: present.name,
    group_relations: { data: present.groups.map((g) => ({ group_id: g.id })) },
    category: present.category,
    description: present.description,
    type: present.type,
    expiry: present.expiry,
    enabled: present.enabled,
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
    expiry: present.expiry ? formatISO(present.expiry) : undefined,
    enabled: present.enabled,
    images: present.images.map((i) => ({
        fileId: i.file.id,
        description: i.description,
        order: i.order,
    })),
});
