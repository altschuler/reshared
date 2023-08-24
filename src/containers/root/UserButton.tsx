import { User } from '@nhost/nextjs';
import { Dropdown, Menu } from 'antd';
import Link from 'next/link';
import { urlFor } from '../../utils/urls';
import { UserAvatar } from '../../components/display';
import React from 'react';
import { useAuth } from '../../utils/auth';
import { MenuProps } from 'rc-menu';

export interface UserButtonProps {
    user: User;
}

export const UserButton = ({ user }: UserButtonProps) => {
    const auth = useAuth();
    const menuItems: MenuProps['items'] = [
        {
            type: 'group',
            label: (
                <span data-cy="usermenu:current-user:txt">
                    Signed in as <strong>{auth.user?.displayName}</strong>
                </span>
            ),
        },
        { key: 'my-things', label: <Link href={urlFor.user.things()}>My things</Link> },
        { key: 'settings', label: <Link href={urlFor.user.settings()}>Account settings</Link> },
        { type: 'divider' },
        { key: 'logout', label: <Link href={urlFor.auth.logout()}>Logout</Link> },
    ];

    return (
        <Dropdown overlay={<Menu items={menuItems} />} trigger={['click']}>
            <div data-cy="navbar:user:btn" style={{ display: 'flex', alignItems: 'center' }}>
                <UserAvatar
                    style={{ cursor: 'pointer' }}
                    disablePopover
                    user={auth.userDetails || user}
                />
            </div>
        </Dropdown>
    );
};
