import { List, Space, Tag, Typography } from 'antd';

import React from 'react';
import { DateDisplay, UserAvatar } from '../../components/display';
import Link from 'next/link';
import {
    Group_Role_Enum,
    GroupCardFragment,
    GroupMemberCardFragment,
} from '../../generated/graphql';

export interface MemberListProps {
    group: GroupCardFragment;
    memberships: GroupMemberCardFragment[];
}

export const MemberList = ({ memberships }: MemberListProps) => {
    return (
        <List
            header={<Typography.Title level={5}>Current Members</Typography.Title>}
            itemLayout="horizontal"
            dataSource={memberships}
            renderItem={(member) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<UserAvatar user={member.user} />}
                        title={
                            <Space>
                                <Link href={`/u/${member.user.id}`}>{member.user.name}</Link>
                                {member.role === Group_Role_Enum.Admin && (
                                    <Tag color="blue">Admin</Tag>
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
