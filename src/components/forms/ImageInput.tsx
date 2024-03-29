import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useNhostClient } from '@nhost/nextjs';
import { message, Space, Typography, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useState } from 'react';
import { FileUploadCardFragment } from '../../generated/graphql';
import { ImageDisplay } from '../display';

export interface ImageInputProps {
    value: FileUploadCardFragment | null;
    width?: number;
    height?: number;
    onChange: (value: FileUploadCardFragment | null) => unknown;
    dataCy?: string;
}

export const ImageInput = (props: ImageInputProps) => {
    const nhost = useNhostClient();
    const [loading, setLoading] = useState(false);

    const handleUploadImage = async (file: RcFile) => {
        setLoading(true);

        const uploaded = await nhost.storage.upload({ file });

        if (uploaded.error) {
            message.error(uploaded.error.message);
        } else {
            props.onChange(uploaded.fileMetadata);
        }

        setLoading(false);

        return '';
    };

    const handleRemove = () => props.onChange(null);

    const beforeUpload = (file: RcFile) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('Only JPG and PNG files are allowed');
        }
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) {
            message.error('Image must smaller than 5MB');
        }
        return isJpgOrPng && isLt2M;
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    // className = "avatar-uploader"
    return (
        <Space direction="vertical" align="center" size={0} data-cy={props.dataCy}>
            <Upload
                data-cy="input"
                action={handleUploadImage}
                beforeUpload={beforeUpload}
                showUploadList={false}
                listType="picture-card">
                {props.value ? (
                    <ImageDisplay
                        dataCy="preview"
                        width={props.width || 100}
                        height={props.height || 100}
                        file={props.value}
                        alt="Uploaded image"
                    />
                ) : (
                    uploadButton
                )}
            </Upload>

            {props.value && (
                <Typography.Link data-cy="remove" onClick={handleRemove}>
                    Remove
                </Typography.Link>
            )}
        </Space>
    );
};
