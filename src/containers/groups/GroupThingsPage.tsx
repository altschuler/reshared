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
    const { id: shortId } = router.query as { id: string };

    const { data, loading, error } = useGroupDetailsQuery({
        variables: { shortId: shortId as string },
    });

    const group = head(data?.groups);

    const where = useMemo(
        (): Things_Bool_Exp => ({
            group_relations: {
                group: { short_id: { _eq: shortId } },
            },
            enabled: { _eq: true },
            _or: [{ expiry: { _gt: 'now()' } }, { expiry: { _is_null: true } }],
        }),
        [shortId],
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
