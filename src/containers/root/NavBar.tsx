import React, { useCallback } from 'react';
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
    navLink: {
        '& a': {
            color: 'white',
        },
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
                <Space size="large">
                    <Link href={urlFor.home()} passHref>
                        <Typography.Link className={classes.navLink}>Home</Typography.Link>
                    </Link>

                    <Typography.Link className={classes.navLink}>
                        <Link href={urlFor.search()}>Find</Link>
                    </Typography.Link>

                    <Typography.Link className={classes.navLink}>
                        <Link href={urlFor.user.things()}>My Things</Link>
                    </Typography.Link>

                    <Typography.Link className={classes.navLink}>
                        <Link href={urlFor.group.list()}>My Groups</Link>
                    </Typography.Link>
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
                        <Link href={urlFor.chat.root()} passHref>
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
                <Link href={urlFor.home()}>Home</Link>
            </Menu.Item>

            <Menu.Item>
                <Link href={urlFor.search()}>Find</Link>
            </Menu.Item>

            <Menu.Divider />

            {auth.user ? (
                <>
                    <Menu.ItemGroup
                        title={
                            <span>
                                Signed in as <strong>{auth.user.name}</strong>
                            </span>
                        }
                    />
                    <Menu.Item>
                        <Link href={urlFor.user.things()}>My Things</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href={urlFor.group.list()}>My Groups</Link>
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
                <Link href={urlFor.root()}>
                    <Typography.Title level={3}>Reshared</Typography.Title>
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
