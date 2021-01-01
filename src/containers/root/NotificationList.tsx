import React, { useCallback, useMemo, useState } from 'react';
import {
    NotificationCardFragment,
    useMarkAllNotificationsReadMutation,
    useMarkNotificationReadMutation,
    useNotificationsSubscription,
    UserDetailFragment,
} from '../../generated/graphql';
import { Badge, Button, List, message, Modal, Popover, Tooltip, Typography } from 'antd';
import { DateDisplay, UserAvatar } from '../../components/display';
import { CheckOutlined, NotificationOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { useAuth } from '../../utils/auth';
import { useRouter } from 'next/router';
import { urlFor } from '../../utils/urls';
import { activityMessage } from '../../utils/activity';

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
                variables: { id: notification.id, readAt: new Date() },
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
                                {activityMessage(notification.activity, auth.user)}
                            </Typography.Link>
                        }
                        description={<DateDisplay mode="datetime" utc={activity.created_at} />}
                    />
                </List.Item>
            );
        },
        [handleClick, handleMarkRead],
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

// Header button
export interface NotificationsButtonProps {
    user: UserDetailFragment;
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
        variables: { userId: user.id, readAt: new Date() },
    });

    const notifications = useMemo(() => data?.notifications || [], [data?.notifications]);

    const hasNew = useMemo(() => notifications.some((n) => !n.read_at), [notifications]);

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
            visible={open}
            onVisibleChange={(isOpen) => setOpen(isOpen)}
            content={menu}
            placement="bottomRight"
            trigger="click"
            overlayClassName={classes.popover}
            title={
                <div className={classes.title}>
                    <Typography.Title level={5}>Activity</Typography.Title>
                    {hasNew && (
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
            <Badge dot={hasNew} overflowCount={9}>
                <Tooltip title="Notifications">
                    <NotificationOutlined style={{ cursor: 'pointer', color: 'white' }} />
                </Tooltip>
            </Badge>
        </Popover>
    );
};
