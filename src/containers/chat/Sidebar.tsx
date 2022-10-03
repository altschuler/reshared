import React from 'react';
import { createUseStyles } from 'react-jss';
import { head } from 'lodash-es';
import { ChatGroupCardFragment } from '../../generated/graphql';
import { Badge, Button, List, Tooltip, Typography } from 'antd';
import { UserAvatarList } from '../../components/display';
import { useAuth } from '../../utils/auth';
import { urlFor } from '../../utils/urls';
import Link from 'next/link';
import clsx from 'clsx';
import { FormOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useMedia } from '../../utils/hooks';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
        borderRight: '1px solid #EEE',
        overflowX: 'hidden',
        overflowY: 'auto',
        transition: 'width 0.3s',
    },

    rootExpanded: {
        width: 300,
    },

    rootCollapsed: {
        width: 70,
    },

    newButton: {
        marginBottom: '1em',
    },

    listItem: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F8F8F8',
        },
    },

    listItemSelected: {
        backgroundColor: '#F8F8F8',
    },

    lastMessage: {
        width: '100%',
        paddingRight: '1em',
    },
});

export interface SidebarProps {
    groups: ChatGroupCardFragment[];
    loading?: boolean;
    selected?: ChatGroupCardFragment | null;
}

export const Sidebar = (props: SidebarProps) => {
    const auth = useAuth();
    const collapsed = useMedia(['(max-width: 800px)'], [true], false);

    const router = useRouter();
    const classes = useStyles();

    return (
        <div
            className={clsx(
                classes.root,
                collapsed ? classes.rootCollapsed : classes.rootExpanded,
            )}>
            <Link href={urlFor.chat.new()} passHref>
                <Button className={classes.newButton} icon={<FormOutlined />}>
                    {!collapsed && 'New Message'}
                </Button>
            </Link>

            <List
                loading={props.loading}
                itemLayout="horizontal"
                dataSource={props.groups}
                renderItem={(chatGroup) => {
                    // Filter out self
                    const otherMembers = chatGroup.members
                        .map((m) => m.user)
                        .filter((u) => u.id !== auth.user?.id);
                    const lastMessage = head(chatGroup.messages);
                    const formatted = lastMessage
                        ? `${lastMessage.sender?.displayName}: ${lastMessage.message}`
                        : '';
                    const selected = props.selected && chatGroup.id === props.selected?.id;
                    const membership = chatGroup.members.find((m) => m.user.id === auth.user?.id);
                    return (
                        <List.Item
                            onClick={() => router.push(urlFor.chat.group(chatGroup))}
                            className={clsx(
                                classes.listItem,
                                selected && classes.listItemSelected,
                            )}>
                            <List.Item.Meta
                                avatar={<UserAvatarList users={otherMembers} />}
                                title={
                                    !collapsed && otherMembers.map((u) => u.displayName).join(', ')
                                }
                                description={
                                    !collapsed && (
                                        <Typography.Text className={classes.lastMessage} ellipsis>
                                            {formatted}
                                        </Typography.Text>
                                    )
                                }
                            />
                            {membership?.info?.has_unread && (
                                <Tooltip title="Unread messages">
                                    <span>
                                        <Badge color="blue" />
                                    </span>
                                </Tooltip>
                            )}
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};
