import { PageLayout } from '../../containers/root/PageLayout';
import { PageHeader } from '@ant-design/pro-layout';
import { Typography } from 'antd';
import Link from 'next/link';

const OpenSourcePage = () => (
    <PageLayout>
        <PageHeader title="Open source">
            Reshared is an open source project, meaning the source code is freely available online.
            You can find it{' '}
            <Link passHref href="https://github.com/altschuler/reshared" legacyBehavior>
                <Typography.Link>here</Typography.Link>
            </Link>
            . Contributions in any form are welcomed, not only code.
        </PageHeader>
    </PageLayout>
);

export default OpenSourcePage;
