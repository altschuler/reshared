import React, { useCallback, useMemo, useState } from 'react';
import {
    Activity_Verb_Enum,
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

// List
export interface NotificationListProps {
    loading: boolean;
    notifications: NotificationCardFragment[];
    onSelect: () => unknown;
}

export const NotificationList = ({ notifications, loading, onSelect }: NotificationListProps) => {
    const router = useRouter();
    const [markRead] = useMarkNotificationReadMutation();

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

    const renderNotificationMessage = useCallback((notification: NotificationCardFragment) => {
        const aty = notification.activity;
        const ent = aty.entity;
        const sndEnt = aty.secondary_entity;
        const actor = aty.actor?.name || '[Deleted user]';

        if (ent.thing) {
            if (aty.verb === Activity_Verb_Enum.Added) {
                return `${actor} added ${ent.thing.name} to ${sndEnt?.group?.name}`;
            }

            return `${actor} ${aty.verb} thing`;
        }

        if (ent.group) {
            if (aty.verb === Activity_Verb_Enum.Updated) {
                return `${actor} updated the group ${ent.group.name}`;
            }

            if (aty.verb === Activity_Verb_Enum.Joined) {
                return `${actor} joined the group ${ent.group.name}`;
            }

            return `${actor} ${aty.verb} group`;
        }

        if (ent.group_join_request) {
            if (aty.verb === Activity_Verb_Enum.Accepted) {
                return `${actor} accepted your request to join ${sndEnt?.group?.name}`;
            }

            if (aty.verb === Activity_Verb_Enum.Rejected) {
                const res = ent.group_join_request.response;
                return `${actor} rejected your request to join ${sndEnt?.group?.name}${
                    res ? `. Reason: ${res}` : ''
                }`;
            }

            if (aty.verb === Activity_Verb_Enum.Added) {
                return `${actor} has requested to join ${sndEnt?.group?.name}`;
            }

            // Fallback
            return `${actor} ${aty.verb} group join request`;
        }

        if (ent.user) {
            return `${actor} ${aty.verb} user`;
        }

        // TODO: log sentry
        return `Unknown activity, this is a bug in the application!`;
    }, []);

    const handleClick = useCallback(
        (notification: NotificationCardFragment) => {
            const ent = notification.activity.entity;
            const sndEnt = notification.activity.secondary_entity;
            const verb = notification.activity.verb;

            // Mark the notification as read
            handleMarkRead(notification);

            // Navigate to the related entity
            if (ent.thing && sndEnt?.group) {
                // TODO: link to thing page
                router.push(urlFor.group.home(sndEnt?.group));
            } else if (ent.group) {
                router.push(urlFor.group.home(ent.group));
            } else if (ent.group_join_request && sndEnt?.group) {
                // For admins
                if (verb === Activity_Verb_Enum.Added) {
                    router.push(urlFor.group.members(sndEnt.group));
                }
                // For requester
                else {
                    router.push(urlFor.group.home(sndEnt.group));
                }
            } else if (ent.user) {
                // user
            }

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
                                {renderNotificationMessage(notification)}
                            </Typography.Link>
                        }
                        description={<DateDisplay mode="datetime" utc={activity.created_at} />}
                    />
                </List.Item>
            );
        },
        [handleClick, handleMarkRead, renderNotificationMessage],
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
                <NotificationOutlined style={{ cursor: 'pointer', color: 'white' }} />
            </Badge>
        </Popover>
    );
};
