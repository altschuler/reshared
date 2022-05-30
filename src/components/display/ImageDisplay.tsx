import React from 'react';
import Image from 'next/image';
import { useNhostClient } from '@nhost/react';
import { ThingCardFragment, ThingImageCardFragment } from '../../generated/graphql';

export interface ThingImageDisplayProps {
    image: ThingImageCardFragment;
    thing: ThingCardFragment;
    width: number;
    height: number;
    onClick?: () => unknown;
}

export const ThingImageDisplay = (props: ThingImageDisplayProps) => {
    const nhost = useNhostClient();

    return (
        <Image
            title={props.image.description}
            width={props.width}
            height={props.height}
            objectFit="cover"
            alt={props.image.description || `An image of ${props.thing.name}`}
            src={nhost.storage.getPublicUrl({ fileId: props.image.file.id })}
            onClick={props.onClick}
        />
    );
};
