﻿import { useMemo } from 'react';
import { isEmpty, head } from 'lodash';
import { Alert, Col, Row, Space, Spin } from 'antd';
import { GroupLayout } from './GroupLayout';
import {
    Things_Bool_Exp,
    useGroupActivityQuery,
    useGroupDetailsQuery,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { createUseStyles } from 'react-jss';
import { useRouter } from 'next/router';
import { GroupEmptyContent } from './GroupEmptyContent';
import { useMedia } from '../../utils/hooks';
import { ActivityFeed, UserAvatarList } from '../../components/display';

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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ActivityFeed loading={query.loading} activities={activities} />
            </div>
            {/* <Row gutter={[16, 16]}>
                <Col sm={24} md={12}></Col>
                <Col sm={24} md={12}>
                    <UserAvatarList size="default" users={group.memberships.map((m) => m.user)} />
                    {group.memberships_aggregate.aggregate?.count} members. Invite someone.
                    <br />
                    {group.thing_relations_aggregate.aggregate?.count} things shared. Add something.
                </Col>
            </Row> */}
        </GroupLayout>
    );
};
