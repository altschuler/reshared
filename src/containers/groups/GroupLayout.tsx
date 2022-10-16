import { EllipsisOutlined } from '@ant-design/icons';
import {
    Avatar,
    Button,
    Divider,
    Dropdown,
    Menu,
    MenuProps,
    message,
    Modal,
    PageHeader,
    Popconfirm,
    Space,
    Tabs,
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

export type GroupPage = 'home' | 'members' | 'settings' | 'things' | 'posts';

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

    const [leave] = useLeaveGroupMutation({
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
                .then(() => router.push(urlFor.group.posts(props.group))),
        [dialogs, props.group, router],
    );

    const menu: MenuProps['items'] = [
        {
            key: 'members',
            label: (
                <Link passHref key="members" href={urlFor.group.members(props.group)}>
                    <a data-cy="group-header:members:btn">Members</a>
                </Link>
            ),
        },
        ...(isAdmin
            ? [
                  {
                      key: 'settings',
                      label: (
                          <Link passHref href={urlFor.group.settings(props.group)}>
                              <a data-cy="group-header:settings:btn">Settings</a>
                          </Link>
                      ),
                  },
              ]
            : []),
        {
            key: 'leave',
            danger: true,
            label: (
                <Popconfirm
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
                    <span data-cy="group-header:leave:btn">Leave group</span>
                </Popconfirm>
            ),
        },
    ];

    return (
        <PageLayout>
            <Tabs
                key="tabs"
                activeKey={props.activePage}
                tabBarExtraContent={{
                    left: (
                        <Space align="center" style={{ padding: '1em 2em 1em 1em' }}>
                            {props.group.banner_file && (
                                <Avatar
                                    src={
                                        <ImageDisplay
                                            dataCy="group-header:image"
                                            width={100}
                                            height={100}
                                            file={props.group.banner_file}
                                        />
                                    }></Avatar>
                            )}
                            <Typography.Title
                                level={3}
                                style={{ margin: 0 }}
                                data-cy="group-header:title:txt">
                                {props.group.name}
                            </Typography.Title>
                        </Space>
                    ),
                    right: isMember ? (
                        <Space style={{ padding: '1em' }}>
                            <Button
                                key="share"
                                data-cy="group-header:share:btn"
                                type="primary"
                                onClick={handleShare}>
                                Share a thing
                            </Button>
                            <Button
                                key="post"
                                data-cy="group-header:ask:btn"
                                type="primary"
                                onClick={handlePost}>
                                Ask for a thing
                            </Button>
                            <Dropdown
                                key="more"
                                overlay={<Menu items={menu} />}
                                trigger={['click']}>
                                <Button
                                    data-cy="group-header:more:btn"
                                    icon={<EllipsisOutlined />}
                                />
                            </Dropdown>
                        </Space>
                    ) : (
                        <JoinButton dataCy="group-header:join:btn" key="join" group={props.group} />
                    ),
                }}
                items={[
                    {
                        key: 'home',
                        label: (
                            <Link passHref key="home" href={urlFor.group.home(props.group)}>
                                <a data-cy="group-header:home:btn">Home</a>
                            </Link>
                        ),
                    },
                    {
                        key: 'posts',
                        label: (
                            <Link passHref key="posts" href={urlFor.group.posts(props.group)}>
                                <a data-cy="group-header:posts:btn">Posts</a>
                            </Link>
                        ),
                    },
                    {
                        key: 'things',
                        label: (
                            <Link passHref key="things" href={urlFor.group.things(props.group)}>
                                <a data-cy="group-header:things:btn">Things</a>
                            </Link>
                        ),
                    },
                ]}
            />
            <div style={{ padding: '0em 1em' }}>{props.children}</div>
        </PageLayout>
    );
};
