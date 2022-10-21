import { List } from 'antd';
import { DetailedActivityFragment } from '../../../generated/graphql';
import { GroupMemberEntry } from './GroupMemberEntry';
import { GroupPostEntry } from './GroupPostEntry';
import { ThingEntry } from './ThingEntry';

export interface ActivityFeedProps {
    loading?: boolean;
    activities: DetailedActivityFragment[];
}

const renderActivity = (activity: DetailedActivityFragment) => {
    // Post

    const post = activity.entity.group_post;
    if (post) {
        return <GroupPostEntry activity={activity} post={post} />;
    }

    const groupThing = activity.entity.group_thing;
    if (groupThing) {
        return <ThingEntry activity={activity} thing={groupThing.thing} />;
    }

    const groupMember = activity.entity.group_member;
    if (groupMember) {
        return <GroupMemberEntry activity={activity} member={groupMember} />;
    }

    return null;
};

export const ActivityFeed = ({ activities, loading }: ActivityFeedProps) => {
    return (
        <List
            size="small"
            itemLayout="vertical"
            locale={{ emptyText: 'No activity' }}
            loading={loading}
            dataSource={activities}
            renderItem={renderActivity}
        />
    );
};
