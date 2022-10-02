import { List, Space, Tag, Typography } from 'antd';

import React, { useEffect } from 'react';
import { DateDisplay, UserAvatar } from '../../components/display';
import Link from 'next/link';
import {
    Group_Role_Enum,
    GroupCardFragment,
    GroupMemberCardFragment,
} from '../../generated/graphql';
import { usePagination } from '../../utils/list';

export interface MemberListProps {
    group: GroupCardFragment;
    memberships: GroupMemberCardFragment[];
}

export const MemberList = ({ memberships }: MemberListProps) => {
    // TODO: do actual pagination
    const pgn = usePagination();
    useEffect(() => {
        pgn.setTotal(memberships.length);
    }, [memberships.length, pgn]);

    return (
        <List
            data-cy="member-list"
            header={<Typography.Title level={5}>Current Members</Typography.Title>}
            pagination={pgn.config}
            itemLayout="horizontal"
            dataSource={memberships}
            renderItem={(member) => (
                <List.Item data-cy="member-list:item">
                    <List.Item.Meta
                        avatar={<UserAvatar user={member.user} />}
                        title={
                            <Space>
                                <Link href={`/u/${member.user.id}`}>{member.user.displayName}</Link>
                                {member.role === Group_Role_Enum.Admin && (
                                    <Tag color="blue">Admin</Tag>
                                )}
                                {member.role === Group_Role_Enum.Owner && (
                                    <Tag color="blue">Owner</Tag>
                                )}
                            </Space>
                        }
                        description={
                            <span>
                                Member since <DateDisplay utc={member.created_at} />
                            </span>
                        }
                    />
                </List.Item>
            )}
        />
    );
};
