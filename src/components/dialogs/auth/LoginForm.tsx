﻿import { Typography, Alert, Button, Divider, Form, Input, Space } from 'antd';
import { values } from 'lodash';
import { getProviders, SessionProvider, signIn } from 'next-auth/client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';
import { urlFor } from '../../../utils/urls';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login: {
        marginRight: '1em',
    },
});

interface LoginFormValues {
    email: string;
    password: string;
}

interface LoginFormProps {
    providers?: { [key: string]: SessionProvider };
    onRegister?: () => any;
    submitLabel?: string;
    callbackUrl?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const classes = useStyles();
    const router = useRouter();
    const [form] = Form.useForm<LoginFormValues>();
    const [providers, setProviders] = useState(props.providers);

    const error = useMemo(() => {
        const fromQuery = router.query.error as string;
        if (!fromQuery) {
            return null;
        }
        switch (fromQuery) {
            case 'Signin':
            case 'OAuthSignin':
            case 'OAuthCallback':
            case 'OAuthCreateAccount':
            case 'EmailCreateAccount':
            case 'Callback':
                return 'Try signing with a different account.';
            case 'OAuthAccountNotLinked':
                return 'The email of your social login provider is already registered. Please sign in with the same account you used originally.';
            case 'EmailSignin':
                return 'Check your email address.';
            case 'CredentialsSignin':
                return 'Sign in failed. Check the details you provided are correct.';
            default:
                return 'Unable to sign in.';
        }
    }, [router.query.error]);

    useEffect(() => {
        if (!providers) {
            getProviders().then((r) => r && setProviders(r));
        }
    }, [providers]);

    const handleCredentialsLogin = () => {
        const values = form.getFieldsValue();

        signIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: props.callbackUrl,
        }).catch((e) => console.log(e));
    };
    return (
        <div className={classes.root}>
            <Form
                form={form}
                hideRequiredMark
                name="basic"
                validateTrigger="onBlur"
                onFinish={handleCredentialsLogin}>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Email goes here', type: 'email' }]}>
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Password goes here' }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button className={classes.login} type="primary" htmlType="submit">
                        {props.submitLabel || 'Log in'}
                    </Button>
                    <Typography.Text className="signup-text">
                        Don't have an account?{' '}
                        {props.onRegister ? (
                            <Typography.Link onClick={props.onRegister}>Sign up</Typography.Link>
                        ) : (
                            <Link href={urlFor.auth.register()} passHref>
                                <Typography.Link>Sign up</Typography.Link>
                            </Link>
                        )}{' '}
                        instead.
                    </Typography.Text>
                </Form.Item>
                {error && <Alert message={error} type="error" />}
            </Form>

            <Divider>Other login options</Divider>

            <Space>
                {values(providers)
                    .filter((p) => p.name !== 'credentials')
                    .map((provider) => (
                        <Button
                            key={provider.name}
                            onClick={() => signIn(provider.id, { callbackUrl: props.callbackUrl })}>
                            {provider.name}
                        </Button>
                    ))}
            </Space>
        </div>
    );
};
