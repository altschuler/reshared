import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { head } from 'lodash';
import { ChatGroupCardFragment } from '../../generated/graphql';
import { Button, List, Typography } from 'antd';
import { UserAvatarList } from '../../components/display';
import { useAuth } from '../../utils/auth';
import { urlFor } from '../../utils/urls';
import Link from 'next/link';
import clsx from 'clsx';
import { ButtonProps } from 'antd/lib/button/button';
import { FormOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
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
    const router = useRouter();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link href={urlFor.chat.new()} passHref>
                <Button className={classes.newButton} icon={<FormOutlined />}>
                    New Message
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
                        ? `${lastMessage.sender?.name}: ${lastMessage.message}`
                        : '';
                    const selected = props.selected && chatGroup.id === props.selected?.id;
                    return (
                        <List.Item
                            onClick={() => router.push(urlFor.chat.group(chatGroup))}
                            className={clsx(
                                classes.listItem,
                                selected && classes.listItemSelected,
                            )}>
                            <List.Item.Meta
                                avatar={<UserAvatarList users={otherMembers} />}
                                title={otherMembers.map((u) => u.name).join(', ')}
                                description={
                                    <Typography.Text className={classes.lastMessage} ellipsis>
                                        {formatted}
                                    </Typography.Text>
                                }
                            />
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};
