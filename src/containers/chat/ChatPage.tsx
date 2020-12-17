import React, { useMemo } from 'react';
import { useChatGroupsSubscription } from '../../generated/graphql';
import { head } from 'lodash';
import { createUseStyles } from 'react-jss';
import { Sidebar } from './Sidebar';
import { useRouter } from 'next/router';
import { MessageList } from './MessageList';
import { PageLayout } from '../root/PageLayout';
import { NewMessageForm } from './NewMessageForm';
import { MessageListHeader } from './MessageListHeader';

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
    const classes = useStyles();
    const router = useRouter();
    const groupId = head(router.query.groupId);

    const groupsSub = useChatGroupsSubscription();
    const chatGroups = useMemo(() => groupsSub.data?.chat_groups || [], [
        groupsSub.data?.chat_groups,
    ]);

    const selected = useMemo(
        () => (groupId ? chatGroups.find((cg) => cg.id === groupId) || null : null),
        [chatGroups, groupId],
    );

    return (
        <PageLayout noScroll noFooter horizontal>
            <div className={classes.sidebar}>
                <Sidebar groups={chatGroups} selected={selected} loading={groupsSub.loading} />
            </div>
            <div className={classes.messages}>
                {selected && (
                    <>
                        <MessageListHeader chatGroup={selected} />
                        <MessageList chatGroup={selected} />
                        <NewMessageForm chatGroup={selected} />
                    </>
                )}
            </div>
        </PageLayout>
    );
};
