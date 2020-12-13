import { ChangeEvent, useCallback, useState } from 'react';
import { isEmpty, get } from 'lodash';

import { Form, Button, Input, Modal, Space, Spin } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import Image from 'next/image';

import { uploadFile } from '../../utils/files';
import { EditorThingImage } from '../editors';
import { removeAt } from '../../utils/array';

export interface ImageInputProps {
    value: EditorThingImage[];
    errors: any;
    onChange: (value: EditorThingImage[]) => unknown;
    onTouch: (path: string[]) => unknown;
}

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },

    dashedBox: {
        border: '1px dashed #D9D9D9',
        backgroundColor: '#FAFAFA',
        width: 104,
        height: 104,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'border-color 0.3s',
        cursor: 'pointer',

        '&:hover': {
            borderColor: '#1890ff',
        },
    },

    imageItem: {
        width: 400,
        height: 100,
        display: 'flex',
        '& > *': {
            marginRight: '2em',
        },
    },

    thumbnail: {
        flex: 'none',
    },

    uploadButton: {
        marginBottom: '1em',
        alignSelf: 'flex-start',
    },

    imageList: {
        display: 'flex',
    },
});

export const ImageInput = ({ value, errors, onChange, onTouch }: ImageInputProps) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const handleUpload = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const files = Array.from(e.target.files || []);

            if (isEmpty(files)) {
                return;
            }

            if (files.some((f) => !f.type.match(/^image\/./))) {
                Modal.error({
                    title: 'Unsupported file',
                    content: 'Only image files are supported',
                });
                return;
            }

            setLoading(true);
            Promise.all(files.map((file) => uploadFile(file)))
                .then((fileUploads) =>
                    onChange([
                        ...value,
                        ...fileUploads.map((file) => ({ description: '', order: 100, file })),
                    ]),
                )
                .finally(() => setLoading(false));
        },
        [onChange, value],
    );

    const handleDescriptionChange = useCallback(
        (index: number, description: string) => {
            onChange(value.map((img, i) => (i === index ? { ...img, description } : img)));
        },
        [onChange, value],
    );

    const handleRemoveImage = useCallback(
        (index: number) => {
            onChange(removeAt(value, index));
        },
        [onChange, value],
    );

    return (
        <div className={classes.root}>
            <label className={classes.uploadButton}>
                <div className="ant-btn">
                    <span>Add Image {loading && <Spin />}</span>
                </div>

                <input
                    multiple
                    style={{ display: 'none' }}
                    disabled={loading}
                    accept="image/*"
                    type="file"
                    onChange={handleUpload}
                />
            </label>

            <div className={classes.imageList}>
                <Space direction="vertical">
                    {value.map((img, index) => {
                        const descriptionError = get(errors, ['images', index, 'description']);
                        return (
                            <Space key={img.file?.id} className={classes.imageItem}>
                                <Image
                                    className={classes.thumbnail}
                                    src={img.file.url}
                                    width={80}
                                    height={80}
                                />
                                <Form.Item
                                    validateStatus={descriptionError ? 'error' : 'success'}
                                    help={descriptionError}>
                                    <Input.TextArea
                                        onBlur={() =>
                                            onTouch(['images', `${index}`, 'description'])
                                        }
                                        value={img.description}
                                        placeholder="Description (optional)"
                                        rows={2}
                                        onChange={(e) =>
                                            handleDescriptionChange(index, e.target.value)
                                        }
                                    />
                                </Form.Item>
                                <Button
                                    size="small"
                                    shape="circle"
                                    icon={<DeleteFilled />}
                                    onClick={() => handleRemoveImage(index)}
                                />
                            </Space>
                        );
                    })}
                </Space>
            </div>
        </div>
    );
};
