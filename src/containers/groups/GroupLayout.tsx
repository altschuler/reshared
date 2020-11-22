import { Button, PageHeader } from 'antd';
import Link from 'next/link';
import { ReactNode } from 'react';
import { GroupCardFragment } from '../../generated/graphql';
import { EllipsisOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { useIsAdmin } from '../../utils/group';

export type GroupPage = 'home' | 'members' | 'settings';

export interface GroupLayoutProps {
    activePage: GroupPage;
    group: GroupCardFragment;
    children?: ReactNode;
}

const useStyles = createUseStyles({
    active: {
        color: '#40a9ff',
        borderColor: '#40a9ff',
    },

    header: {
        '& .ant-page-header-heading': {
            paddingBottom: '1em',
            borderBottom: '1px solid #CCC',
        },
    },
});

export const GroupLayout = (props: GroupLayoutProps) => {
    const classes = useStyles();
    const isAdmin = useIsAdmin(props.group);
    const btnClass = (page: GroupPage) => (props.activePage === page ? classes.active : undefined);

    return (
        <PageHeader
            className={classes.header}
            title={props.group.name}
            extra={[
                <Link key="home" href={`/groups/${props.group.id}`}>
                    <Button type="default" className={btnClass('home')}>
                        Home
                    </Button>
                </Link>,

                <Link key="members" href={`/groups/${props.group.id}/members`}>
                    <Button type="default" className={btnClass('members')}>
                        Members
                    </Button>
                </Link>,

                isAdmin && (
                    <Link key="settings" href={`/groups/${props.group.id}/settings`}>
                        <Button type="default" className={btnClass('settings')}>
                            Settings
                        </Button>
                    </Link>
                ),

                <Button key="more" icon={<EllipsisOutlined />} />,
            ]}>
            {props.children}
        </PageHeader>
    );
};
