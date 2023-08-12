import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, List, Menu, message, Modal, Space, Tag, Typography } from 'antd';
import { compact, isEmpty } from 'lodash-es';
import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { DateDisplay, UserAvatar } from '../../components/display';
import {
    GroupCardFragment,
    GroupMemberCardFragment,
    Group_Role_Enum,
    useChangeGroupOwnerMutation,
    useChangeMemberRoleMutation,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { usePagination } from '../../utils/list';
import { urlFor } from '../../utils/urls';

export interface MemberListProps {
    group: GroupCardFragment;
    memberships: GroupMemberCardFragment[];
}

export const MemberList = ({ memberships, group }: MemberListProps) => {
    // TODO: do actual pagination
    const { isOwner, isAdmin, user: me } = useMembership(group);
    const [changeRole] = useChangeMemberRoleMutation();
    const [changeOwner] = useChangeGroupOwnerMutation();

    const pgn = usePagination();
    useEffect(() => {
        pgn.setTotal(memberships.length);
    }, [memberships.length, pgn]);

    const handleChangeOwner = useCallback(
        (member: GroupMemberCardFragment) => {
            Modal.confirm({
                title: 'Transfer ownership ',
                content: (
                    <div>
                        <Typography.Paragraph>
                            There can be only one owner of a group. The owner has the ability to
                            delete the group permanently. Are you sure you want to transfer
                            ownership of <strong>{group.name}</strong> to{' '}
                            <strong>{member.user.displayName}</strong>?
                        </Typography.Paragraph>

                        <Typography.Paragraph>
                            You will become an administrator instead of the owner.
                        </Typography.Paragraph>
                    </div>
                ),
                onOk: () => {
                    changeOwner({ variables: { memberId: member.id } }).then(() =>
                        message.success(`${member.user.displayName} is the new owner`),
                    );
                },
                okButtonProps: {
                    ...({ ['data-cy']: 'change-owner-modal:confirm:btn' } as any),
                },
            });
        },
        [changeOwner, group],
    );

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

    const makeMemberActions = (member: GroupMemberCardFragment) => {
        if (!isAdmin || member.user.id === me?.id) {
            return [];
        }

        return compact([
            member.role === Group_Role_Enum.User && {
                ['data-cy']: 'dropdown:make-admin:btn',
                key: 'make-admin',
                label: 'Make admin',
                onClick: () => handleChangeRole(member, Group_Role_Enum.Admin),
            },
            member.role === Group_Role_Enum.Admin && {
                ['data-cy']: 'dropdown:revoke-admin:btn',
                key: 'make-user',
                label: 'Revoke admin role',
                onClick: () => handleChangeRole(member, Group_Role_Enum.User),
            },

            isOwner &&
                member.role !== Group_Role_Enum.Owner && {
                    ['data-cy']: 'dropdown:make-owner:btn',
                    key: 'make-owner',
                    label: 'Make the owner',
                    onClick: () => handleChangeOwner(member),
                },
        ]);
    };

    return (
        <List
            data-cy="member-list"
            header={<Typography.Title level={5}>Current Members</Typography.Title>}
            pagination={pgn.config}
            itemLayout="horizontal"
            dataSource={memberships}
            renderItem={(member) => {
                const actions = makeMemberActions(member);
                return (
                    <List.Item
                        data-cy="member-list:item"
                        actions={
                            isEmpty(actions)
                                ? []
                                : [
                                      <Dropdown
                                          key="more"
                                          trigger={['click']}
                                          overlay={<Menu items={actions} />}>
                                          <Button
                                              size="small"
                                              data-cy="member-list:item:more:btn"
                                              icon={<EllipsisOutlined />}
                                          />
                                      </Dropdown>,
                                  ]
                        }>
                        <List.Item.Meta
                            avatar={<UserAvatar user={member.user} />}
                            title={
                                <Space data-cy="member-list:item:role:txt">
                                    <Link href={urlFor.user.profile(member.user)} legacyBehavior>
                                        {member.user.displayName}
                                    </Link>
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
                );
            }}
        />
    );
};
