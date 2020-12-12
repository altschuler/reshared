import { Alert } from 'antd';
import { GroupLayout } from './GroupLayout';
import { GroupDetailsFragment, ThingCardFragment } from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { ThingList } from '../../components/ThingList';
import { useCallback } from 'react';

export interface GroupHomePageProps {
    group: GroupDetailsFragment;
    error?: string;
}

export const GroupHomePage = ({ group, error }: GroupHomePageProps) => {
    const { isAdmin } = useMembership(group);

    const makeUrl = useCallback(
        (thing: ThingCardFragment) => `/groups/${group.id}/things/${thing.id}`,
        [group.id],
    );

    if (error || !group) {
        return <Alert message={error} />;
    }

    return (
        <GroupLayout activePage="home" group={group}>
            {isAdmin && <span>Invite others to join your group.</span>}

            <hr />

            <ThingList
                makeUrl={makeUrl}
                where={{ group_relations: { group_id: { _eq: group?.id } } }}
            />
        </GroupLayout>
    );
};
