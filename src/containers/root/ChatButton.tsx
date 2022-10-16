import { useMemo } from 'react';
import Link from 'next/link';
import { Badge, Tooltip } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useChatGroupsSubscription } from '../../generated/graphql';
import { urlFor } from '../../utils/urls';
import { useAuth } from '../../utils/auth';

export const ChatButton = () => {
    const auth = useAuth();
    const groupsSub = useChatGroupsSubscription();
    const unreadCount = useMemo(
        () =>
            !auth.user
                ? 0
                : groupsSub.data?.chat_groups?.filter((g) =>
                      g.members.some((m) => m.user.id === auth.user!.id && m.info?.has_unread),
                  ).length,
        [groupsSub.data, auth.user],
    );

    return (
        <Badge size="small" count={unreadCount} overflowCount={9}>
            <Link href={urlFor.chat.root()} passHref>
                <Tooltip title="Messages">
                    <MessageOutlined style={{ fontSize: '1.5em' }} />
                </Tooltip>
            </Link>
        </Badge>
    );
};
