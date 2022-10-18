import { useMemo } from 'react';
import {
    Activity_Verb_Enum,
    DetailedActivityFragment,
    GroupPostFragment,
    Group_Post_Type_Enum,
} from '../../../generated/graphql';
import { BaseEntry } from './BaseEntry';

export interface GroupPostEntryProps {
    post: GroupPostFragment;
    activity: DetailedActivityFragment;
}

export const GroupPostEntry = ({ post, activity }: GroupPostEntryProps) => {
    const title = useMemo(() => {
        const isMessage = post.type === Group_Post_Type_Enum.Message;
        if (isMessage) {
            return 'posted a message';
        }

        if (activity.verb === Activity_Verb_Enum.Resolved) {
            return `resolved a request for ${post.keyword || 'something'}`;
        }

        return `is looking for ${post.keyword || 'something'}`;
    }, [post.type]);

    return <BaseEntry activity={activity} actor={post.author} title={title} />;
};
