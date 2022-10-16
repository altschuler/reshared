import { useMemo } from 'react';
import { GroupPostFragment, Group_Post_Type_Enum } from '../../../generated/graphql';
import { BaseEntry } from './BaseEntry';

export interface GroupPostEntryProps {
    post: GroupPostFragment;
}

export const GroupPostEntry = ({ post }: GroupPostEntryProps) => {
    const title = useMemo(
        () =>
            post.type === Group_Post_Type_Enum.Message
                ? 'posted a message'
                : 'is looking for something',
        [post.type],
    );

    return (
        <BaseEntry actor={post.author} title={title} date={post.created_at}>
            <p>{post.content}</p>
        </BaseEntry>
    );
};
