import React, { useCallback, useMemo } from 'react';
import { ThingList } from '../../components/ThingList';
import { useAuth } from '../../utils/auth';
import { ThingCardFragment } from '../../generated/graphql';
import { Button, PageHeader, Typography } from 'antd';
import { CreateThingDrawer, useDialogs } from '../../components/dialogs';
import { PageLayout } from '../root/PageLayout';

// export interface MyThingsPageProps {}
// props: MyThingsPageProps

export const MyThingsPage = () => {
    const auth = useAuth();
    const { showDialog } = useDialogs();

    const makeUrl = useCallback((thing: ThingCardFragment) => `/my-things/${thing.id}`, []);

    const handleShare = useCallback(() => {
        showDialog(CreateThingDrawer).then(console.log);
    }, [showDialog]);

    const where = useMemo(() => (auth.user ? { owner_id: { _eq: auth.user.id } } : {}), [
        auth.user,
    ]);

    if (!auth) {
        return <div>Not logged in</div>;
    }

    return (
        <PageLayout>
            <PageHeader
                title="Your Things"
                subTitle="Things shared across all groups you are a member of"
                extra={
                    <Button type="primary" onClick={handleShare}>
                        Share a thing
                    </Button>
                }>
                <ThingList skip={!auth.user} makeUrl={makeUrl} where={where} />
            </PageHeader>
        </PageLayout>
    );
};
