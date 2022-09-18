import { Button, Input, Space } from 'antd';
import { useState } from 'react';

export interface EditableInputProps {
    defaultValue?: string;
    password?: boolean;
    onSave: (value: string) => Promise<unknown>;
}

export const EditableInput = (props: EditableInputProps) => {
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(props.password ? '•••••' : props.defaultValue || '');

    const Component = props.password ? Input.Password : Input;

    const handleCancel = () => {
        setValue(props.defaultValue || '');
        setEditing(false);
    };

    const handleSave = () => {
        setLoading(true);
        props
            .onSave(value)
            .catch(() => setValue(props.defaultValue || ''))
            .finally(() => setLoading(false));
        setEditing(false);
    };

    const handleEdit = () => {
        if (props.password) {
            setValue('');
        }
        setEditing(true);
    };

    return (
        <Space direction="horizontal">
            <Component
                disabled={!editing}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            {editing ? (
                <>
                    <Button
                        type="text"
                        color="primary"
                        loading={loading}
                        disabled={loading}
                        onClick={handleSave}>
                        Save
                    </Button>

                    <Button type="text" onClick={handleCancel} disabled={loading}>
                        Cancel
                    </Button>
                </>
            ) : (
                <Button type="text" onClick={handleEdit}>
                    Edit
                </Button>
            )}
        </Space>
    );
};
