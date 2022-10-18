import { Space, Spin, Typography } from 'antd';
import { isEmpty } from 'lodash-es';
import { ReactNode } from 'react';
import { Group_Posts_Bool_Exp, Order_By, useGroupPostListQuery } from '../../generated/graphql';
import { PostDisplay } from './PostDisplay';

export interface PostListProps {
    where: Group_Posts_Bool_Exp;
    hideEmpty?: boolean;
    emptyText: ReactNode;
    footer?: ReactNode;
}

export const PostList = (props: PostListProps) => {
    const postsQuery = useGroupPostListQuery({
        variables: {
            limit: 10,
            offset: 0,
            orderBy: [{ created_at: Order_By.Desc }],
            where: props.where,
        },
    });

    const posts = postsQuery.data?.group_posts || [];

    if (isEmpty(posts) && props.hideEmpty) {
        return null;
    }

    return (
        <Spin spinning={postsQuery.loading}>
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                {posts.map((post) => (
                    <PostDisplay key={post.id} post={post} link />
                ))}

                {isEmpty(posts) && props.emptyText}
            </Space>
            {props.footer}
        </Spin>
    );
};
