import { GroupCardFragment, UserCardFragment } from '../../generated/graphql';
import Link from 'next/link';
import { Avatar, Popover, Card, Skeleton, Space, Tag, Button } from 'antd';
import { MessageOutlined, ProfileOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { CSSProperties, useMemo } from 'react';
import { urlFor } from '../../utils/urls';
import { useAuth } from '../../utils/auth';
import { useNhostClient } from '@nhost/react';
import { AvatarSize } from 'antd/lib/avatar/AvatarContext';

const useStyles = createUseStyles({
    overlay: {
        '& .ant-popover-inner-content': {
            padding: 0,
        },
    },
});

export interface UserAvatarProps {
    user: UserCardFragment;
    group?: GroupCardFragment;
    disablePopover?: boolean;
    className?: string;
    style?: CSSProperties;
    showName?: boolean;
    size?: AvatarSize;
}

export const UserAvatar = (props: UserAvatarProps) => {
    const { user, disablePopover, className, style, showName, size } = props;
    const classes = useStyles();
    const auth = useAuth();
    const isSelf = useMemo(() => auth.user && auth.user.id === user.id, [auth.user, user.id]);
    const nhost = useNhostClient();

    const popover = useMemo(
        () => (
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    !isSelf && (
                        <Link
                            passHref
                            key="message"
                            href={{ pathname: urlFor.chat.new(), query: { to: user.id } }}
                            legacyBehavior>
                            <Button type="link" icon={<MessageOutlined />}>
                                Send a message
                            </Button>
                        </Link>
                    ),
                    <Link key="profile" passHref href={urlFor.user.profile(user)} legacyBehavior>
                        <Button type="link" icon={<ProfileOutlined />}>
                            View profile
                        </Button>
                    </Link>,
                ]}>
                <Card.Meta
                    avatar={
                        <Avatar
                            size="large"
                            src={
                                (user.user_profile?.avatar &&
                                    nhost.storage.getPublicUrl({
                                        fileId: user.user_profile?.avatar?.id,
                                    })) ||
                                user.avatarUrl
                            }>
                            <span style={{ userSelect: 'none' }}>
                                {user.displayName.slice(0, 2).toUpperCase() || '?'}
                            </span>
                        </Avatar>
                    }
                    title={
                        <Space>
                            <span>{user.displayName}</span>
                            {isSelf && <Tag>You</Tag>}
                        </Space>
                    }
                />
            </Card>
        ),
        [isSelf, user.displayName, user.id],
    );

    const avatar = useMemo(
        () => (
            <Avatar
                size={size || 'small'}
                src={
                    user.user_profile?.avatar &&
                    nhost.storage.getPublicUrl({ fileId: user.user_profile?.avatar?.id })
                }
                className={className}
                style={style}>
                <span style={{ userSelect: 'none' }}>
                    {user.displayName.slice(0, 2).toUpperCase() || '?'}
                </span>
            </Avatar>
        ),
        [className, size, style, user.displayName],
    );

    return disablePopover ? (
        avatar
    ) : (
        <Popover
            arrow={{ pointAtCenter: true }}
            destroyTooltipOnHide
            overlayClassName={classes.overlay}
            content={popover}>
            {showName ? (
                <Space size={5}>
                    {avatar} {user.displayName}
                </Space>
            ) : (
                avatar
            )}
        </Popover>
    );
};

export const UserAvatarList = ({
    users,
    className,
    size,
}: {
    users: UserCardFragment[];
    className?: string;
    size?: 'small' | 'default' | 'large';
}) => (
    <Avatar.Group className={className} maxCount={3} size={size || 'small'}>
        {users.map((user) => (
            <UserAvatar key={user.id} user={user} size={size || 'small'} />
        ))}
    </Avatar.Group>
);
