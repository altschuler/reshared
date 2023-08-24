import { List, Space, Typography } from 'antd';

import React, { ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { Users_Bool_Exp, Users_Order_By, useUserListQuery } from '../generated/graphql';
import { usePagination } from '../utils/list';
import { UserAvatar } from './display';
import { urlFor } from '../utils/urls';

export interface UserListProps {
    where: Users_Bool_Exp;
    orderBy?: Users_Order_By[];
    emptyText?: ReactNode;
}

export const UserList = (props: UserListProps) => {
    // TODO: do actual pagination
    const pgn = usePagination();

    const { data, previousData, loading, error } = useUserListQuery({
        variables: {
            limit: pgn.limit,
            offset: pgn.offset,
            where: props.where,
        },
    });

    const results = data || previousData;
    const users = results?.users || [];
    const total = results?.usersAggregate.aggregate?.count || 0;
    useEffect(() => pgn.setTotal(total), [pgn, total]);

    // TODO: show things shared, groups, chat button
    return (
        <List
            pagination={pgn.config}
            itemLayout="horizontal"
            dataSource={users}
            locale={props.emptyText ? { emptyText: props.emptyText } : undefined}
            renderItem={(user) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<UserAvatar user={user} />}
                        title={
                            <Space>
                                <Link href={urlFor.user.profile(user)} legacyBehavior>{user.displayName}</Link>
                            </Space>
                        }
                    />
                </List.Item>
            )}
        />
    );
};
