import { DetailedActivityFragment } from '../../../generated/graphql';
import { List } from 'antd';
import { GroupPostEntry } from './GroupPostEntry';
import { ThingEntry } from './ThingEntry';
import { GroupMemberEntry } from './GroupMemberEntry';

export interface ActivityFeedProps {
    loading: boolean;
    activities: DetailedActivityFragment[];
}

const renderActivity = (activity: DetailedActivityFragment) => {
    // Post
    const post = activity.entity.group_post;
    if (post) {
        return <GroupPostEntry post={post} />;
    }
    const groupThing = activity.entity.group_thing;
    if (groupThing) {
        return <ThingEntry activity={activity} thing={groupThing.thing} />;
    }

    const groupMember = activity.entity.group_member;
    if (groupMember) {
        return <GroupMemberEntry member={groupMember} />;
    }

    return null;
};

export const ActivityFeed = ({ activities, loading }: ActivityFeedProps) => {
    return (
        <List
            locale={{ emptyText: 'No activity' }}
            loading={loading}
            dataSource={activities}
            renderItem={renderActivity}
        />
    );
};
