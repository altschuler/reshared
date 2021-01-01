import { Things_Bool_Exp, useGroupDetailsQuery } from '../../generated/graphql';
import { head } from 'lodash';
import { useRouter } from 'next/router';
import { Alert, Spin } from 'antd';
import { GroupLayout } from './GroupLayout';
import { createUseStyles } from 'react-jss';
import { ThingList } from '../../components/ThingList';
import { useMemo } from 'react';

const useStyles = createUseStyles({});

export const GroupThingsPage = () => {
    const router = useRouter();

    const classes = useStyles();
    const { id } = router.query;

    const { data, loading, error } = useGroupDetailsQuery({ variables: { shortId: id as string } });

    const group = head(data?.groups);

    const where = useMemo(
        (): Things_Bool_Exp => ({
            group_relations: {
                group_id: { _eq: group?.id },
            },
        }),
        [group?.id],
    );

    if (loading) {
        return <Spin />;
    }

    if (!group || error || (!loading && !group)) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    return (
        <GroupLayout activePage="things" group={group}>
            <ThingList where={where} />
        </GroupLayout>
    );
};
