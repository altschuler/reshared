import { GroupMemberWithGroupCardFragment } from '../../../generated/graphql';
import { BaseEntry } from './BaseEntry';
import { useMemo } from 'react';

export interface GroupMemberEntryProps {
    member: GroupMemberWithGroupCardFragment;
}

export const GroupMemberEntry = ({ member }: GroupMemberEntryProps) => {
    const title = useMemo(() => `joined ${member.group.name}`, [member.group.name]);
    return <BaseEntry actor={member.user} title={title} date={member.created_at} />;
};
