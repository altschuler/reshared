import type { ReactNode } from 'react';
import Link from 'next/link';
import { Layout, Button, Space, Popover } from 'antd';
import { useState } from 'react';
import { UserDetailFragment } from '../../generated/graphql';
import { signOut } from 'next-auth/client';
import { useAuth } from '../../utils/auth';
import { AuthDialog } from '../../components/dialogs';
import clsx from 'clsx';

import { CaretDownOutlined, MessageOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { UserAvatar } from '../../components/display';
import { NotificationsButton } from './NotificationList';

const { Content } = Layout;
const useStyles = createUseStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    },
    title: {
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
    user: {
        display: 'flex',
        alignItems: 'center',
        flex: 'none',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        //padding: '30px',
        // '& > div': {
        //     flex: 1,
        // },
    },
    pageContent: {
        display: 'flex',
        flex: 1,
    },
    pageContentNoScroll: {
        minHeight: 0,
    },
    pageContentVertical: {
        flexDirection: 'column',
    },
    pageContentHorizontal: {
        flexDirection: 'row',
    },
    pageContentCentered: {
        justifyContent: 'center',
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
        height: 50,
        padding: '0 10px',
        backgroundColor: '#EEE',
        marginTop: '2em',
    },
    root: {
        backgroundColor: 'white',
        flex: 1,
    },
    contentPadded: {
        padding: '1em',
    },
});

interface UserButtonProps {
    user: UserDetailFragment;
}

const UserButton = ({ user }: UserButtonProps) => {
    const menu = (
        <div>
            <Button onClick={() => signOut()}>Log out</Button>
        </div>
    );

    return (
        <Popover
            content={menu}
            placement="bottomRight"
            title={'Signed in as ' + user.name}
            trigger="click">
            <UserAvatar user={user} />
            <CaretDownOutlined />
        </Popover>
    );
};

export interface PageLayoutProps {
    noScroll?: boolean;
    noFooter?: boolean;
    padded?: boolean;
    horizontal?: boolean;
    centered?: boolean;
    children: ReactNode;
}

export const PageLayout = (props: PageLayoutProps) => {
    const auth = useAuth();

    const classes = useStyles();

    const [loginVisible, setLoginVisible] = useState(false);

    return (
        <Layout className={classes.root}>
            <AuthDialog visible={loginVisible} onClose={() => setLoginVisible(false)} />
            <header className={clsx(classes.header, 'ant-layout-header')}>
                <div className={classes.title}>
                    <Link href="/">
                        <h3>Reshared</h3>
                    </Link>
                </div>
                <div className={classes.nav}>
                    <Space>
                        <Link href="/browse">
                            <Button type="primary">Browse</Button>
                        </Link>
                        <Link href="/groups">
                            <Button type="primary">Groups</Button>
                        </Link>
                        <Link href="/my-things">
                            <Button type="primary">My Things</Button>
                        </Link>
                    </Space>
                </div>
                <div className={classes.user}>
                    {!auth.user && (
                        <div>
                            <Button type="link" onClick={() => setLoginVisible(true)}>
                                Log in
                            </Button>
                            /
                            <Button type="link" onClick={() => setLoginVisible(true)}>
                                Register
                            </Button>
                        </div>
                    )}

                    {auth.user && (
                        <Space size="large">
                            <Link href="/chat">
                                <Button type="link" icon={<MessageOutlined />} />
                            </Link>

                            <NotificationsButton />
                            <UserButton user={auth.user} />
                        </Space>
                    )}
                </div>
            </header>
            <Content className={classes.content}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <div
                    className={clsx(
                        classes.pageContent,
                        props.noScroll && classes.pageContentNoScroll,
                        props.centered && classes.pageContentCentered,
                        props.horizontal
                            ? classes.pageContentHorizontal
                            : classes.pageContentVertical,
                        props.padded && classes.contentPadded,
                    )}>
                    {props.children}
                </div>
                {!props.noFooter && <div className={classes.footer}>Reshared</div>}
            </Content>
        </Layout>
    );
};
