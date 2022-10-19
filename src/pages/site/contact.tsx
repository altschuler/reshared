import { PageLayout } from '../../containers/root/PageLayout';
import { PageHeader, Typography } from 'antd';

const ContactPage = () => (
    <PageLayout>
        <PageHeader title="Contact">
            <Typography.Link href="mailto:hello@reshared.org">hello@reshared.org</Typography.Link>
        </PageHeader>
    </PageLayout>
);

export default ContactPage;
