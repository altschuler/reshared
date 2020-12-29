import { PageLayout } from '../root/PageLayout';
import { Typography } from 'antd';

export const FrontPage = () => {
    return (
        <PageLayout padded>
            <Typography.Title level={3}>Share your stuff</Typography.Title>
            <Typography.Title type="warning" level={5}>
                This site is not ready for any meaningful use.
            </Typography.Title>
        </PageLayout>
    );
};
