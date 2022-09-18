import ImgCrop from 'antd-img-crop';
import { Alert, Button, Checkbox, Form, Input, Space, Upload } from 'antd';
import { createUseEditor, EditorState } from '../AbstractEditor';
import {
    CreateGroupInput,
    FileUploadCardFragment,
    GroupDetailsFragment,
    Groups_Set_Input,
} from '../../../generated/graphql';
import Joi from 'joi';
import { useCallback } from 'react';
import { ImageInput } from '../../forms/ImageInput';

export const accountSettingsSchema = Joi.object<EditorGroup>({
    name: Joi.string().min(2).max(50).messages({
        'string.empty': 'Required',
        'string.min': 'Minimum two characters',
        'string.max': 'Maximum 100 characters',
    }),
    description: Joi.string().max(250).allow('').message('Maximum 250 characters'),
});

export interface EditorGroup {
    name: string;
    description: string;
    public: boolean;
    banner_file: FileUploadCardFragment | null;
}

export const makeEditorGroup = (source?: GroupDetailsFragment): EditorGroup => ({
    name: source?.name || '',
    description: source?.description || '',
    public: source?.public || false,
    banner_file: source?.banner_file || null,
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

    const handleSubmit = useCallback(() => state.submit() && onSubmit(state), [onSubmit, state]);

    return (
        <div>
            <Form name="basic" layout="vertical">
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
                        value={present.description || ''}
                        onBlur={() => state.touch('description')}
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

                <Form.Item label="Image">
                    <ImageInput
                        value={present.banner_file}
                        onChange={(banner_file) => state.update({ banner_file })}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        loading={loading}
                        disabled={loading}
                        type="primary"
                        onClick={handleSubmit}>
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

export const useGroupEditor = createUseEditor(makeEditorGroup(), groupSchema);

export const asGroupCreateInput = ({ present }: GroupEditorState): CreateGroupInput => ({
    name: present.name,
    description: present.description || '',
    public: present.public,
});

export const asGroupUpdateInput = ({ present }: GroupEditorState): Groups_Set_Input => ({
    name: present.name,
    description: present.description,
    public: present.public,
    banner_file_id: present.banner_file?.id || null,
});
