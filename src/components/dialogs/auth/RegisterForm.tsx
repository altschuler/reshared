import { Typography, Alert, Button, Divider, Form, Input, Space } from 'antd';
import { values } from 'lodash';
import { getProviders, SessionProvider, signIn } from 'next-auth/client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useRegisterUserMutation } from '../../../generated/graphql';

interface RegisterFormValues {
    email: string;
    password: string;
    name: string;
}

interface RegisterFormProps {
    providers?: { [key: string]: SessionProvider };
    onLogin: () => any;
}

export const RegisterForm = (props: RegisterFormProps) => {
    const router = useRouter();
    const [form] = Form.useForm<RegisterFormValues>();
    const [providers, setProviders] = useState(props.providers);

    const [error, setError] = useState<string | null>((router.query.error as string) || null);
    const [register, registerMutation] = useRegisterUserMutation();

    useEffect(() => {
        if (!providers) {
            getProviders().then((r) => setProviders(r!));
        }
    }, [providers]);

    const handleSignUp = () => {
        const values = form.getFieldsValue();

        setError(null);

        register({
            variables: {
                input: { email: values.email, name: values.name, password: values.password },
            },
        })
            .then((data) =>
                signIn('credentials', { email: values.email, password: values.password }),
            )
            .then((res) => router.push('/browse'))
            .catch((err) => setError(err.message));
    };
    return (
        <div>
            <Form
                className="form"
                form={form}
                hideRequiredMark
                validateTrigger="onBlur"
                name="basic"
                onFinish={handleSignUp}>
                <Form.Item
                    name="Name"
                    rules={[{ required: true, min: 3 }]}
                    extra="Name as it is shown to other users">
                    <Input placeholder="Name" />
                </Form.Item>

                <Form.Item name="email" rules={[{ type: 'email' }]}>
                    <Input placeholder="Email (optional)" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, min: 6 }]}
                    extra="Minimum 6 characters">
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="login"
                        type="primary"
                        htmlType="submit"
                        loading={registerMutation.loading}>
                        Register
                    </Button>
                    <Typography.Text className="signup-text">
                        Already have an account?{' '}
                        <Typography.Link onClick={props.onLogin}>Sign in</Typography.Link> instead.
                    </Typography.Text>
                </Form.Item>
                {error && <Alert message={error} type="error" />}
            </Form>

            <Divider>Other sign-up options</Divider>

            <Space direction="vertical">
                {values(providers)
                    .filter((p) => p.name !== 'credentials')
                    .map((provider) => (
                        <Button key={provider.name} onClick={() => signIn(provider.id)}>
                            Register with {provider.name}
                        </Button>
                    ))}
            </Space>

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                div :global(.login) {
                    margin-right: 1em;
                }

                div :global(.signup-text) {
                    margin-bottom: 1em;
                }
            `}</style>
        </div>
    );
};
