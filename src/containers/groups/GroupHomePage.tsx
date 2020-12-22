import { Alert } from 'antd';
import { GroupLayout } from './GroupLayout';
import { GroupDetailsFragment, ThingCardFragment, Things_Bool_Exp } from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { ThingList } from '../../components/ThingList';
import { useCallback, useMemo } from 'react';

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

    const where = useMemo(
        () =>
            ({
                group_relations: { group_id: { _eq: group?.id } },
                enabled: { _eq: true },
                _or: [{ expiry: { _gt: 'now()' } }, { expiry: { _is_null: true } }],
            } as Things_Bool_Exp),
        [group?.id],
    );

    if (error) {
        return <Alert message={error} />;
    }

    return (
        <GroupLayout activePage="home" group={group}>
            {isAdmin && (
                <span onClick={() => (null as any).boom()}>Invite others to join your group.</span>
            )}

            <hr />

            <ThingList where={where} />
        </GroupLayout>
    );
};
