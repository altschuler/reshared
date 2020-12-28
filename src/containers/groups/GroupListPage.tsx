import { GroupCardFragment, Groups_Bool_Exp } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { Button, PageHeader } from 'antd';
import { useCallback, useMemo } from 'react';
import { useDialogs, CreateGroupDrawer } from '../../components/dialogs';
import { useRouter } from 'next/router';
import { PageLayout } from '../root/PageLayout';
import { GroupList } from '../../components/GroupList';
import { useAuth } from '../../utils/auth';

const useStyles = createUseStyles({
    thing: {
        marginRight: '2em',
    },
    header: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
});

export const GroupListPage = () => {
    const dialogs = useDialogs();
    const classes = useStyles();
    const auth = useAuth();
    const router = useRouter();

    const handleCreateGroup = useCallback(
        () =>
            dialogs
                .showDialog(CreateGroupDrawer)
                .then((group: GroupCardFragment) => router.push(`/groups/${group.id}`)),
        [dialogs, router],
    );

    const where = useMemo(
        (): Groups_Bool_Exp => ({
            memberships: {
                user_id: { _eq: auth.user?.id },
            },
        }),
        [auth.user],
    );

    return (
        <PageLayout>
            <PageHeader
                title="Your Groups"
                extra={
                    <Button type="primary" onClick={handleCreateGroup}>
                        Create Group
                    </Button>
                }>
                <GroupList where={where} />
            </PageHeader>
        </PageLayout>
    );
};
