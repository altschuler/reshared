import { Typography, Alert, Button, Divider, Form, Input, Space } from 'antd';
import { values } from 'lodash';
import { getProviders, SessionProvider, signIn } from 'next-auth/client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles( ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login: {
        marginRight: '1em',
    },
}));

interface LoginFormValues {
    email: string;
    password: string;
}

interface LoginFormProps {
    providers?: { [key: string]: SessionProvider };
    onRegister: () => any;
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
        return fromQuery;
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
                        <Typography.Link onClick={props.onRegister}>Sign up</Typography.Link>{' '}
                        instead.
                    </Typography.Text>
                </Form.Item>
                {error && <Alert message={error} type="error" />}
            </Form>

            <Divider>Other login options</Divider>

            <Space direction="vertical">
                {values(providers)
                    .filter((p) => p.name !== 'credentials')
                    .map((provider) => (
                        <Button
                            key={provider.name}
                            onClick={() => signIn(provider.id, { callbackUrl: props.callbackUrl })}>
                            Sign in with {provider.name}
                        </Button>
                    ))}
            </Space>
        </div>
    );
};
