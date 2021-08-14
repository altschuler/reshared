import type { MutableRefObject, ReactNode } from 'react';
import { Divider, Layout, Space, Spin, Typography } from 'antd';
import Link from 'next/link';
import clsx from 'clsx';

import { createUseStyles } from 'react-jss';
import { NavBar } from './NavBar';
import { urlFor } from '../../utils/urls';
import { ErrorDisplay } from '../../components/display';

const { Content } = Layout;
const useStyles = createUseStyles({
    content: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
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
    footerLink: {
        '& a': { color: 'black' },
    },
    root: {
        backgroundColor: 'white',
        flex: 1,
    },
    contentPadded: {
        padding: '1em',
    },
});

export interface PageLayoutProps {
    noScroll?: boolean;
    noFooter?: boolean;
    padded?: boolean;
    horizontal?: boolean;
    centered?: boolean;
    children?: ReactNode;
    contentRef?: MutableRefObject<HTMLDivElement | null>;
    loading?: boolean;
    error?: string;
}

export const PageLayout = (props: PageLayoutProps) => {
    const classes = useStyles();

    return (
        <Layout className={classes.root}>
            <NavBar />
            <Content className={classes.content}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <div
                    ref={props.contentRef}
                    className={clsx(
                        classes.pageContent,
                        props.noScroll && classes.pageContentNoScroll,
                        props.centered && classes.pageContentCentered,
                        props.horizontal
                            ? classes.pageContentHorizontal
                            : classes.pageContentVertical,
                        props.padded && classes.contentPadded,
                    )}>
                    {props.error && <ErrorDisplay error={props.error} />}{' '}
                    {props.loading ? <Spin>{props.children}</Spin> : props.children}
                </div>
                {!props.noFooter && (
                    <div className={classes.footer}>
                        <Space size="large" split={<Divider type="vertical" />}>
                            <span>© Reshared</span>

                            <Link href={urlFor.site.privacy()}>
                                <a className={classes.footerLink}>Privacy Policy</a>
                            </Link>

                            <Link href={urlFor.site.terms()}>
                                <a className={classes.footerLink}>Terms of Service</a>
                            </Link>

                            <Link href={urlFor.site.contact()}>
                                <a className={classes.footerLink}>Contact</a>
                            </Link>

                            <Link href={urlFor.site.attributions()}>
                                <a className={classes.footerLink}>Attributions</a>
                            </Link>
                        </Space>
                    </div>
                )}
            </Content>
        </Layout>
    );
};
