import React from 'react';
import { Typography } from 'antd';
import { PageLayout } from '../containers/root/PageLayout';
import { makeGSSP } from '../utils/gssp';
import { createUseStyles } from 'react-jss';
import { RegisterForm } from '../components/dialogs/auth/RegisterForm';

const useStyles = createUseStyles({
    form: {
        maxWidth: 400,
    },
});

export const RegisterPage = () => {
    const classes = useStyles();

    return (
        <PageLayout centered horizontal padded>
            <div className={classes.form}>
                <Typography.Title level={4}>Sign up</Typography.Title>
                <RegisterForm />
            </div>
        </PageLayout>
    );
};

export default RegisterPage;

export const getServerSideProps = makeGSSP({
    handler: async (data) => {
        if (data.token?.id) {
            // ?????
            return { redirect: { statusCode: 302 as 302 | 301, destination: '/' } };
        }
    },
});
