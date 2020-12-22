import { InsertFileUploadDocument } from '../generated/graphql';
import { ApolloClient, useApolloClient } from '@apollo/client';
import { useMemo } from 'react';

export interface UploadFileOptions {
    onProgress: (value: number) => unknown;
}

export const uploadFile = async (
    apolloClient: ApolloClient<unknown>,
    file: File,
    options?: UploadFileOptions,
) => {
    // TODO: use axios for progress
    const filename = encodeURIComponent(file.name);

    // Get signed post (secure temporary link to upload directly to S3)
    const res = await fetch(`/api/upload?file=${filename}`);
    const { url, fields } = await res.json();

    // Use signed post to upload
    const formData = new FormData();
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
        formData.append(key, value as any);
    });
    const upload = await fetch(url, { method: 'POST', body: formData });

    if (!upload.ok) {
        throw new Error('Upload failed');
    }

    // Create file in db
    const s3url = `https://${fields.bucket}.s3.amazonaws.com/${fields.key}`;
    const inserted = await apolloClient.mutate({
        mutation: InsertFileUploadDocument,
        variables: {
            input: { name: filename, url: s3url, mime_type: file.type, size: file.size },
        },
    });

    const fileUpload = inserted.data?.insert_file_uploads_one;
    if (!fileUpload) {
        throw new Error('Upload failed');
    }

    return fileUpload;
};

export const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export const useFileUpload = () => {
    const apollo = useApolloClient();
    return useMemo(
        () => ({
            upload: (file: File, options?: UploadFileOptions) => uploadFile(apollo, file, options),
        }),
        [apollo],
    );
};
