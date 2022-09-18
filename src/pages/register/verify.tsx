import { message, Typography } from 'antd';
import { PageLayout } from '../../containers/root/PageLayout';
import { makeGSSP } from '../../utils/gssp';
import { createUseStyles } from 'react-jss';
import { useRouter } from 'next/router';
import { useNhostClient, useSignUpEmailPassword } from '@nhost/react';
import { urlFor } from '../../utils/urls';

export const VerifyPage = () => {
    const router = useRouter();
    const email = (router.query.email as string) || '';
    const nhost = useNhostClient();

    const { isSuccess } = useSignUpEmailPassword();

    const handleResend = () => {
        nhost.auth.sendVerificationEmail({ email }).then((res) => {
            console.log(res);
            message.success('Verification email has been sent');
        });
    };

    // Email was verified
    if (isSuccess) {
        router.push(urlFor.home());
        return null;
    }

    return (
        <PageLayout padded>
            <Typography.Title level={4}>Email verification needed</Typography.Title>
            <Typography.Paragraph>
                A verification email has been sent to {email}.
            </Typography.Paragraph>
            <Typography.Paragraph>
                Didn't receive the email?{' '}
                <Typography.Link onClick={handleResend}>Resend verification email</Typography.Link>.
            </Typography.Paragraph>
        </PageLayout>
    );
};

export default VerifyPage;

export const getServerSideProps = makeGSSP({
    handler: async (data) => {
        if (data.token?.id) {
            // ?????
            return { redirect: { statusCode: 302 as 302 | 301, destination: '/' } };
        }
    },
});
