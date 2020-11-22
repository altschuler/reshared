import { useGroupDetailsQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { Alert, List, Space, Spin, Tag } from 'antd';
import { GroupLayout } from './GroupLayout';
import { useMemo } from 'react';
import { useAuth } from '../../utils/auth';
import { isAdmin } from '../../utils/group';

export const GroupHomePage = () => {
    const router = useRouter();
    const auth = useAuth();
    const { id } = router.query;

    const { data, loading, error } = useGroupDetailsQuery({ variables: { id: id as string } });

    const group = data?.groups_by_pk;
    const admin = useMemo(() => isAdmin(group, auth.user), [auth.user, group]);

    if (loading) {
        return <Spin />;
    }

    if (error || (!loading && !data?.groups_by_pk)) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    return (
        <GroupLayout activePage="home" group={group!}>
            This is an empty page for the group
        </GroupLayout>
    );
};
