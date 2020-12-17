import React, { useMemo } from 'react';
import { ChatGroupCardFragment } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { UserAvatarList } from '../../components/display';
import { Typography } from 'antd';
import { useAuth } from '../../utils/auth';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        flex: 'none',
        height: 40,
        padding: '0.5em',
        borderBottom: '1px solid #DDD',
    },

    avatars: {
        marginRight: '1em',
    },
});

export interface MessageListHeaderProps {
    chatGroup: ChatGroupCardFragment;
}

export const MessageListHeader = ({ chatGroup }: MessageListHeaderProps) => {
    const classes = useStyles();
    const auth = useAuth();
    const users = useMemo(
        () => chatGroup.members.map((m) => m.user).filter((u) => u.id !== auth.user?.id),
        [auth.user?.id, chatGroup.members],
    );
    const title = useMemo(() => chatGroup.name || users.map((u) => u.name).join(', '), [
        chatGroup.name,
        users,
    ]);

    return (
        <div className={classes.root}>
            <UserAvatarList className={classes.avatars} users={users} />
            <Typography.Title style={{ margin: 0 }} level={5}>
                {title}
            </Typography.Title>
        </div>
    );
};
