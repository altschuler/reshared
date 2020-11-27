import { useGroupDetailsQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { Alert, Spin } from 'antd';
import { GroupLayout } from './GroupLayout';
import { useMembership } from '../../utils/group';

export const GroupHomePage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, loading, error } = useGroupDetailsQuery({ variables: { id: id as string } });

    const group = data?.groups_by_pk;
    const {isAdmin} = useMembership(group);

    if (loading) {
        return <Spin />;
    }

    if (error || !group) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    return (
        <GroupLayout activePage="home" group={group}>
            {isAdmin && <span>Invite others to join your group.</span>}
        </GroupLayout>
    );
};
