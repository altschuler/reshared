﻿import {
    Button,
    Divider,
    Dropdown,
    Menu,
    message,
    Modal,
    PageHeader,
    Popconfirm,
    Typography,
} from 'antd';
import Link from 'next/link';
import React, { ReactNode, useCallback } from 'react';
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
import { useDialogs, CreateThingDrawer, CreatePostDrawer } from '../../components/dialogs';
import { PageLayout } from '../root/PageLayout';

export type GroupPage = 'home' | 'members' | 'settings' | 'things';

export interface GroupLayoutProps {
    activePage?: GroupPage;
    group: GroupCardFragment;
    children?: ReactNode;
}

const useStyles = createUseStyles({
    active: {
        color: '#40a9ff',
        borderColor: '#40a9ff',
        border: 'none',
        borderBottomStyle: 'solid',
        borderBottomWidth: 3,
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

    const handleShare = useCallback(
        () =>
            dialogs
                .showDialog(CreateThingDrawer, { group: props.group })
                .then(() => router.push(urlFor.group.home(props.group))),
        [dialogs, props.group, router],
    );

    const handlePost = useCallback(
        () =>
            dialogs
                .showDialog(CreatePostDrawer, { group: props.group })
                .then(() => router.push(urlFor.group.home(props.group))),
        [dialogs, props.group, router],
    );

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
        <PageLayout>
            <PageHeader
                className={classes.header}
                title={props.group.name}
                extra={[
                    isMember && (
                        <Link key="home" href={urlFor.group.home(props.group)}>
                            <Button type="link" className={btnClass('home')}>
                                Home
                            </Button>
                        </Link>
                    ),

                    isMember && (
                        <Link key="things" href={urlFor.group.things(props.group)}>
                            <Button type="link" className={btnClass('things')}>
                                Things
                            </Button>
                        </Link>
                    ),

                    isMember && (
                        <Link key="members" href={urlFor.group.members(props.group)}>
                            <Button type="link" className={btnClass('members')}>
                                Members
                            </Button>
                        </Link>
                    ),

                    isAdmin && (
                        <Link key="settings" href={urlFor.group.settings(props.group)}>
                            <Button type="link" className={btnClass('settings')}>
                                Settings
                            </Button>
                        </Link>
                    ),

                    isMember && <Divider type="vertical" style={{ color: 'black' }} />,

                    isMember && (
                        <Button key="share" type="primary" onClick={handleShare}>
                            Share a thing
                        </Button>
                    ),

                    isMember && (
                        <Button key="post" type="primary" onClick={handlePost}>
                            Ask for a thing
                        </Button>
                    ),

                    isMember && (
                        <Dropdown key="more" overlay={menu}>
                            <Button icon={<EllipsisOutlined />} />
                        </Dropdown>
                    ),

                    !isMember && <JoinButton key="join" group={props.group} />,
                ]}>
                {props.children}
            </PageHeader>
        </PageLayout>
    );
};
