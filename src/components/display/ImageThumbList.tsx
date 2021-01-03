import React, { useCallback } from 'react';
import { Space } from 'antd';
import Image from 'next/image';
import { ThingCardFragment } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { ImageGalleryModal, useDialogs } from '../dialogs';

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

    const handleShowGallery = useCallback(
        (startIndex: number) =>
            showDialog(ImageGalleryModal, {
                title: props.thing.name,
                startIndex,
                images: props.thing.images.map((i) => ({
                    id: i.id,
                    description: i.description,
                    url: i.file.url,
                })),
            }),
        [props.thing.images, props.thing.name, showDialog],
    );

    return (
        <Space>
            {props.thing.images.map((img, index) => (
                <div key={img.id} className={classes.thumbnail}>
                    <Image
                        title={img.description}
                        width={40}
                        height={40}
                        objectFit="cover"
                        alt={img.description || img.file.name}
                        src={img.file.url}
                        onClick={() => handleShowGallery(index)}
                    />
                </div>
            ))}
        </Space>
    );
};
