import { UserCardFragment } from '../../generated/graphql';
import { Avatar } from 'antd';

export const UserAvatar = ({ user }: { user: UserCardFragment }) => {
    return (
        <Avatar src={user.image || undefined}>
            {!user.image && user.name.slice(0, 2).toUpperCase()}
        </Avatar>
    );
};
