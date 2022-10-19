import { PageLayout } from '../../containers/root/PageLayout';
import { PageHeader, Typography } from 'antd';
import Link from 'next/link';

const OpenSourcePage = () => (
    <PageLayout>
        <PageHeader title="Open source">
            Reshared is an open source project, meaning the source code is freely available online.
            You can find it{' '}
            <Link passHref href="https://github.com/altschuler/reshared">
                <Typography.Link>here</Typography.Link>
            </Link>
            . Contributions in any form are welcomed, not only code.
        </PageHeader>
    </PageLayout>
);

export default OpenSourcePage;
