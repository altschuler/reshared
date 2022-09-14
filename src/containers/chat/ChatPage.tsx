import React, { useCallback, useEffect, useMemo } from 'react';
import {
    useChatGroupsSubscription,
    useUpdateChatGroupMemberMutation,
    useUpdateChatGroupMutation,
} from '../../generated/graphql';
import { head } from 'lodash';
import { createUseStyles } from 'react-jss';
import { Sidebar } from './Sidebar';
import { useRouter } from 'next/router';
import { MessageList } from './MessageList';
import { PageLayout } from '../root/PageLayout';
import { NewMessageForm } from './NewMessageForm';
import { MessageListHeader } from './MessageListHeader';
import { useAuth } from '../../utils/auth';
import { formatISO } from 'date-fns';
import { message } from 'antd';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flex: 1,
    },
    sidebar: {
        flex: 'none',
        display: 'flex',
        background: '#FFF',
    },
    messages: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#FFF',
    },
});

export const ChatPage = () => {
    const auth = useAuth();
    const classes = useStyles();
    const router = useRouter();
    const groupId = head(router.query.groupId);

    const groupsSub = useChatGroupsSubscription();
    const [updateGroup] = useUpdateChatGroupMutation();
    const [updateGroupMember] = useUpdateChatGroupMemberMutation({
        onError: (err) => message.error('Could not mark conversation as read'),
    });

    const chatGroups = useMemo(
        () => groupsSub.data?.chat_groups || [],
        [groupsSub.data?.chat_groups],
    );

    const selected = useMemo(
        () => (groupId ? chatGroups.find((cg) => cg.id === groupId) || null : null),
        [chatGroups, groupId],
    );

    const handleNameChange = useCallback(
        (name: string) => {
            if (!selected) {
                return;
            }
            updateGroup({ variables: { id: selected.id, input: { name } } });
        },
        [selected, updateGroup],
    );

    useEffect(() => {
        if (selected && auth.user) {
            const membership = selected.members.find((m) => m.user.id === auth.user!.id);

            if (membership && (membership.last_read === null || membership?.info?.has_unread)) {
                updateGroupMember({
                    variables: { id: membership.id, input: { last_read: formatISO(new Date()) } },
                });
            }
        }
    }, [groupId, selected, auth.user, updateGroupMember]); // TODO: add some sort of focus trigger

    return (
        <PageLayout noScroll noFooter horizontal>
            <div className={classes.sidebar}>
                <Sidebar groups={chatGroups} selected={selected} loading={groupsSub.loading} />
            </div>
            <div className={classes.messages}>
                {selected && (
                    <>
                        <MessageListHeader chatGroup={selected} onNameChange={handleNameChange} />
                        <MessageList chatGroup={selected} />
                        <NewMessageForm chatGroup={selected} />
                    </>
                )}
            </div>
        </PageLayout>
    );
};
