import * as Sentry from '@sentry/nextjs';
import { Button, Result } from 'antd';
import NextErrorComponent, { ErrorProps } from 'next/error';
import Link from 'next/link';
import { PageLayout } from '../containers/root/PageLayout';
import { urlFor } from '../utils/urls';

const CustomErrorComponent = ({ statusCode }: ErrorProps) => {
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
                subTitle={msg[status]}
                extra={
                    <Link passHref href={urlFor.root()}>
                        <Button type="primary">Go to home page</Button>
                    </Link>
                }
            />
        </PageLayout>
    );
};

CustomErrorComponent.getInitialProps = async (contextData) => {
    // In case this is running in a serverless function, await this in order to give Sentry
    // time to send the error before the lambda exits
    await Sentry.captureUnderscoreErrorException(contextData);

    // This will contain the status code of the response
    return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;
