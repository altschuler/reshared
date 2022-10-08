import { EllipsisOutlined } from '@ant-design/icons';
import {
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
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { CreatePostDrawer, CreateThingDrawer, useDialogs } from '../../components/dialogs';
import { ImageDisplay } from '../../components/display';
import { GqlOps, GroupCardFragment, useLeaveGroupMutation } from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { urlFor } from '../../utils/urls';
import { PageLayout } from '../root/PageLayout';
import { JoinButton } from './JoinButton';

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
                .then((thing) => thing && router.push(urlFor.thing(thing))),
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
                        Leave group
                    </Button>
                </Popconfirm>
            </Menu.Item>
        </Menu>
    );

    return (
        <PageLayout>
            <PageHeader
                className={classes.header}
                title={<span data-cy="group-header:title:txt">{props.group.name}</span>}
                avatar={
                    props.group.banner_file
                        ? {
                              icon: (
                                  <ImageDisplay
                                      dataCy="group-header:image"
                                      width={100}
                                      height={100}
                                      file={props.group.banner_file}
                                  />
                              ),
                          }
                        : undefined
                }
                extra={[
                    isMember && (
                        <Link passHref key="home" href={urlFor.group.home(props.group)}>
                            <Button
                                data-cy="group-header:home:btn"
                                type="link"
                                className={btnClass('home')}>
                                Home
                            </Button>
                        </Link>
                    ),

                    isMember && (
                        <Link passHref key="things" href={urlFor.group.things(props.group)}>
                            <Button
                                data-cy="group-header:things:btn"
                                type="link"
                                className={btnClass('things')}>
                                Things
                            </Button>
                        </Link>
                    ),

                    isMember && (
                        <Link passHref key="members" href={urlFor.group.members(props.group)}>
                            <Button
                                data-cy="group-header:members:btn"
                                type="link"
                                className={btnClass('members')}>
                                Members
                            </Button>
                        </Link>
                    ),

                    isAdmin && (
                        <Link passHref key="settings" href={urlFor.group.settings(props.group)}>
                            <Button
                                data-cy="group-header:settings:btn"
                                type="link"
                                className={btnClass('settings')}>
                                Settings
                            </Button>
                        </Link>
                    ),

                    isMember && (
                        <Divider key="divider" type="vertical" style={{ color: 'black' }} />
                    ),

                    isMember && (
                        <Button
                            key="share"
                            data-cy="group-header:share:btn"
                            type="primary"
                            onClick={handleShare}>
                            Share a thing
                        </Button>
                    ),

                    isMember && (
                        <Button
                            key="post"
                            data-cy="group-header:ask:btn"
                            type="primary"
                            onClick={handlePost}>
                            Ask for a thing
                        </Button>
                    ),

                    isMember && (
                        <Dropdown key="more" overlay={menu} trigger={['click']}>
                            <Button data-cy="group-header:more:btn" icon={<EllipsisOutlined />} />
                        </Dropdown>
                    ),

                    !isMember && (
                        <JoinButton dataCy="group-header:join:btn" key="join" group={props.group} />
                    ),
                ]}>
                {props.children}
            </PageHeader>
        </PageLayout>
    );
};
