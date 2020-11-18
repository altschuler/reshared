import { Group_Role_Enum, useGroupDetailsQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { Alert, Badge, Spin, Typography } from 'antd';

export const GroupDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, loading, error } = useGroupDetailsQuery({ variables: { id: id as string } });

    if (loading) {
        return <Spin />;
    }

    if (error || (!loading && !data?.groups_by_pk)) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    const group = data!.groups_by_pk!;

    return (
        <div>
            <Typography.Title level={3}>{group.name}</Typography.Title>

            <ul>
                {group?.memberships.map((m) => (
                    <li>
                        {m.user.name} {m.role === Group_Role_Enum.Admin && <Badge count="admin" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupDetailsPage;
