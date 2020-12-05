import { UserCardFragment } from '../../generated/graphql';
import { Avatar } from 'antd';

export const UserAvatar = ({ user }: { user?: UserCardFragment | null }) => {
    return (
        <Avatar size="small" src={user?.image || undefined}>
            <span style={{ userSelect: 'none' }}>
                {!user?.image && (user?.name.slice(0, 2).toUpperCase() || '?')}
            </span>
        </Avatar>
    );
};
