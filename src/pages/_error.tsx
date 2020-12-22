import { NextPage } from 'next';
import Link from 'next/link';
import { Button, Result } from 'antd';
import { urlFor } from '../utils/urls';
import { PageLayout } from '../containers/root/PageLayout';

interface ErrorPageProps {
    statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }: ErrorPageProps) => {
    const status = ([403, 404, 500].includes(statusCode) ? statusCode : 500) as 403 | 404 | 500;
    const msg = {
        403: 'This page is restricted',
        404: "There's nothing to see here, make sure the address you entered is correct.",
        500: 'We ran into a problem :(',
    };
    return (
        <PageLayout horizontal padded centered>
            <Result
                status={status}
                title={statusCode}
                subTitle={msg}
                extra={
                    <Link href={urlFor.home()}>
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </PageLayout>
    );
};

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err?.statusCode ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;
