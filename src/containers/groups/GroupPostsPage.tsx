import { Alert, Card, Skeleton, Space, Spin } from 'antd';
import { head } from 'lodash-es';
import { useRouter } from 'next/router';
import { PostDisplay } from '../../components/display';
import { Order_By, useGroupDetailsQuery, useGroupPostListQuery } from '../../generated/graphql';
import { GroupLayout } from './GroupLayout';

export const GroupPostsPage = () => {
    const router = useRouter();

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
            where: { group: { short_id: { _eq: shortId } } },
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
            <GroupLayout activePage="posts" group={group}>
                {[1, 2, 3].map((i) => (
                    <Card key={i} style={{ width: 500, marginTop: 16 }}>
                        <Skeleton loading={loading} avatar={{ size: 'small' }} active></Skeleton>
                    </Card>
                ))}
            </GroupLayout>
        );
    }
    return (
        <GroupLayout activePage="posts" group={group}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {posts.map((post) => (
                    <PostDisplay key={post.id} post={post} link />
                ))}
            </Space>
        </GroupLayout>
    );
};
