import { Alert, Card, Skeleton, Space, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { PostDisplay } from '../../components/display';
import { useGroupPostSingleQuery } from '../../generated/graphql';
import { urlFor } from '../../utils/urls';
import { GroupLayout } from './GroupLayout';
import Link from 'next/link';

export interface GroupPostPageProps {}

export const GroupPostPage = () => {
    const router = useRouter();

    const { postId } = router.query as { id: string; postId: string };

    const { data, loading, error } = useGroupPostSingleQuery({
        variables: { id: postId },
    });

    const post = data?.group_posts_by_pk;

    if (error || (!loading && !post)) {
        return <Alert message={error?.message || 'Post not found'} />;
    }

    if (!post) {
        return <Spin />;
    }

    if (loading) {
        return (
            <GroupLayout activePage="posts" group={post.group}>
                {[1, 2, 3].map((i) => (
                    <Card key={i} style={{ width: 500, marginTop: 16 }}>
                        <Skeleton loading={loading} avatar={{ size: 'small' }} active></Skeleton>
                    </Card>
                ))}
            </GroupLayout>
        );
    }
    return (
        <GroupLayout activePage="posts" group={post.group}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Link href={urlFor.group.posts(post.group)} passHref>
                    <a>
                        <Space>
                            <ArrowLeftOutlined />
                            All posts
                        </Space>
                    </a>
                </Link>

                <PostDisplay key={post.id} post={post} />
            </Space>
        </GroupLayout>
    );
};
