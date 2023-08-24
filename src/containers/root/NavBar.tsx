import { useMedia } from '../../utils/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown, Form, Input, Menu, Space, Typography } from 'antd';
import { urlFor } from '../../utils/urls';
import { MenuFoldOutlined, SearchOutlined } from '@ant-design/icons';
import { NotificationsButton } from './NotificationList';
import { createUseStyles } from 'react-jss';
import { useAuth } from '../../utils/auth';
import { UserButton } from './UserButton';
import { ChatButton } from './ChatButton';
import { useRouter } from 'next/router';

const useStyles = createUseStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '64px',
        padding: '0 24px',
        lineHeight: '64px',
        background: '#C6CDD2',
    },
    inner: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        // maxWidth: '800px',
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
            // color: 'white',
            marginBottom: 0,
        },
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        /* flex: 1, */

        // color: 'white',
    },
    navLink: {
        '& a': {
            // color: 'white',
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
    search: {
        margin: 0,
        backgroundColor: '#DDD',
        borderRadius: 5,
        '& .ant-input::placeholder': {
            color: '#000',
        },

        '&:focus-within': {
            backgroundColor: '#FFF',
        },
    },
});

const ExpandedNav = () => {
    const classes = useStyles();
    const auth = useAuth();
    const router = useRouter();
    const handleSearch = ({ query }: { query: string }) => {
        router.push(urlFor.search(query));
    };

    return (
        <>
            <div className={classes.nav}>
                {auth.user && (
                    <Space size="large" align="center">
                        <Link
                            href={urlFor.home()}
                            data-cy="navbar:home:btn"
                            className={classes.navLink}>
                            Home
                        </Link>

                        <Link
                            href={urlFor.group.list()}
                            data-cy="navbar:my-groups:btn"
                            className={classes.navLink}>
                            My Groups
                        </Link>
                    </Space>
                )}
            </div>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {auth.user && (
                    <Form onFinish={handleSearch}>
                        <Form.Item name="query" className={classes.search}>
                            <Input
                                size="large"
                                bordered={false}
                                suffix={<SearchOutlined />}
                                data-cy="navbar:search:in"
                                placeholder="Find things, groups, users..."
                                defaultValue={router.query.query}
                            />
                        </Form.Item>
                    </Form>
                )}
            </div>
            <div className={classes.user}>
                {!auth.user && (
                    <div>
                        <a data-cy="navbar:btn:login" href={urlFor.auth.login()}>
                            Login
                        </a>{' '}
                        or{' '}
                        <a data-cy="navbar:btn:register" href={urlFor.auth.register()}>
                            Register
                        </a>
                    </div>
                )}

                {auth.user && (
                    <Space size="large" align="center">
                        <ChatButton />
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
            {auth.user ? (
                <>
                    <Menu.Item>
                        <Link href={urlFor.home()}>Home</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link href={urlFor.search()}>Find</Link>
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.ItemGroup
                        title={
                            <span>
                                Signed in as <strong>{auth.user.displayName}</strong>
                            </span>
                        }
                    />
                    <Menu.Item>
                        <Link href={urlFor.user.things()} data-cy="navbar:my-things:btn">
                            My Things
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href={urlFor.group.list()} data-cy="navbar:my-groups:btn">
                            My Groups
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href={urlFor.user.settings()} data-cy="navbar:settings:btn">
                            Account settings
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href={urlFor.auth.logout()} data-cy="navbar:logout:btn">
                            Logout
                        </Link>
                    </Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item>
                        <a data-cy="navbar:btn:login" href={urlFor.auth.login()}>
                            Login
                        </a>{' '}
                        /
                    </Menu.Item>

                    <Menu.Item>
                        <a data-cy="navbar:btn:register" href={urlFor.auth.register()}>
                            Register
                        </a>
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
                        <ChatButton />
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
    const collapsed = useMedia(['(max-width: 800px)'], [true], false);

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <div className={classes.title}>
                    <Typography.Title level={3}>
                        <Link passHref href={urlFor.root()}>
                            <Image width={150} height={40} src="/logo.svg" alt="Reshared logo" />
                        </Link>
                    </Typography.Title>
                </div>

                {collapsed ? <CollapsedNav /> : <ExpandedNav />}
            </div>
        </header>
    );
};
