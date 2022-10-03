import { Button, PageHeader } from 'antd';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { CreateThingDrawer, useDialogs } from '../../components/dialogs';
import { ThingList } from '../../components/ThingList';
import { useAuth } from '../../utils/auth';
import { urlFor } from '../../utils/urls';
import { PageLayout } from '../root/PageLayout';

export const MyThingsPage = () => {
    const auth = useAuth();
    const { showDialog } = useDialogs();
    const router = useRouter();

    const handleShare = useCallback(() => {
        showDialog(CreateThingDrawer).then((thing) => thing && router.push(urlFor.thing(thing)));
    }, [showDialog]);

    const where = useMemo(() => ({ owner_id: { _eq: auth.user?.id } }), [auth.user]);

    if (!auth) {
        return <div>Not logged in</div>;
    }

    return (
        <PageLayout>
            <PageHeader
                title="Your Things"
                extra={
                    <Button type="primary" onClick={handleShare}>
                        Share a thing
                    </Button>
                }>
                <ThingList skip={!auth.user} where={where} />
            </PageHeader>
        </PageLayout>
    );
};
