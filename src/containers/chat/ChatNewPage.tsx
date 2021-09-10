import React, { useCallback, useMemo, useState } from 'react';
import { head } from 'lodash';
import {
    useChatGroupsSubscription,
    useCreateChatGroupMutation,
    UserCardFragment,
} from '../../generated/graphql';
import { isEmpty } from 'lodash';
import { createUseStyles } from 'react-jss';
import { Sidebar } from './Sidebar';
import { PageLayout } from '../root/PageLayout';
import { NewMessageForm } from './NewMessageForm';
import { MessageUserSelectHeader } from './MessageUserSelectHeader';
import { useRouter } from 'next/router';
import { urlFor } from '../../utils/urls';

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
    spacer: {
        flex: 1,
    },
});

export interface ChatPageNewProps {
    to?: UserCardFragment[];
}

export const ChatNewPage = (props) => {
    const classes = useStyles();
    const router = useRouter();

    const [users, setUsers] = useState<UserCardFragment[]>(props.to || []);

    const groupsSub = useChatGroupsSubscription();
    const chatGroups = useMemo(
        () => groupsSub.data?.chat_groups || [],
        [groupsSub.data?.chat_groups],
    );

    const [createChatGroup, { loading }] = useCreateChatGroupMutation();

    const handleCreate = useCallback(
        (message: string) => {
            const canCreate = !loading && !isEmpty(message) && !isEmpty(users);

            if (!canCreate) {
                return;
            }
            createChatGroup({
                variables: {
                    input: { receiverIds: [...users.map((u) => u.id)], message },
                },
            }).then((result) => {
                const created = result.data?.createChatGroup?.chat_group;
                if (created) {
                    return router.push(urlFor.chat.group(created));
                }
            });
        },
        [createChatGroup, loading, router, users],
    );

    return (
        <PageLayout noScroll noFooter horizontal>
            <div className={classes.sidebar}>
                <Sidebar groups={chatGroups} loading={groupsSub.loading} />
            </div>
            <div className={classes.messages}>
                <MessageUserSelectHeader value={users} onChange={setUsers} />
                <div className={classes.spacer} />
                <NewMessageForm disableSend={isEmpty(users)} onSend={handleCreate} />
            </div>
        </PageLayout>
    );
};
