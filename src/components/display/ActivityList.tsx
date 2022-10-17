import React, { useCallback } from 'react';
import { ActivityCardFragment, UserCardFragment } from '../../generated/graphql';
import { List, Typography } from 'antd';
import { urlFor } from '../../utils/urls';
import { UserAvatar } from './UserAvatar';
import { DateDisplay } from './DateDisplay';
import { activityMessage } from '../../utils/activity';
import { useAuth } from '../../utils/auth';

export interface ActivityListProps {
    loading: boolean;
    activities: ActivityCardFragment[];
}

const renderNotification = (
    activity: ActivityCardFragment,
    currentUser: UserCardFragment | null,
) => (
    <List.Item>
        <List.Item.Meta
            avatar={activity.actor && <UserAvatar user={activity.actor} />}
            title={
                <Typography.Link href={urlFor.activity(activity)}>
                    {activityMessage(activity, currentUser)}
                </Typography.Link>
            }
            description={<DateDisplay mode="distance" utc={activity.created_at} />}
        />
    </List.Item>
);

export const ActivityList = ({ activities, loading }: ActivityListProps) => {
    const auth = useAuth();
    const render = useCallback(
        (activity: ActivityCardFragment) => renderNotification(activity, auth.user),
        [auth.user],
    );
    return (
        <List
            locale={{ emptyText: 'No activity' }}
            loading={loading}
            itemLayout="horizontal"
            dataSource={activities}
            renderItem={render}
        />
    );
};
