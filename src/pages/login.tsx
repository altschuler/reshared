import { Form, Input, Button, Checkbox, Alert } from 'antd';
import { nhost } from '../utils/nhost';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface LoginFormValues {
    email: string;
    password: string;
    remember: boolean;
}

const LoginPage = () => {
    const [form] = Form.useForm<LoginFormValues>();
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        const values = form.getFieldsValue();
        setError(null);
        setLoading(true);

        nhost.auth
            .login(values.email, values.password)
            .then((res) => router.push('/browse'))
            .catch((err) => setError('Log in failed, is your email and password correct?'))
            .finally(() => setLoading(false));
    };

    return (
        <div>
            <Form
                className="form"
                form={form}
                hideRequiredMark
                name="basic"
                initialValues={{ remember: true }}
                onFinish={handleLogin}>
                <Form.Item name="email" rules={[{ required: true, message: 'Email goes here' }]}>
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Password goes here' }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button className="login" type="primary" htmlType="submit" loading={loading}>
                        Log in
                    </Button>
                    or
                    <Link href="/signup">
                        <Button type="link">Sign up</Button>
                    </Link>
                </Form.Item>
                {error && <Alert message={error} type="error" />}
            </Form>

            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    max-width: 300px;
                }

                div :global(.login) {
                    margin-right: 1em;
                }
            `}</style>
        </div>
    );
};

export default LoginPage;
