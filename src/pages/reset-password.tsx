import { Alert, Button, Form, Input, message, Typography } from 'antd';
import { PageLayout } from '../containers/root/PageLayout';
import { makeGSSP } from '../utils/gssp';
import { useRouter } from 'next/router';
import { useResetPassword } from '@nhost/react';
import { useState } from 'react';
import { urlFor } from '../utils/urls';

export const ResetPasswordPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState((router.query.email as string) || '');

    const reset = useResetPassword({
        redirectTo: urlFor.user.settings(),
    });

    const handleReset = () => {
        reset.resetPassword(email).then((res) => {
            if (res.isSent) {
                setEmail('');
            }
        });
    };

    return (
        <PageLayout padded>
            <Typography.Title level={4}>Reset password</Typography.Title>
            {reset.error && (
                <Form.Item>
                    <Alert type="error" message={reset.error.message} />
                </Form.Item>
            )}
            {reset.isSent && (
                <Form.Item>
                    <Alert
                        data-cy="success:alert"
                        type="success"
                        message="An email has been sent with a link to reset your password."
                    />
                </Form.Item>
            )}
            <Form>
                <Form.Item label="Email">
                    <Input
                        data-cy="email:in"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        data-cy="submit:btn"
                        type="primary"
                        loading={reset.isLoading}
                        onClick={handleReset}>
                        Reset password
                    </Button>
                </Form.Item>
            </Form>
        </PageLayout>
    );
};

export default ResetPasswordPage;

export const getServerSideProps = makeGSSP({
    handler: async (data) => {
        if (data.user) {
            return { redirect: { statusCode: 302 as 302 | 301, destination: '/' } };
        }
    },
});
