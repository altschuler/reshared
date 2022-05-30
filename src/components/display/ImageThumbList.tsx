import React, { useCallback } from 'react';
import { Space } from 'antd';
import Image from 'next/image';
import { ThingCardFragment } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { ImageGalleryModal, useDialogs } from '../dialogs';
import { ThingImageDisplay } from './ImageDisplay';
import { useNhostClient } from '@nhost/react';

const useStyles = createUseStyles({
    search: {
        maxWidth: 200,
    },
    thumbnail: {
        width: 40,
        height: 40,
        border: '1px solid #EEE',
        borderRadius: 3,
        cursor: 'pointer',
        '& img': {
            borderRadius: 3,
        },
        '&:hover': {
            borderColor: '#1890ff',
        },
        transition: 'border-color 0.3s',
    },
});

export interface ImageThumbListProps {
    thing: ThingCardFragment;
}

export const ImageThumbList = (props: ImageThumbListProps) => {
    const { showDialog } = useDialogs();
    const classes = useStyles();
    const nhost = useNhostClient();

    const handleShowGallery = useCallback(
        (startIndex: number) =>
            showDialog(ImageGalleryModal, {
                title: props.thing.name,
                startIndex,
                images: props.thing.images.map((i) => ({
                    id: i.id,
                    description: i.description,
                    url: nhost.storage.getPublicUrl({ fileId: i.file.id }),
                })),
            }),
        [nhost.storage, props.thing.images, props.thing.name, showDialog],
    );

    return (
        <Space>
            {props.thing.images.map((img, index) => (
                <div key={img.id} className={classes.thumbnail}>
                    <ThingImageDisplay
                        image={img}
                        thing={props.thing}
                        width={40}
                        height={40}
                        onClick={() => handleShowGallery(index)}
                    />
                </div>
            ))}
        </Space>
    );
};
