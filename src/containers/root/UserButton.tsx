import { UserDetailFragment } from '../../generated/graphql';
import { Dropdown, Menu } from 'antd';
import Link from 'next/link';
import { urlFor } from '../../utils/urls';
import { UserAvatar } from '../../components/display';
import React from 'react';
import { useAuth } from '../../utils/auth';

export interface UserButtonProps {
    user: UserDetailFragment;
}

export const UserButton = ({ user }: UserButtonProps) => {
    const auth = useAuth();
    const menu = (
        <Menu>
            <Menu.ItemGroup
                title={
                    <span>
                        Signed in as <strong>{auth.user?.displayName}</strong>
                    </span>
                }
            />
            <Menu.Item key="my-things">
                <Link href={urlFor.user.things()}>My things</Link>
            </Menu.Item>
            <Menu.Item key="settings">
                <Link href={urlFor.user.settings()}>Account settings</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">
                <a onClick={auth.logout}>Logout</a>
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
