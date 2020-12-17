import { GroupCardFragment, UserCardFragment } from '../../generated/graphql';
import { Avatar, Popover, Card, Skeleton } from 'antd';
import { MessageOutlined, ProfileOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    overlay: {
        '& .ant-popover-inner-content': {
            padding: 0,
        },
    },
});

export const UserAvatar = ({
    user,
    group,
    className,
}: {
    user: UserCardFragment;
    group?: GroupCardFragment;
    className?: string;
}) => {
    const classes = useStyles();
    const popover = (
        <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[<MessageOutlined key="message" />, <ProfileOutlined key="profile" />]}>
            <Skeleton loading={false} avatar active>
                <Card.Meta
                    avatar={
                        <Avatar size="large" src={user?.image || undefined}>
                            <span style={{ userSelect: 'none' }}>
                                {!user.image && (user.name.slice(0, 2).toUpperCase() || '?')}
                            </span>
                        </Avatar>
                    }
                    title={user.name}
                    description={'Something'}
                />
            </Skeleton>
        </Card>
    );

    // const handleShow = useCallback(() => {}, []);
    // onVisibleChange={handleShow}

    return (
        <Popover
            arrowPointAtCenter
            destroyTooltipOnHide
            overlayClassName={classes.overlay}
            content={popover}>
            <Avatar size="small" src={user.image || undefined} className={className}>
                <span style={{ userSelect: 'none' }}>
                    {!user.image && (user.name.slice(0, 2).toUpperCase() || '?')}
                </span>
            </Avatar>
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
