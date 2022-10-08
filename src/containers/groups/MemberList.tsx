import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, List, Menu, Modal, Space, Tag, Typography } from 'antd';
import { compact } from 'lodash-es';
import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { DateDisplay, UserAvatar } from '../../components/display';
import {
    GroupCardFragment,
    GroupMemberCardFragment,
    Group_Role_Enum,
    useChangeMemberRoleMutation,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { usePagination } from '../../utils/list';

export interface MemberListProps {
    group: GroupCardFragment;
    memberships: GroupMemberCardFragment[];
}

export const MemberList = ({ memberships, group }: MemberListProps) => {
    // TODO: do actual pagination
    const { isOwner, user: me } = useMembership(group);
    const [changeRole] = useChangeMemberRoleMutation();

    const pgn = usePagination();
    useEffect(() => {
        pgn.setTotal(memberships.length);
    }, [memberships.length, pgn]);

    const handleChangeRole = useCallback(
        (member: GroupMemberCardFragment, role: Group_Role_Enum) => {
            const revokingAdmin =
                member.role === Group_Role_Enum.Admin && role === Group_Role_Enum.User;
            const title = revokingAdmin
                ? `Revoke ${member.user.displayName}'s admin role?`
                : `Make ${member.user.displayName} an administrator?`;
            const message = revokingAdmin
                ? `${member.user.displayName} will no longer be able to handle requests to join the group and remove members.`
                : `Administrators can handle requests to join the group and remove members. Do you want to make ${member.user.displayName} an administrator?`;

            Modal.confirm({
                title,
                content: <Typography.Paragraph>{message}</Typography.Paragraph>,
                onOk: () => {
                    changeRole({ variables: { memberId: member.id, role } });
                },
                okButtonProps: {
                    ...({ ['data-cy']: 'change-role-modal:confirm:btn' } as any),
                },
            });
        },
        [changeRole],
    );

    return (
        <List
            data-cy="member-list"
            header={<Typography.Title level={5}>Current Members</Typography.Title>}
            pagination={pgn.config}
            itemLayout="horizontal"
            dataSource={memberships}
            renderItem={(member) => (
                <List.Item
                    data-cy="member-list:item"
                    actions={
                        isOwner && member.user.id !== me?.id
                            ? [
                                  <Dropdown
                                      key="more"
                                      trigger={['click']}
                                      overlay={
                                          <Menu
                                              items={compact([
                                                  member.role === Group_Role_Enum.User && {
                                                      ['data-cy']: 'dropdown:make-admin:btn',
                                                      key: 'make-admin',
                                                      label: 'Make admin',
                                                      onClick: () =>
                                                          handleChangeRole(
                                                              member,
                                                              Group_Role_Enum.Admin,
                                                          ),
                                                  },
                                                  member.role === Group_Role_Enum.Admin && {
                                                      ['data-cy']: 'dropdown:revoke-admin:btn',
                                                      key: 'make-user',
                                                      label: 'Revoke admin role',
                                                      onClick: () =>
                                                          handleChangeRole(
                                                              member,
                                                              Group_Role_Enum.User,
                                                          ),
                                                  },
                                              ])}
                                          />
                                      }>
                                      <Button
                                          size="small"
                                          data-cy="member-list:item:more:btn"
                                          icon={<EllipsisOutlined />}
                                      />
                                  </Dropdown>,
                              ]
                            : []
                    }>
                    <List.Item.Meta
                        avatar={<UserAvatar user={member.user} />}
                        title={
                            <Space data-cy="member-list:item:role:txt">
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
