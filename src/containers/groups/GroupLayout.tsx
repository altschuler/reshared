import { Button, Dropdown, Menu, message, Modal, PageHeader, Popconfirm, Typography } from 'antd';
import Link from 'next/link';
import { ReactNode, useCallback } from 'react';
import {
    GqlOps,
    GroupCardFragment,
    ThingCardFragment,
    useLeaveGroupMutation,
} from '../../generated/graphql';
import { EllipsisOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { useMembership } from '../../utils/group';
import { useRouter } from 'next/router';
import { urlFor } from '../../utils/urls';
import { JoinButton } from './JoinButton';
import { useDialogs, CreateThingDrawer } from '../../components/dialogs';

export type GroupPage = 'home' | 'members' | 'settings';

export interface GroupLayoutProps {
    activePage?: GroupPage;
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
    const dialogs = useDialogs();
    const router = useRouter();
    const { isAdmin, isMember, user } = useMembership(props.group);
    const btnClass = (page: GroupPage) => (props.activePage === page ? classes.active : undefined);

    const [leave, mutation] = useLeaveGroupMutation({
        refetchQueries: [GqlOps.Query.UserPrivateDetails],
        awaitRefetchQueries: true,
    });

    const handleLeave = useCallback(() => {
        if (!user) {
            return;
        }

        leave({
            variables: { groupId: props.group.id, userId: user.id },
        }).then((res) => {
            if (res.data?.delete_group_members?.affected_rows === 1) {
                message.info(`You have left the group ${props.group.name}`);
                return router.push(urlFor.group.home(props.group));
            } else {
                Modal.error({
                    title: 'Could not leave group',
                    content: (
                        <Typography.Paragraph>
                            If you are the only administrator in this group, you must appoint
                            another user the administrator role before leaving. If you are the only
                            member of the group you cannot leave, but you can delete the group under
                            Settings.
                        </Typography.Paragraph>
                    ),
                });
            }
        });
    }, [leave, props.group, router, user]);

    const handleShare = useCallback(() => {
        dialogs.showDialog(CreateThingDrawer, { group: props.group }).then(console.log);
    }, [dialogs, props.group]);

    const menu = (
        <Menu>
            <Menu.Item>
                <Popconfirm
                    key="leave"
                    okText="Leave"
                    okType="danger"
                    onConfirm={handleLeave}
                    title={
                        <div style={{ maxWidth: 400 }}>
                            <Typography.Paragraph>
                                Do you want to leave the group <strong>{props.group.name}</strong>?
                            </Typography.Paragraph>

                            <Typography.Paragraph>
                                Any things you shared in the group will be removed (only from this
                                group, not your account or other groups in which they are shared).
                            </Typography.Paragraph>
                        </div>
                    }>
                    <Button type="primary" danger loading={mutation.loading}>
                        Leave Group
                    </Button>
                </Popconfirm>
            </Menu.Item>
        </Menu>
    );

    return (
        <PageHeader
            className={classes.header}
            title={props.group.name}
            extra={[
                <Button key="share" type="primary" onClick={handleShare}>
                    Share a thing
                </Button>,

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

                !isMember && <JoinButton key="join" group={props.group} />,

                <Dropdown key="more" overlay={menu}>
                    <Button icon={<EllipsisOutlined />} />
                </Dropdown>,
            ]}>
            {props.children}
        </PageHeader>
    );
};
