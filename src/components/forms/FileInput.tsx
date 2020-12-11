import { useMemo, useState } from 'react';
import { FileUploadCardFragment } from '../../generated/graphql';
import { Modal, Upload } from 'antd';
import { unionBy } from 'lodash';
import { PlusOutlined } from '@ant-design/icons';
import { RcCustomRequestOptions, UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import { getBase64, uploadFile } from '../../utils/files';

export interface FileInputProps {
    value: FileUploadCardFragment[];
    onChange: (value: FileUploadCardFragment[]) => unknown;
}

export const FileInput = (props: FileInputProps) => {
    // const [previewVisible, setPreviewVisible] = useState(false);
    //
    // const [previewImage, setPreviewImage] = useState('');
    // const [previewTitle, setPreviewTitle] = useState('');
    // const [fileList, setFileList] = useState<UploadFile<FileUploadCardFragment>[]>([]);
    //
    // const handleCancel = () => setPreviewVisible(false);
    //
    // const handlePreview = async (file: UploadFile<FileUploadCardFragment>) => {
    //     if (!file.url && !file.preview && file.originFileObj) {
    //         file.preview = await getBase64(file.originFileObj as File);
    //     }
    //
    //     setPreviewImage(file.response?.url || (file.preview as string));
    //     setPreviewVisible(true);
    //     setPreviewTitle(file.name);
    // };
    //
    // const handleChange = (info: UploadChangeParam) => {
    //     console.log(fileList);
    //     // TODO: only trigger onChange when necessary
    //     const files = info.fileList
    //         .filter((f) => f.response)
    //         .map((f) => f.response as FileUploadCardFragment);
    //     props.onChange(files);
    //     setFileList(info.fileList);
    // };
    //
    // // Merge value with internal filelist
    // const finalFileList = useMemo(() => {
    //     // Create pseudo UploadFile's
    //     const fromValue = props.value.map((f) => ({
    //         uid: f.id,
    //         name: f.name,
    //         status: 'done',
    //         url: f.url,
    //         response: f,
    //     }));
    //
    //     return unionBy(fromValue, fileList, (f) => f.response?.id || f.uid);
    // }, [fileList, props.value]);
    //
    // return (
    //     <>
    //         <Upload
    //             multiple
    //             customRequest={uploadFile}
    //             listType="picture-card"
    //             fileList={finalFileList}
    //             onPreview={handlePreview}
    //             onChange={handleChange}>
    //             {fileList.length >= 5 ? null : (
    //                 <div>
    //                     <PlusOutlined />
    //                     <div style={{ marginTop: 8 }}>Add Image</div>
    //                 </div>
    //             )}
    //         </Upload>
    //         <Modal
    //             visible={previewVisible}
    //             title={previewTitle}
    //             footer={null}
    //             onCancel={handleCancel}>
    //             <img alt="example" style={{ width: '100%' }} src={previewImage} />
    //         </Modal>
    //     </>
    // );
};
