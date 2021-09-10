import { GroupCardFragment, UserCardFragment } from '../../generated/graphql';
import Link from 'next/link';
import { Avatar, Popover, Card, Skeleton, Space, Tag } from 'antd';
import { MessageOutlined, ProfileOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { CSSProperties, useMemo } from 'react';
import { urlFor } from '../../utils/urls';
import { useAuth } from '../../utils/auth';

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
    size?: 'small' | 'default' | 'large';
}

export const UserAvatar = (props: UserAvatarProps) => {
    const { user, disablePopover, className, style, showName, size } = props;
    const classes = useStyles();
    const auth = useAuth();
    const isSelf = useMemo(() => auth.user && auth.user.id === user.id, [auth.user, user.id]);
    const popover = useMemo(
        () => (
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    !isSelf && (
                        <Link
                            passHref
                            key="message"
                            href={{ pathname: urlFor.chat.new(), query: { to: user.id } }}>
                            <MessageOutlined title="Send a message" />
                        </Link>
                    ),
                    <ProfileOutlined key="profile" />,
                ]}>
                <Skeleton loading={false} avatar active>
                    <Card.Meta
                        avatar={
                            <Avatar size="large" src={user?.image || undefined}>
                                <span style={{ userSelect: 'none' }}>
                                    {!user.image && (user.name.slice(0, 2).toUpperCase() || '?')}
                                </span>
                            </Avatar>
                        }
                        title={
                            <Space>
                                <span>{user.name}</span>
                                {isSelf && <Tag>You</Tag>}
                            </Space>
                        }
                    />
                </Skeleton>
            </Card>
        ),
        [isSelf, user.id, user.image, user.name],
    );

    const avatar = useMemo(
        () => (
            <Avatar
                size={size || 'small'}
                src={user.image || undefined}
                className={className}
                style={style}>
                <span style={{ userSelect: 'none' }}>
                    {!user.image && (user.name.slice(0, 2).toUpperCase() || '?')}
                </span>
            </Avatar>
        ),
        [className, size, style, user.image, user.name],
    );

    return disablePopover ? (
        avatar
    ) : (
        <Popover
            arrowPointAtCenter
            destroyTooltipOnHide
            overlayClassName={classes.overlay}
            content={popover}>
            {showName ? (
                <Space size={5}>
                    {avatar} {user.name}
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
}: {
    users: UserCardFragment[];
    className?: string;
}) => (
    <Avatar.Group className={className} maxCount={3}>
        {users.map((user) => (
            <UserAvatar key={user.id} user={user} />
        ))}
    </Avatar.Group>
);
