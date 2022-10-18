import { useMemo } from 'react';
import {
    DetailedActivityFragment,
    GroupMemberWithGroupCardFragment,
} from '../../../generated/graphql';
import { BaseEntry } from './BaseEntry';

export interface GroupMemberEntryProps {
    member: GroupMemberWithGroupCardFragment;
    activity: DetailedActivityFragment;
}

export const GroupMemberEntry = ({ member, activity }: GroupMemberEntryProps) => {
    const title = useMemo(() => `joined ${member.group.name}`, [member.group.name]);
    return <BaseEntry activity={activity} actor={member.user} title={title} />;
};
