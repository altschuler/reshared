import type { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout, Menu, Breadcrumb, Button, Typography, Space } from 'antd';
import { createUseStyles } from 'react-jss';
import { nhost, useAuth } from '../utils/nhost';
import { useCallback } from 'react';
import { UserCardFragment, UserDetailFragment } from '../generated/graphql';

const { Header, Content, Footer } = Layout;

// const useStyles = createUseStyles((theme) => ({
//     header: {
//         display: 'flex',
//         alignItems: 'center',
//         color: 'white',
//     },
//     title: {
//         flex: 'none',
//         alignItems: 'center',
//         marginRight: '1em',
//     },
//     nav: {
//         display: 'flex',
//         alignItems: 'center',
//         flex: 1,
//     },
//     navButtons: {},
//     user: {
//         display: 'flex',
//         alignItems: 'center',
//         flex: 'none',
//     },
//     username: {},
// }));

interface UserButtonProps {
    user: UserDetailFragment;
    onLogOut: () => any;
}

const UserButton = ({ user, onLogOut }: UserButtonProps) => {
    return (
        <span>
            <Typography.Text className="username">{user.display_name}</Typography.Text>{' '}
            <Button onClick={onLogOut}>Log out</Button>
            <style jsx>{`
                span :global(.username) {
                    color: white;
                }
            `}</style>
        </span>
    );
};

export interface PageLayoutProps {
    children: ReactNode;
}

export const PageLayout = (props: PageLayoutProps) => {
    const auth = useAuth();
    const router = useRouter();

    // const classes = useStyles();

    const handleLogOut = useCallback(() => {
        nhost.auth
            .logout()
            .then(() => router.push('/'))
            .catch(() => console.log('logout failed'));
    }, []);

    return (
        <Layout className="layout">
            <header className="ant-layout-header header">
                <div className="title">
                    <Link href="/">
                        <h3 className="title">Reshar.ed</h3>
                    </Link>
                </div>
                <div className="nav">
                    <Space>
                        <Link href="/browse">
                            <Button type="primary">Browse</Button>
                        </Link>
                        <Link href="/my-shares">
                            <Button type="primary">My Shares</Button>
                        </Link>
                    </Space>
                </div>
                <div className="user">
                    {auth.user ? (
                        <UserButton user={auth.user} onLogOut={handleLogOut} />
                    ) : (
                        <>
                            <Link href="/login">
                                <Button type="link">Log in</Button>
                            </Link>
                            /
                            <Link href="/signup">
                                <Button type="link">Sign up</Button>
                            </Link>
                        </>
                    )}
                </div>
            </header>
            <Content style={{ display: 'flex', padding: '30px' }}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <div style={{ flex: 1 }}>{props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Reshar.ed</Footer>
            <style jsx>{`
                .header {
                    display: flex;
                    align-items: center;
                    color: white;
                }

                .title {
                    color: white;
                    font-weight: 600;
                    font-size: 24px;
                    flex: none;
                    align-items: center;
                    margin-right: 1em;
                    margin-bottom: 0;
                }

                .nav {
                    display: flex;
                    align-items: center;
                    flex: 1;
                    color: white;
                }

                .user {
                    display: flex;
                    align-items: center;
                    flex: none;
                }
                .username {
                }
            `}</style>
        </Layout>
    );
};
