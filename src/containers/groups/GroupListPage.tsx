import { GroupCardFragment, Order_By, useListGroupsQuery } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { Avatar, Button, List, PageHeader, Space, Typography } from 'antd';
import Link from 'next/link';
import { EyeInvisibleOutlined, EyeOutlined, GiftOutlined, TeamOutlined } from '@ant-design/icons';
import { ReactNode, useCallback, useEffect } from 'react';
import { useDialogs, CreateGroupDrawer } from '../../components/dialogs';
import { JoinButton } from './JoinButton';
import { useRouter } from 'next/router';
import { usePagination } from '../../utils/list';
import { urlFor } from '../../utils/urls';
import { PageLayout } from '../root/PageLayout';

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
    const router = useRouter();

    const handleCreateGroup = useCallback(
        () =>
            dialogs
                .showDialog(CreateGroupDrawer)
                .then((group: GroupCardFragment) => router.push(`/groups/${group.id}`)),
        [dialogs, router],
    );

    return (
        <PageLayout>
            <PageHeader
                title="Groups"
                extra={
                    <Button type="primary" onClick={handleCreateGroup}>
                        Create Group
                    </Button>
                }></PageHeader>
        </PageLayout>
    );
};
