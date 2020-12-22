import React from 'react';
import { Typography } from 'antd';
import { PageLayout } from '../containers/root/PageLayout';
import { makeGSSP } from '../utils/gssp';
import { createUseStyles } from 'react-jss';
import { LoginForm } from '../components/dialogs/auth/LoginForm';
import { urlFor } from '../utils/urls';

const useStyles = createUseStyles({
    form: {
        maxWidth: 400,
    },
});

export const LoginPage = () => {
    const classes = useStyles();

    return (
        <PageLayout centered horizontal padded>
            <div className={classes.form}>
                <Typography.Title level={4}>Login</Typography.Title>
                <LoginForm callbackUrl={urlFor.home()} />
            </div>
        </PageLayout>
    );
};

export default LoginPage;

export const getServerSideProps = makeGSSP({
    handler: async (data) => {
        if (data.token?.id) {
            // ?????
            return { redirect: { statusCode: 302 as 302 | 301, destination: '/' } };
        }
    },
});
