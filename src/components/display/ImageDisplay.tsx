import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useNhostClient } from '@nhost/react';
import { FileUploadCardFragment } from '../../generated/graphql';

export interface ImageDisplayProps extends Omit<ImageProps, 'src'> {
    file: FileUploadCardFragment;
    dataCy?: string;
}

export const ImageDisplay = (props: ImageDisplayProps) => {
    const nhost = useNhostClient();
    const { file, dataCy, ...rest } = props;

    return (
        <Image
            data-cy={dataCy}
            objectFit="cover"
            src={nhost.storage.getPublicUrl({ fileId: props.file.id })}
            {...rest}
        />
    );
};
