import { Button, Input, Space, Typography } from 'antd';
import { useState } from 'react';

export interface EditableInputProps {
    defaultValue?: string;
    password?: boolean;
    onSave: (value: string) => Promise<unknown>;
    dataCy?: string;
}

export const EditableInput = (props: EditableInputProps) => {
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(props.password ? '•••••' : props.defaultValue || '');

    const Component = props.password ? Input.Password : Input;

    const handleCancel = () => {
        setValue(props.password ? '•••••' : props.defaultValue || '');
        setEditing(false);
    };

    const handleSave = () => {
        setLoading(true);
        const capturedValue = value;
        if (props.password) {
            setValue('•••••');
        }
        props
            .onSave(capturedValue)
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
        <Space direction="horizontal" data-cy={props.dataCy}>
            {editing ? (
                <>
                    <Component
                        data-cy="value:in"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button
                        data-cy="save:btn"
                        size="small"
                        color="primary"
                        loading={loading}
                        disabled={loading}
                        onClick={handleSave}>
                        Save
                    </Button>

                    <Button
                        data-cy="cancel:btn"
                        size="small"
                        onClick={handleCancel}
                        disabled={loading}>
                        Cancel
                    </Button>
                </>
            ) : (
                <>
                    <Typography.Text>{value}</Typography.Text>
                    <Button data-cy="edit:btn" size="small" onClick={handleEdit}>
                        Edit
                    </Button>
                </>
            )}
        </Space>
    );
};
