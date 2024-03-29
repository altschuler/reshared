﻿import React, { useCallback } from 'react';
import { Space } from 'antd';
import { ThingCardFragment } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { ImageGalleryModal, useDialogs } from '../dialogs';
import { ThingImageDisplay } from './ThingImageDisplay';
import { useNhostClient } from '@nhost/react';
import { isEmpty } from 'lodash-es';

const useStyles = createUseStyles({
    search: {
        maxWidth: 200,
    },
    thumbnail: {
        width: (props: ImageThumbListProps) => props.thumbSize || 40,
        height: (props: ImageThumbListProps) => props.thumbSize || 40,
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
    thumbSize?: number;
}

export const ImageThumbList = (props: ImageThumbListProps) => {
    const { showDialog } = useDialogs();
    const classes = useStyles(props);
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

    if (isEmpty(props.thing.images)) {
        return null;
    }

    return (
        <Space>
            {props.thing.images.map((img, index) => (
                <div key={img.id} className={classes.thumbnail}>
                    <ThingImageDisplay
                        image={img}
                        thing={props.thing}
                        width={props.thumbSize || 40}
                        height={props.thumbSize || 40}
                        onClick={() => handleShowGallery(index)}
                    />
                </div>
            ))}
        </Space>
    );
};
