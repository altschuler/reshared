import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useNhostClient } from '@nhost/react';
import { FileUploadCardFragment } from '../../generated/graphql';

export interface ImageDisplayProps extends Omit<ImageProps, 'src'> {
    file: FileUploadCardFragment;
}

export const ImageDisplay = (props: ImageDisplayProps) => {
    const nhost = useNhostClient();
    const { file, ...rest } = props;

    return (
        <Image
            objectFit="cover"
            src={nhost.storage.getPublicUrl({ fileId: props.file.id })}
            {...rest}
        />
    );
};
