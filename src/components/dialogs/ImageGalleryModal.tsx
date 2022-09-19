import React from 'react';
import { Carousel, Modal, Typography } from 'antd';
import Image from 'next/image';
import { DialogProps } from './DialogProvider';
import { createUseStyles } from 'react-jss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const useStyles = createUseStyles({
    image: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    description: {
        textAlign: 'center',
    },
    carousel: {
        '& .slick-dots': {
            position: 'initial',
            bottom: 'initial',
        },

        '& .slick-dots li button': {
            background: 'black',
        },

        '& .slick-dots li.slick-active button': {
            background: '#1890ff',
        },

        '& .slick-next, & .slick-prev, & .slick-next:hover, & .slick-prev:hover, & .slick-next:focus, & .slick-prev:focus':
            {
                fontSize: '1.2em',
                color: 'black',
            },
    },
});

export interface ImageWithDescription {
    id: string;
    url: string;
    description: string;
}

export interface ImageGalleryModalProps extends DialogProps<void> {
    title: string;
    startIndex?: number;
    images: ImageWithDescription[];
}

// Avoid carousel warning of currentSlide/slideCount props
const Arrow = ({
    left,
    currentSlide,
    slideCount,
    ...rest
}: {
    left: boolean;
    currentSlide?: number;
    slideCount?: number;
    [key: string]: any;
}) => (left ? <ArrowLeftOutlined {...rest} /> : <ArrowRightOutlined {...rest} />);

export const ImageGalleryModal = (props: ImageGalleryModalProps) => {
    const classes = useStyles();
    return (
        <Modal
            title={props.title}
            open={props.visible}
            onOk={props.dispose}
            onCancel={props.dispose}
            footer={null}>
            <Carousel
                initialSlide={props.startIndex}
                className={classes.carousel}
                draggable
                arrows
                nextArrow={<Arrow left={false} />}
                prevArrow={<Arrow left />}>
                {props.images.map((image) => (
                    <div className={classes.image} key={image.id}>
                        <Image
                            alt={image.description}
                            src={image.url}
                            width={500}
                            height={500}
                            objectFit="contain"
                        />
                        <Typography.Paragraph className={classes.description}>
                            {image.description}
                        </Typography.Paragraph>
                    </div>
                ))}
            </Carousel>
        </Modal>
    );
};
