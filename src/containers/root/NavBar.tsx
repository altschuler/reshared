﻿import React, { useCallback } from 'react';
import { useMedia } from '../../utils/hooks';
import Link from 'next/link';
import { Button, Dropdown, Menu, Space, Tooltip, Typography } from 'antd';
import { urlFor } from '../../utils/urls';
import { MessageOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { NotificationsButton } from './NotificationList';
import { createUseStyles } from 'react-jss';
import { useAuth } from '../../utils/auth';
import { AuthDialog, useDialogs } from '../../components/dialogs';
import { UserButton } from './UserButton';
import { signOut } from 'next-auth/client';

const useStyles = createUseStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        height: '64px',
        padding: '0 24px',
        lineHeight: '64px',
        background: '#001529',
    },
    title: {
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: 600,
        fontSize: '24px',
        flex: 'none',
        alignItems: 'center',
        marginRight: '1em',
        '& h3': {
            color: 'white',
            marginBottom: 0,
        },
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,

        color: 'white',
    },
    collapsedNav: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        flex: 'none',
    },
});

const ExpandedNav = (props: { onLogin: () => unknown; onRegister: () => unknown }) => {
    const classes = useStyles();
    const auth = useAuth();
    return (
        <>
            <div className={classes.nav}>
                <Space>
                    <Link href="/">
                        <Button style={{ color: 'white' }} type="link">
                            Home
                        </Button>
                    </Link>
                    <Link href={urlFor.group.list()}>
                        <Button style={{ color: 'white' }} type="link">
                            Groups
                        </Button>
                    </Link>
                    <Link href={urlFor.search()}>
                        <Button style={{ color: 'white' }} type="link">
                            Find
                        </Button>
                    </Link>
                    <Link href={urlFor.user.things()}>
                        <Button style={{ color: 'white' }} type="link">
                            My Things
                        </Button>
                    </Link>
                </Space>
            </div>
            <div className={classes.user}>
                {!auth.user && (
                    <div>
                        <Button type="link" onClick={props.onLogin}>
                            Log in
                        </Button>
                        /
                        <Button type="link" onClick={props.onRegister}>
                            Register
                        </Button>
                    </div>
                )}

                {auth.user && (
                    <Space size="large" align="center">
                        <Link href="/chat" passHref>
                            <Tooltip title="Messages">
                                <MessageOutlined />
                            </Tooltip>
                        </Link>

                        <NotificationsButton />
                        <UserButton user={auth.user} />
                    </Space>
                )}
            </div>
        </>
    );
};

const CollapsedNav = () => {
    const classes = useStyles();
    const auth = useAuth();
    const menu = (
        <Menu>
            <Menu.Item>
                <Link href="/browse">Browse</Link>
            </Menu.Item>

            <Menu.Item>
                <Link href={urlFor.group.list()}>Groups</Link>
            </Menu.Item>

            <Menu.Divider />

            {auth.user ? (
                <>
                    <Menu.ItemGroup title={`Signed in as ${auth.user.name}`} />
                    <Menu.Item>
                        <Link href={urlFor.user.things()}>My things</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href={urlFor.user.settings()}>Account settings</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <a onClick={() => signOut()}>Log out</a>
                    </Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item>
                        <Link href={urlFor.auth.login()}>Login</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link href={urlFor.auth.register()}>Register</Link>
                    </Menu.Item>
                </>
            )}
        </Menu>
    );

    return (
        <div className={classes.collapsedNav}>
            <Space size="large" align="center">
                {auth.user && (
                    <>
                        <Link href="/chat" passHref>
                            <Tooltip title="Messages">
                                <MessageOutlined />
                            </Tooltip>
                        </Link>

                        <NotificationsButton />
                    </>
                )}

                <Dropdown overlay={menu} trigger={['click']}>
                    <span>
                        <MenuFoldOutlined />
                    </span>
                </Dropdown>
            </Space>
        </div>
    );
};

export const NavBar = () => {
    const classes = useStyles();
    const { showDialog } = useDialogs();
    const collapsed = useMedia(['(max-width: 800px)'], [true], false);

    const handleAuth = useCallback(
        (startOnRegister: boolean) => showDialog(AuthDialog, { startOnRegister }),
        [showDialog],
    );

    return (
        <header className={classes.header}>
            <div className={classes.title}>
                <Link href="/">
                    <div>
                        <Typography.Title level={3}>Reshared</Typography.Title>
                    </div>
                </Link>
            </div>

            {collapsed ? (
                <CollapsedNav />
            ) : (
                <ExpandedNav
                    onLogin={() => handleAuth(false)}
                    onRegister={() => handleAuth(true)}
                />
            )}
        </header>
    );
};
