import { Typography, Alert, Button, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';
import { urlFor } from '../../../utils/urls';
import { useSignInEmailPassword } from '@nhost/nextjs';

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
    // providers?: { [key: string]: SessionProvider };
    onRegister?: () => any;
    submitLabel?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const classes = useStyles();
    const router = useRouter();
    const [form] = Form.useForm<LoginFormValues>();
    const login = useSignInEmailPassword();

    const handleCredentialsLogin = () => {
        const values = form.getFieldsValue();

        try {
            login.signInEmailPassword(values.email, values.password);
        } catch (e) {
            console.log(e);
        }
    };

    if (login.isSuccess) {
        router.push(urlFor.home());
    }

    return (
        <div className={classes.root}>
            <Form form={form} hideRequiredMark name="basic" validateTrigger="onBlur">
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Email', type: 'email' }]}
                >
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Password goes here' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button
                        loading={login.isLoading}
                        className={classes.login}
                        type="primary"
                        htmlType="submit"
                        onClick={handleCredentialsLogin}
                    >
                        {props.submitLabel || 'Log in'}
                    </Button>
                    <Typography.Text className="signup-text">
                        Don&apos;t have an account?{' '}
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
                {login.error && <Alert message={login.error.message} type="error" />}
            </Form>
        </div>
    );
};
