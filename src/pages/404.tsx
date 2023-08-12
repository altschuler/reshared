import Link from 'next/link';
import { Button, Result } from 'antd';
import { urlFor } from '../utils/urls';
import { PageLayout } from '../containers/root/PageLayout';

const NotFoundPage = () => {
    return (
        <PageLayout horizontal padded centered>
            <Result
                status={404}
                title="Not found"
                subTitle={
                    "There's nothing to see here, make sure the address you entered is correct."
                }
                extra={
                    <Link href={urlFor.home()} passHref legacyBehavior>
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </PageLayout>
    );
};

export default NotFoundPage;
