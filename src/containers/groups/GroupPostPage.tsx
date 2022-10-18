import { Alert, Card, Skeleton, Space, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { PostDisplay } from '../../components/display';
import { Group_Post_Type_Enum, useGroupPostSingleQuery } from '../../generated/graphql';
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
            <GroupLayout activePage="requests" group={post.group}>
                <Card>
                    <Skeleton loading avatar={{ size: 'small' }} active></Skeleton>
                </Card>
            </GroupLayout>
        );
    }
    return (
        <GroupLayout activePage="requests" group={post.group}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {post.type === Group_Post_Type_Enum.Request ? (
                    <Link href={urlFor.group.requests(post.group)} passHref>
                        <a>
                            <Space>
                                <ArrowLeftOutlined />
                                All requests
                            </Space>
                        </a>
                    </Link>
                ) : (
                    <Link href={urlFor.group.home(post.group)} passHref>
                        <a>
                            <Space>
                                <ArrowLeftOutlined />
                                Group home
                            </Space>
                        </a>
                    </Link>
                )}

                <PostDisplay key={post.id} post={post} />
            </Space>
        </GroupLayout>
    );
};
