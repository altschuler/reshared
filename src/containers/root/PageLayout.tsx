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
        boxShadow: '0px 1px 120px 9px rgba(125,125,125,0.15)',
        paddingBottom: '2em',
        backgroundColor: 'white',
    },
    pageContentNoScroll: {
        minHeight: 0,
        paddingBottom: 0,
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
        /* backgroundColor: '#C6CDD2', */
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
        backgroundColor: '#FFFCF9',
        flex: 1,
        width: '100%',
    },
    contentPadded: {
        padding: '1em',
    },
    restrictedWidth: {
        width: '100%',
        maxWidth: 960,
        // marginTop: '2em',
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
