import React, { useCallback, useMemo } from 'react';
import { ThingList } from '../../components/ThingList';
import { useAuth } from '../../utils/auth';
import { Button, PageHeader } from 'antd';
import { CreateThingDrawer, useDialogs } from '../../components/dialogs';
import { PageLayout } from '../root/PageLayout';

export const MyThingsPage = () => {
    const auth = useAuth();
    const { showDialog } = useDialogs();

    const handleShare = useCallback(() => {
        showDialog(CreateThingDrawer).then(console.log);
    }, [showDialog]);

    const where = useMemo(() => ({ owner_id: { _eq: auth.user!.id } }), [auth.user]);

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
