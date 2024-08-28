import { Button, Typography } from 'antd';
import { PageLayout } from '../../containers/root/PageLayout';
import { makeGSSP } from '../../utils/gssp';
import { createUseStyles } from 'react-jss';
import { RegistrationForm } from '../../components/editors';
import { DiscordLogo } from '../../components/display/DiscordLogo';
import { useNhostClient } from '@nhost/nextjs';

const useStyles = createUseStyles({
    form: {
        maxWidth: 400,
    },
});

export const RegisterPage = () => {
    const classes = useStyles();

    const nhost = useNhostClient();
    const handleDiscordLogin = () => nhost.auth.signIn({ provider: 'discord' });

    return (
        <PageLayout centered horizontal padded>
            <div className={classes.form}>
                <Typography.Title level={4}>Sign up</Typography.Title>
                <RegistrationForm />
                <div>
                    or{' '}
                    <Button
                        icon={<DiscordLogo height="0.7em" />}
                        style={{ background: '#5865F2', color: 'white' }}
                        type="link"
                        onClick={handleDiscordLogin}>
                        Sign in with Discord
                    </Button>
                </div>
            </div>
        </PageLayout>
    );
};

export default RegisterPage;

export const getServerSideProps = makeGSSP({
    handler: async (data) => {
        if (data.user) {
            return { redirect: { statusCode: 302 as 302 | 301, destination: '/' } };
        }
    },
});
