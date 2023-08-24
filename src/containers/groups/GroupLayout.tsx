import { EllipsisOutlined } from '@ant-design/icons';
import {
    Avatar,
    Button,
    Dropdown,
    Menu,
    MenuProps,
    message,
    Modal,
    Popconfirm,
    Space,
    Tabs,
    Typography,
} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
import { CreatePostDrawer, CreateThingDrawer, useDialogs } from '../../components/dialogs';
import { ImageDisplay } from '../../components/display';
import {
    GqlOps,
    GroupCardFragment,
    Group_Post_Type_Enum,
    useLeaveGroupMutation,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { urlFor } from '../../utils/urls';
import { PageLayout } from '../root/PageLayout';
import { JoinButton } from './JoinButton';

export type GroupPage = 'home' | 'members' | 'settings' | 'things' | 'requests';

export interface GroupLayoutProps {
    activePage?: GroupPage;
    group: GroupCardFragment;
    children?: ReactNode;
}

export const GroupLayout = (props: GroupLayoutProps) => {
    const dialogs = useDialogs();
    const router = useRouter();
    const { isAdmin, isMember, user } = useMembership(props.group);

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
        (type: Group_Post_Type_Enum) => {
            dialogs
                .showDialog(CreatePostDrawer, { group: props.group, type })
                .then(
                    (post) =>
                        post &&
                        router.push(
                            post.type === Group_Post_Type_Enum.Message
                                ? urlFor.group.home(props.group)
                                : urlFor.group.requests(props.group),
                        ),
                );
        },
        [dialogs, props.group, router],
    );

    const menu: MenuProps['items'] = [
        {
            key: 'members',
            label: (
                <Link
                    passHref
                    key="members"
                    href={urlFor.group.members(props.group)}
                    data-cy="group-header:members:btn">
                    Members
                </Link>
            ),
        },
        ...(isAdmin
            ? [
                  {
                      key: 'settings',
                      label: (
                          <Link
                              passHref
                              href={urlFor.group.settings(props.group)}
                              data-cy="group-header:settings:btn">
                              Settings
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
                    okButtonProps={{ ['data-cy']: 'confirm:ok:btn' } as any}
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
            <Head>
                <title>{props.group.name} | Reshared</title>
            </Head>
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
                                            alt="Header image for the group"
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
                                data-cy="group-header:post:btn"
                                onClick={() => handlePost(Group_Post_Type_Enum.Message)}>
                                Write a post
                            </Button>
                            <Button
                                data-cy="group-header:share:btn"
                                type="primary"
                                onClick={handleShare}>
                                Share something
                            </Button>
                            <Button
                                data-cy="group-header:ask:btn"
                                type="primary"
                                onClick={() => handlePost(Group_Post_Type_Enum.Request)}>
                                Ask for something
                            </Button>
                            <Dropdown overlay={<Menu items={menu} />} trigger={['click']}>
                                <Button
                                    data-cy="group-header:more:btn"
                                    icon={<EllipsisOutlined />}
                                />
                            </Dropdown>
                        </Space>
                    ) : (
                        <Space style={{ padding: '1em' }}>
                            <JoinButton
                                dataCy="group-header:join:btn"
                                key="join"
                                group={props.group}
                            />
                        </Space>
                    ),
                }}
                items={[
                    {
                        key: 'home',
                        label: (
                            <Link
                                passHref
                                href={urlFor.group.home(props.group)}
                                data-cy="group-header:home:btn">
                                Home
                            </Link>
                        ),
                    },
                    {
                        key: 'requests',
                        label: (
                            <Link
                                passHref
                                href={urlFor.group.requests(props.group)}
                                data-cy="group-header:requests:btn">
                                Requests
                            </Link>
                        ),
                    },
                    {
                        key: 'things',
                        label: (
                            <Link
                                passHref
                                href={urlFor.group.things(props.group)}
                                data-cy="group-header:things:btn">
                                Things
                            </Link>
                        ),
                    },
                ]}
            />
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0em 1em' }}>
                {props.children}
            </div>
        </PageLayout>
    );
};
