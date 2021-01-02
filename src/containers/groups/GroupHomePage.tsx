import { useMemo } from 'react';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { Alert, Button, Col, Row, Space, Spin, Typography } from 'antd';
import { GroupLayout } from './GroupLayout';
import {
    Group_Posts_Bool_Exp,
    Things_Bool_Exp,
    useGroupDetailsQuery,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { ThingList } from '../../components/ThingList';
import { createUseStyles } from 'react-jss';
import { useRouter } from 'next/router';
import { GroupEmptyContent } from './GroupEmptyContent';
import { GroupPostList } from '../../components/GroupPostList';
import { urlFor } from '../../utils/urls';
import { useMedia } from '../../utils/hooks';

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

    const where = useMemo(
        (): Things_Bool_Exp =>
            ({
                group_relations: { group: { short_id: { _eq: shortId } } },
                // Set these filters so owners dont see them where others wont
                enabled: { _eq: true },
                _or: [{ expiry: { _gt: 'now()' } }, { expiry: { _is_null: true } }],
            } as Things_Bool_Exp),
        [shortId],
    );

    const postWhere = useMemo(
        (): Group_Posts_Bool_Exp => ({
            group_id: { _eq: group?.id },
        }),
        [group?.id],
    );

    const { isMember } = useMembership(group);

    if (loading) {
        return <Spin />;
    }

    if (error || !group) {
        return <Alert message={error} />;
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
                <Col sm={24} md={12}>
                    <GroupPostList where={postWhere} />
                </Col>

                <Col sm={24} md={12}>
                    <ThingList
                        header={
                            <Space>
                                <Typography.Title level={5}>Latest things</Typography.Title>

                                <Link href={urlFor.group.things(group)}>
                                    <Button type="link">View all</Button>
                                </Link>
                            </Space>
                        }
                        hideSearch
                        where={where}
                    />
                </Col>
            </Row>
        </GroupLayout>
    );
};
