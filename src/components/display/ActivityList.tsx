import React from 'react';
import { ActivityCardFragment } from '../../generated/graphql';
import { List, Typography } from 'antd';
import { urlFor } from '../../utils/urls';
import { UserAvatar } from './UserAvatar';
import { DateDisplay } from './DateDisplay';
import { activityMessage } from '../../utils/activity';

export interface ActivityListProps {
    loading: boolean;
    activities: ActivityCardFragment[];
}

const renderNotification = (activity: ActivityCardFragment) => (
    <List.Item>
        <List.Item.Meta
            avatar={activity.actor && <UserAvatar user={activity.actor} />}
            title={
                <Typography.Link href={urlFor.activity(activity)}>
                    {activityMessage(activity)}
                </Typography.Link>
            }
            description={<DateDisplay mode="datetime" utc={activity.created_at} />}
        />
    </List.Item>
);

export const ActivityList = ({ activities, loading }: ActivityListProps) => (
    <List
        locale={{ emptyText: 'No activity' }}
        loading={loading}
        itemLayout="horizontal"
        dataSource={activities}
        renderItem={renderNotification}
    />
);
