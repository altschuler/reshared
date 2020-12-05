import React, { useCallback, useMemo } from 'react';
import {
    NotificationCardFragment,
    useMarkAllNotificationsReadMutation,
    useMarkNotificationReadMutation,
    useNotificationsSubscription,
    UserDetailFragment,
} from '../../generated/graphql';
import { Badge, Button, List, message, Modal, Popover, Tooltip, Typography } from 'antd';
import { DateDisplay, UserAvatar } from '../../components/display';
import { NotificationOutlined, CheckOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { formatISO } from 'date-fns';
import { useAuth } from '../../utils/auth';

// List
export interface NotificationListProps {
    loading: boolean;
    notifications: NotificationCardFragment[];
}

export const NotificationList = ({ notifications, loading }: NotificationListProps) => {
    const [markRead] = useMarkNotificationReadMutation();

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

    const renderNotification = useCallback(
        (notification: NotificationCardFragment) => {
            const activity = notification.activity;

            const msg = `${activity.actor?.name || '[Deleted user]'} ${activity.verb} ${
                activity.entity.thing?.name
            }`;

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
                        avatar={<UserAvatar user={activity.actor} />}
                        title={msg}
                        description={<DateDisplay mode="datetime" utc={activity.created_at} />}
                    />
                </List.Item>
            );
        },
        [handleMarkRead],
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

    const { data, loading } = useNotificationsSubscription({
        variables: { userId: user.id },
    });

    const [markAllRead, markAllMutation] = useMarkAllNotificationsReadMutation({
        variables: { userId: user.id, readAt: formatISO(new Date()) },
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

    const menu = useMemo(
        () => (
            <div className={classes.list}>
                <NotificationList notifications={notifications} loading={loading} />
            </div>
        ),
        [classes.list, loading, notifications],
    );

    return (
        <Popover
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
                <NotificationOutlined style={{ cursor: 'pointer' }} />
            </Badge>
        </Popover>
    );
};
