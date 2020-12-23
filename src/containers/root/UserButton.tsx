import { UserDetailFragment } from '../../generated/graphql';
import { Dropdown, Menu } from 'antd';
import Link from 'next/link';
import { urlFor } from '../../utils/urls';
import { signOut } from 'next-auth/client';
import { UserAvatar } from '../../components/display';
import React from 'react';

export interface UserButtonProps {
    user: UserDetailFragment;
}

export const UserButton = ({ user }: UserButtonProps) => {
    const menu = (
        <Menu>
            <Menu.ItemGroup title={`Signed in as ${user.name}`} />
            <Menu.Item>
                <Link href={urlFor.user.things()}>My things</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href={urlFor.user.settings()}>Account settings</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <a onClick={() => signOut()}>Log out</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <UserAvatar style={{ cursor: 'pointer' }} disablePopover user={user} />
            </div>
        </Dropdown>
    );
};
