import type { ReactNode } from 'react';
import { Layout, Spin } from 'antd';
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
        alignItems: 'center',
    },
    pageContent: {
        display: 'flex',
        flex: 1,
        width: '100%',
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
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
        flexWrap: 'wrap',
        padding: '0 10px',
        backgroundColor: '#EEE',
        marginTop: '2em',
        '& > *': {
            marginRight: '2em',
        },
    },
    footerLink: {
        height: 40,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        '& a': { color: 'black' },
    },
    root: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
    },
    contentPadded: {
        padding: '1em',
    },
    restrictedWidth: {
        width: '100%',
        maxWidth: 800,
    },
});

export interface PageLayoutProps {
    noScroll?: boolean;
    noFooter?: boolean;
    padded?: boolean;
    horizontal?: boolean;
    centered?: boolean;
    children?: ReactNode;
    loading?: boolean;
    error?: string;
    fullWidth?: boolean;
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
                    className={clsx(
                        classes.pageContent,
                        props.noScroll && classes.pageContentNoScroll,
                        props.centered && classes.pageContentCentered,
                        props.horizontal
                            ? classes.pageContentHorizontal
                            : classes.pageContentVertical,
                        props.padded && classes.contentPadded,

                        !props.fullWidth && classes.restrictedWidth,
                    )}>
                    {props.error && <ErrorDisplay error={props.error} />}{' '}
                    {props.loading ? <Spin>{props.children}</Spin> : props.children}
                </div>
                {!props.noFooter && (
                    <div className={classes.footer}>
                        <span className={classes.footerLink}>© Reshared</span>

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
                    </div>
                )}
            </Content>
        </Layout>
    );
};
