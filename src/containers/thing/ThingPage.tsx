﻿import React, { useCallback } from 'react';
import Link from 'next/link';
import { Button, Descriptions, Divider, Popconfirm, Space, Typography } from 'antd';
import { head } from 'lodash-es';
import { PageLayout } from '../root/PageLayout';
import {
    ThingCardFragment,
    ThingDetailsFragment,
    Transfer_Request_Status_Enum,
    useThingDetailsQuery,
    useUpdateTransferRequestMutation,
} from '../../generated/graphql';
import {
    EditThingDrawer,
    ImageGalleryModal,
    TransferThingDrawer,
    useDialogs,
} from '../../components/dialogs';
import { ownsThing } from '../../utils/thing';
import { useAuth } from '../../utils/auth';
import { DateDisplay, ThingTypeTag, UserAvatar } from '../../components/display';
import { createUseStyles } from 'react-jss';
import { ThingInterestButton } from '../../components/ThingInterestButton';
import { useRouter } from 'next/router';
import { urlFor } from '../../utils/urls';
import { ThingImageDisplay } from '../../components/display/ThingImageDisplay';
import { useNhostClient } from '@nhost/react';
import { PageHeader } from '@ant-design/pro-layout';

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
    const nhost = useNhostClient();
    const { showDialog } = useDialogs();

    const query = useThingDetailsQuery({
        variables: { shortId: params.shortId as string },
    });

    const thing: ThingDetailsFragment | null = head(query.data?.things) || null;
    const transferRequest = head(thing?.transfer_requests);

    const [cancelTransfer, cancelTransferMutation] = useUpdateTransferRequestMutation();

    const handleShowGallery = useCallback(
        (thing: ThingCardFragment, startIndex: number) =>
            showDialog(ImageGalleryModal, {
                title: `Images of ${thing.name}`,
                startIndex,
                images: thing.images.map((i) => ({
                    id: i.id,
                    description: i.description,
                    url: nhost.storage.getPublicUrl({ fileId: i.file.id }),
                })),
            }),
        [nhost.storage, showDialog],
    );

    const handleEdit = useCallback(
        () => thing && showDialog(EditThingDrawer, { thing }),
        [showDialog, thing],
    );

    const handleTransfer = useCallback(
        () => thing && showDialog(TransferThingDrawer, { thing }),
        [showDialog, thing],
    );

    const handleCancelTransfer = useCallback(() => {
        if (!transferRequest) {
            return;
        }
        cancelTransfer({
            variables: {
                id: transferRequest.id,
                input: { status: Transfer_Request_Status_Enum.Cancelled },
            },
        });
    }, [showDialog, transferRequest]);

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
                    extra={
                        ownsThing(thing, auth.user)
                            ? [
                                  <Button
                                      key="edit"
                                      title="This is your thing, click to edit"
                                      onClick={handleEdit}>
                                      Edit
                                  </Button>,

                                  transferRequest?.status ===
                                  Transfer_Request_Status_Enum.Pending ? (
                                      <Popconfirm
                                          key="cancel-transfer"
                                          cancelText="No"
                                          okText="Yes, cancel the request"
                                          okType="danger"
                                          okButtonProps={{
                                              loading: cancelTransferMutation.loading,
                                          }}
                                          onConfirm={handleCancelTransfer}
                                          title={
                                              <div style={{ maxWidth: 400 }}>
                                                  <Typography.Paragraph>
                                                      Are you sure that you want to cancel the
                                                      transfer to{' '}
                                                      <strong>
                                                          {transferRequest.receiver!.displayName}
                                                      </strong>
                                                      ?
                                                  </Typography.Paragraph>
                                              </div>
                                          }>
                                          <Button title="Cancel request to transfer thing">
                                              Cancel transfer
                                          </Button>
                                      </Popconfirm>
                                  ) : (
                                      <Button
                                          key="transfer"
                                          title="Transfer ownership to someone else"
                                          onClick={handleTransfer}>
                                          Transfer ownership
                                      </Button>
                                  ),
                              ]
                            : [<ThingInterestButton key="interest" thing={thing} />]
                    }>
                    <Descriptions colon={false}>
                        <Descriptions.Item
                            label={<Typography.Title level={5}>Owner</Typography.Title>}>
                            <Space align="center" size={5}>
                                <UserAvatar user={thing.owner} /> {thing.owner.displayName}
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
                                        passHref
                                        legacyBehavior>
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
                                <ThingImageDisplay
                                    image={img}
                                    thing={thing}
                                    width={100}
                                    height={100}
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
