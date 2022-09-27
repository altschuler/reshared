import React, { MouseEvent, useCallback, useMemo, useState } from 'react';
import {
    ActivityCardFragment,
    NotificationCardFragment,
    Transfer_Request_Status_Enum,
    useHandleTransferRequestMutation,
    useMarkAllNotificationsReadMutation,
    useMarkNotificationReadMutation,
    useNotificationsSubscription,
    UserPrivateDetailFragment,
} from '../../generated/graphql';
import { Badge, Button, List, message, Modal, Popover, Space, Tooltip, Typography } from 'antd';
import { DateDisplay, UserAvatar } from '../../components/display';
import { CheckOutlined, NotificationOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { useAuth } from '../../utils/auth';
import { useRouter } from 'next/router';
import { urlFor } from '../../utils/urls';
import { activityMessage } from '../../utils/activity';
import { formatISO } from 'date-fns';

// List
export interface NotificationListProps {
    loading: boolean;
    notifications: NotificationCardFragment[];
    onSelect: () => unknown;
}

export const NotificationList = ({ notifications, loading, onSelect }: NotificationListProps) => {
    const router = useRouter();
    const [markRead] = useMarkNotificationReadMutation();
    const auth = useAuth();

    const handleMarkRead = useCallback(
        (notification: NotificationCardFragment) => {
            markRead({
                variables: { id: notification.id, readAt: formatISO(new Date()) },
            }).catch((err) =>
                Modal.error({ title: 'Failed to mark notification read', content: err.message }),
            );
        },
        [markRead],
    );

    const handleClick = useCallback(
        (notification: NotificationCardFragment) => {
            // Mark the notification as read
            handleMarkRead(notification);

            router.push(urlFor.activity(notification.activity));

            // Let the container know that something was selected (so it can close the popover)
            onSelect();
        },
        [handleMarkRead, onSelect, router],
    );

    const renderNotification = useCallback(
        (notification: NotificationCardFragment) => {
            const activity = notification.activity;

            return (
                <List.Item
                    extra={
                        !notification.read_at && (
                            <Tooltip title="Mark as read">
                                <span
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleMarkRead(notification)}>
                                    <Badge color="blue" />
                                </span>
                            </Tooltip>
                        )
                    }>
                    <List.Item.Meta
                        avatar={activity.actor && <UserAvatar user={activity.actor} />}
                        title={
                            <Typography.Link onClick={() => handleClick(notification)}>
                                <Space direction="vertical">
                                    {activityMessage(notification.activity, auth.user)}
                                    <ActivityActions
                                        activity={notification.activity}
                                        onMarkRead={() => handleMarkRead(notification)}
                                    />
                                </Space>
                            </Typography.Link>
                        }
                        description={
                            <span style={{ fontSize: '0.8em' }}>
                                <DateDisplay mode="datetime" utc={activity.created_at} />
                            </span>
                        }
                    />
                </List.Item>
            );
        },
        [auth.user, handleClick, handleMarkRead],
    );

    return (
        <List
            locale={{ emptyText: 'No activity' }}
            loading={loading}
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={renderNotification}
        />
    );
};

const ActivityActions = ({
    activity,
    onMarkRead,
}: {
    activity: ActivityCardFragment;
    onMarkRead: () => unknown;
}) => {
    const [handleTransferRequest, handleTransferRequestMutation] =
        useHandleTransferRequestMutation();

    const ent = activity.entity;

    const respondTransferRequest = (e: MouseEvent, accepted: boolean) => {
        e.preventDefault();
        e.stopPropagation();

        handleTransferRequest({
            variables: {
                input: {
                    accepted,
                    transfer_request_id: ent.transfer_request!.id,
                },
            },
        }).then(() => {
            onMarkRead();
        });
    };

    if (ent.transfer_request?.status === Transfer_Request_Status_Enum.Pending) {
        return (
            <Space size="small">
                <Button type="text" size="small" onClick={(e) => respondTransferRequest(e, true)}>
                    Accept
                </Button>
                <Button
                    type="text"
                    size="small"
                    danger
                    onClick={(e) => respondTransferRequest(e, false)}>
                    Reject
                </Button>
            </Space>
        );
    }

    return null;
};

// Header button
export interface NotificationsButtonProps {
    user: UserPrivateDetailFragment;
}

const useStyles = createUseStyles({
    popover: {
        minWidth: 350,
    },

    title: {
        textAlign: 'center',
        position: 'relative',
    },

    markAllButton: {
        position: 'absolute',
        right: 0,
        top: 4,
    },

    list: {
        maxHeight: 400,
        overflowY: 'auto',
    },
});

export const NotificationsButton = () => {
    const classes = useStyles();
    const auth = useAuth();
    const user = auth.user!;
    const [open, setOpen] = useState(false);

    const { data, loading } = useNotificationsSubscription({
        variables: { userId: user.id },
    });

    const [markAllRead, markAllMutation] = useMarkAllNotificationsReadMutation({
        variables: { userId: user.id, readAt: formatISO(new Date()) },
    });

    const notifications = useMemo(() => data?.notifications || [], [data?.notifications]);

    const newCount = useMemo(() => notifications.filter((n) => !n.read_at).length, [notifications]);

    const handleMarkAllRead = useCallback(() => {
        markAllRead().then((res) => {
            const count = res.data?.update_notifications?.affected_rows;
            if (count !== 0) {
                return message.success(`Marked ${count} notifications read`);
            }
        });
    }, [markAllRead]);

    const handleSelect = useCallback(() => {
        setOpen(false);
    }, []);

    const menu = useMemo(
        () => (
            <div className={classes.list}>
                <NotificationList
                    notifications={notifications}
                    loading={loading}
                    onSelect={handleSelect}
                />
            </div>
        ),
        [classes.list, handleSelect, loading, notifications],
    );

    return (
        <Popover
            open={open}
            onOpenChange={(isOpen) => setOpen(isOpen)}
            content={menu}
            placement="bottomRight"
            trigger="click"
            overlayClassName={classes.popover}
            title={
                <div className={classes.title}>
                    <Typography.Title level={5}>Activity</Typography.Title>
                    {!!newCount && (
                        <div className={classes.markAllButton}>
                            <Tooltip title="Mark all read">
                                <Button
                                    size="small"
                                    icon={<CheckOutlined />}
                                    onClick={handleMarkAllRead}
                                    loading={markAllMutation.loading}
                                    disabled={markAllMutation.loading}
                                />
                            </Tooltip>
                        </div>
                    )}
                </div>
            }>
            <Badge size="small" count={newCount} overflowCount={9}>
                <Tooltip title="Notifications">
                    <NotificationOutlined
                        style={{ fontSize: '1.5em', cursor: 'pointer', color: 'white' }}
                    />
                </Tooltip>
            </Badge>
        </Popover>
    );
};
