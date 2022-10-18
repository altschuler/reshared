import { Alert, Card, Col, Input, Radio, Row, Skeleton, Space, Spin } from 'antd';
import { compact, head } from 'lodash-es';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PostDisplay } from '../../components/display';
import {
    Group_Post_Type_Enum,
    Order_By,
    useGroupDetailsQuery,
    useGroupPostListQuery,
} from '../../generated/graphql';
import { useDebounce } from '../../utils/hooks';
import { GroupLayout } from './GroupLayout';

export const GroupRequestsPage = () => {
    const router = useRouter();

    const [search, setSearch] = useState('');
    // Show resolved, unresolved or all
    const [status, setStatus] = useState<'open' | 'resolved' | 'all'>('open');
    const debouncedSearch = useDebounce(search, 500);
    const { id: shortId } = router.query as { id: string };

    const { data, loading, error } = useGroupDetailsQuery({
        variables: { shortId: shortId as string },
    });
    const group = head(data?.groups);

    const postsQuery = useGroupPostListQuery({
        variables: {
            limit: 10,
            offset: 0,
            orderBy: [{ created_at: Order_By.Desc }],
            where: {
                group: { short_id: { _eq: shortId } },
                type: { _eq: Group_Post_Type_Enum.Request },
                _and: compact([
                    search && {
                        _or: [
                            { content: { _ilike: `%${debouncedSearch}%` } },
                            { author: { displayName: { _ilike: `%${debouncedSearch}%` } } },
                        ],
                    },
                    status === 'open' && { resolved: { _eq: false } },
                    status === 'resolved' && { resolved: { _eq: true } },
                ]),
            },
        },
    });

    const posts = postsQuery.data?.group_posts || [];

    if (error || (!loading && !group)) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    if (!group) {
        return <Spin />;
    }

    if (loading) {
        return (
            <GroupLayout activePage="requests" group={group}>
                {[1, 2, 3].map((i) => (
                    <Card key={i} style={{ width: 500, marginTop: 16 }}>
                        <Skeleton loading={loading} avatar={{ size: 'small' }} active></Skeleton>
                    </Card>
                ))}
            </GroupLayout>
        );
    }
    return (
        <GroupLayout activePage="requests" group={group}>
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                <Row align="middle" gutter={16}>
                    <Col flex={1}>
                        <Input.Search
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Filter"
                        />
                    </Col>
                    <Col>
                        <Space>
                            <span>Status:</span>
                            <Radio.Group
                                optionType="button"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <Radio value="open">Open</Radio>
                                <Radio value="resolved">Resolved</Radio>
                                <Radio value="all">All</Radio>
                            </Radio.Group>
                        </Space>
                    </Col>
                </Row>

                <Spin spinning={postsQuery.loading}>
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        {posts.map((post) => (
                            <PostDisplay key={post.id} post={post} link />
                        ))}
                    </Space>
                </Spin>
            </Space>
        </GroupLayout>
    );
};
