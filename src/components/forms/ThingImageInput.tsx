import { ChangeEvent, useCallback, useState } from 'react';
import { isEmpty, get } from 'lodash';

import { Form, Button, Input, Modal, Space, Spin } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import Image from 'next/image';

import { EditorThingImage } from '../editors';
import { removeAt } from '../../utils/array';
import { useAuth } from '../../utils/auth';
import { useNhostClient } from '@nhost/nextjs';

export interface ThingImageInputProps {
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
        // width: 400,
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

export const ThingImageInput = ({ value, errors, onChange, onTouch }: ThingImageInputProps) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    // const { upload } = useFileUpload();
    const auth = useAuth();
    const nhost = useNhostClient();

    const handleUpload = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const files = Array.from(e.target.files || []);

            if (!auth.user || isEmpty(files)) {
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

            Promise.all(files.map((file) => nhost.storage.upload({ file })))
                .then((fileUploads) =>
                    onChange([
                        ...value,
                        ...fileUploads
                            .filter((f) => !!f.fileMetadata)
                            .map((file) => ({
                                description: '',
                                order: 100,
                                file: {
                                    id: file.fileMetadata!.id,
                                    name: file.fileMetadata!.name,
                                    mimeType: file.fileMetadata!.mimeType,
                                },
                            })),
                    ]),
                )
                .finally(() => setLoading(false));
        },
        [auth.user, nhost.storage, onChange, value],
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
                                    alt={img.description || 'Image preview'}
                                    className={classes.thumbnail}
                                    src={nhost.storage.getPublicUrl({ fileId: img.file.id })}
                                    width={80}
                                    height={80}
                                />
                                <Form.Item
                                    validateStatus={descriptionError ? 'error' : 'success'}
                                    help={descriptionError}
                                >
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
