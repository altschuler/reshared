import React, { useCallback } from 'react';
import Link from 'next/link';
import { Button, Descriptions, Divider, PageHeader, Space, Typography } from 'antd';
import { head } from 'lodash';
import Image from 'next/image';
import { PageLayout } from '../root/PageLayout';
import {
    ThingCardFragment,
    ThingDetailsFragment,
    useThingDetailsQuery,
} from '../../generated/graphql';
import { EditThingDrawer, ImageGalleryModal, useDialogs } from '../../components/dialogs';
import { ownsThing } from '../../utils/thing';
import { useAuth } from '../../utils/auth';
import { DateDisplay, ThingTypeTag, UserAvatar } from '../../components/display';
import { createUseStyles } from 'react-jss';
import { ThingInterestButton } from '../../components/ThingInterestButton';
import { useRouter } from 'next/router';
import { urlFor } from '../../utils/urls';

const useStyles = createUseStyles({
    header: {
        marginBottom: 0,
    },
    imageList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
    },
    thumbnail: {
        cursor: 'pointer',
        border: '1px solid #EEE',
        borderRadius: 3,
        transition: 'border-color 0.3s',
        '& img': {
            borderRadius: 3,
        },
        '&:hover': {
            borderColor: '#1890ff',
        },
    },
});

export const ThingPage = () => {
    const classes = useStyles();
    const auth = useAuth();
    const params = useRouter().query;
    const { showDialog } = useDialogs();

    const query = useThingDetailsQuery({
        variables: { shortId: params.shortId as string },
    });

    const thing: ThingDetailsFragment | null = head(query.data?.things) || null;

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

    if (query.loading) {
        return <PageLayout loading />;
    }

    if (query.error || !thing) {
        return (
            <PageLayout error={query.error?.message || "Something didn't go as planned, sorry!"} />
        );
    }

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
                    <Descriptions colon={false}>
                        <Descriptions.Item
                            label={<Typography.Title level={5}>Owner</Typography.Title>}>
                            <Space align="center" size={5}>
                                <UserAvatar user={thing.owner} /> {thing.owner.name}
                            </Space>
                        </Descriptions.Item>

                        {thing.description && (
                            <Descriptions.Item
                                label={<Typography.Title level={5}>Description</Typography.Title>}>
                                {thing.description}
                            </Descriptions.Item>
                        )}

                        <Descriptions.Item
                            label={<Typography.Title level={5}>Type</Typography.Title>}>
                            <ThingTypeTag type={thing.type} />
                        </Descriptions.Item>

                        <Descriptions.Item
                            label={<Typography.Title level={5}>Shared in</Typography.Title>}>
                            <Space split={<Divider type="vertical" />}>
                                {thing.group_relations.map((r) => (
                                    <Link
                                        key={r.group.id}
                                        href={urlFor.group.home(r.group)}
                                        passHref>
                                        <Typography.Link>{r.group.name}</Typography.Link>
                                    </Link>
                                ))}
                            </Space>
                        </Descriptions.Item>

                        {thing.expiry && (
                            <Descriptions.Item
                                label={<Typography.Title level={5}>Expires</Typography.Title>}>
                                <DateDisplay mode="datetime" showDistance utc={thing.expiry} />
                            </Descriptions.Item>
                        )}
                    </Descriptions>

                    <div className={classes.imageList}>
                        {thing.images.map((img, index) => (
                            <div key={img.id} className={classes.thumbnail}>
                                <Image
                                    title={img.description}
                                    width={100}
                                    height={100}
                                    objectFit="cover"
                                    alt={img.description || img.file.name}
                                    src={img.file.url}
                                    onClick={() => handleShowGallery(thing, index)}
                                />
                            </div>
                        ))}
                    </div>
                </PageHeader>
            )}
        </PageLayout>
    );
};
