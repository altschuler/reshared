import React, { useCallback } from 'react';
import { Button, PageHeader, Space, Typography } from 'antd';
import { head } from 'lodash';
import Image from 'next/image';
import { PageLayout } from '../root/PageLayout';
import {
    ThingCardFragment,
    ThingDetailsFragment,
    useThingDetailsQuery,
} from '../../generated/graphql';
import { EditThingDrawer, ImageGalleryModal, useDialogs } from '../../components/dialogs';
import { ThingTypeTag } from '../../components/ThingList';
import { ownsThing } from '../../utils/thing';
import { useAuth } from '../../utils/auth';
import { UserAvatar } from '../../components/display';
import { createUseStyles } from 'react-jss';
import { ThingInterestButton } from '../../components/ThingInterestButton';
import { useRouter } from 'next/router';

const useStyles = createUseStyles({
    header: {
        marginBottom: 0,
    },
});

export interface ThingPageProps {
    dummy?: 1;
    thing: ThingDetailsFragment;
}

export const ThingPage = (props: ThingPageProps) => {
    const classes = useStyles();
    const auth = useAuth();
    const params = useRouter().query;
    const { showDialog } = useDialogs();

    const query = useThingDetailsQuery({
        variables: { shortId: params.shortId as string },
    });
    const thing = head(query.data?.things);

    const handleShowGallery = useCallback(
        (thing: ThingCardFragment, startIndex: number) =>
            showDialog(ImageGalleryModal, {
                title: `Images for ${thing.name}`,
                startIndex,
                images: thing.images.map((i) => ({
                    id: i.id,
                    description: i.description,
                    url: i.file.url,
                })),
            }),
        [showDialog],
    );

    const handleEdit = useCallback(
        (thing: ThingCardFragment) => showDialog(EditThingDrawer, { thing }),
        [showDialog],
    );

    return (
        <PageLayout>
            {!query.loading && (
                <PageHeader
                    title={thing.name}
                    extra={[
                        ownsThing(thing, auth.user) ? (
                            <Button
                                title="This is your thing, click to edit"
                                key="edit"
                                onClick={() => handleEdit(thing)}>
                                Edit
                            </Button>
                        ) : (
                            <ThingInterestButton thing={thing} />
                        ),
                    ]}>
                    <Space align="center">
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                            Owner
                        </Typography.Title>
                        <Space align="center" size={5}>
                            <UserAvatar user={thing.owner} /> {thing.owner.name}
                        </Space>
                    </Space>

                    <Typography.Text>{thing.description}</Typography.Text>
                    <ThingTypeTag type={thing.type} />

                    {thing.images.map((img, index) => (
                        <div key={img.id}>
                            <Image
                                title={img.description}
                                width={40}
                                height={40}
                                objectFit="cover"
                                alt={img.description || img.file.name}
                                src={img.file.url}
                                onClick={() => handleShowGallery(thing, index)}
                            />
                        </div>
                    ))}
                </PageHeader>
            )}{' '}
        </PageLayout>
    );
};
