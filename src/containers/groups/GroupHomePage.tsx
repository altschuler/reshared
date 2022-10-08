import { Alert, Col, Row, Spin, Typography } from 'antd';
import { isEmpty } from 'lodash-es';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { ActivityFeed } from '../../components/display';
import { ThingList } from '../../components/ThingList';
import {
    Things_Bool_Exp,
    useGroupActivityQuery,
    useGroupDetailsQuery,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { useMedia } from '../../utils/hooks';
import { GroupEmptyContent } from './GroupEmptyContent';
import { GroupLayout } from './GroupLayout';

const useStyles = createUseStyles({});

export const GroupHomePage = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id: shortId } = router.query as { id: string };

    const collapsed = useMedia(['(max-width: 800px)'], [true], false);
    const { data, loading, error } = useGroupDetailsQuery({
        variables: { shortId: shortId as string },
    });

    const group = useMemo(() => data?.groups?.[0], [data?.groups]);

    const { isMember } = useMembership(group);

    const query = useGroupActivityQuery({ variables: { shortId, limit: 100, offset: 0 } });
    const activities = query.data?.groups?.[0].activities || [];

    const where = useMemo(
        (): Things_Bool_Exp => ({
            enabled: { _eq: true },
            group_relations: { group: { short_id: { _eq: shortId } } },
            _or: [{ expiry: { _gt: 'now()' } }, { expiry: { _is_null: true } }],
        }),
        [shortId],
    );

    if (loading) {
        return <Spin />;
    }

    if (error || !group) {
        return <Alert message={error?.message} />;
    }

    const showEmpty = isMember && !isEmpty(group.thing_relations_aggregate.aggregate?.count);

    if (showEmpty) {
        return (
            <GroupLayout activePage="home" group={group}>
                <GroupEmptyContent group={group} />
            </GroupLayout>
        );
    }

    return (
        <GroupLayout activePage="home" group={group}>
            <Row gutter={[16, 16]}>
                {!collapsed && (
                    <Col flex="200px">
                        <Typography.Title level={5}>Latest activity</Typography.Title>
                        <ActivityFeed loading={query.loading} activities={activities} />
                    </Col>
                )}
                <Col flex="auto">
                    <Typography.Title level={5}>Find something</Typography.Title>
                    <div>
                        <ThingList where={where} />
                    </div>
                </Col>
            </Row>
        </GroupLayout>
    );
};
