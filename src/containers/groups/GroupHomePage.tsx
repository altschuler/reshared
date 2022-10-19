import { Alert, Button, Col, Divider, Row, Space, Spin, Typography } from 'antd';
import { isEmpty } from 'lodash-es';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CreatePostDrawer, useDialogs } from '../../components/dialogs';
import { ActivityFeed, PostList } from '../../components/display';
import {
    Group_Posts_Bool_Exp,
    Group_Post_Type_Enum,
    useGroupActivityQuery,
    useGroupDetailsQuery,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { useMedia } from '../../utils/hooks';
import { urlFor } from '../../utils/urls';
import { GroupEmptyContent } from './GroupEmptyContent';
import { GroupLayout } from './GroupLayout';

const useStyles = createUseStyles({});

export const GroupHomePage = () => {
    const classes = useStyles();
    const router = useRouter();
    const dialogs = useDialogs();
    const { id: shortId } = router.query as { id: string };

    const collapsed = useMedia(['(max-width: 800px)'], [true], false);
    const { data, loading, error } = useGroupDetailsQuery({
        variables: { shortId: shortId as string },
    });

    const group = useMemo(() => data?.groups?.[0], [data?.groups]);

    const { isMember } = useMembership(group);

    const query = useGroupActivityQuery({ variables: { shortId, limit: 100, offset: 0 } });
    const activities = query.data?.groups?.[0].activities || [];

    const handlePost = useCallback(() => {
        dialogs
            .showDialog(CreatePostDrawer, { group, type: Group_Post_Type_Enum.Message })
            .then(
                (post) =>
                    post &&
                    router.push(
                        post.type === Group_Post_Type_Enum.Message
                            ? urlFor.group.home(group!)
                            : urlFor.group.requests(group!),
                    ),
            );
    }, [dialogs, group, router]);

    const where = useMemo(
        (): Group_Posts_Bool_Exp => ({
            group: { short_id: { _eq: shortId } },
            pinned: { _eq: false },
            type: { _eq: Group_Post_Type_Enum.Message },
        }),
        [shortId],
    );

    const wherePinned = useMemo(
        (): Group_Posts_Bool_Exp => ({
            group: { short_id: { _eq: shortId } },
            pinned: { _eq: true },
            type: { _eq: Group_Post_Type_Enum.Message },
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
            <Row gutter={[16, 16]} wrap={false}>
                {!collapsed && (
                    <Col flex="300px">
                        <Typography.Title level={5}>Latest activity</Typography.Title>
                        <ActivityFeed loading={query.loading} activities={activities} />
                    </Col>
                )}
                <Col flex="auto">
                    <PostList
                        where={wherePinned}
                        hideEmpty
                        footer={<Divider type="horizontal" />}
                    />
                    <PostList
                        where={where}
                        emptyText={
                            <Space direction="vertical" align="center" style={{ width: '100%' }}>
                                <Typography.Text>There are no messages yet</Typography.Text>
                                <Button onClick={handlePost}>Write a post</Button>
                            </Space>
                        }
                    />
                </Col>
            </Row>
        </GroupLayout>
    );
};
