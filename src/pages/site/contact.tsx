import { PageLayout } from '../../containers/root/PageLayout';
import { PageHeader, Typography } from 'antd';

const ContactPage = () => {
    return (
        <PageLayout>
            <PageHeader title="Contact">
                Send an email to{' '}
                <Typography.Link href="mailto:hello@reshared.org">
                    hello@reshared.org
                </Typography.Link>
                .
            </PageHeader>
        </PageLayout>
    );
};

export default ContactPage;
