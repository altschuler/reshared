import React, { useEffect, useMemo, useRef, useState } from 'react';
import { isEmpty, head, uniqBy, keyBy } from 'lodash';
import {
    ChatGroupCardFragment,
    ChatMessageCardFragment,
    useChatMessagesFeedSubscription,
    useChatMessagesQuery,
    UserCardFragment,
} from '../../generated/graphql';
import { useAuth } from '../../utils/auth';
import { Spin, Tooltip } from 'antd';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { DateDisplay } from '../../components/display';

const useStyles = createUseStyles({
    list: {
        display: 'flex',
        flexDirection: 'column',
        //    maxWidth: 1000,
    },

    bubble: {
        display: 'flex',
        borderRadius: 3,
        padding: '0.5em 0.7em',
        backgroundColor: '#eeeeee',
        marginBottom: '0.5em',
        maxWidth: 400,
        whiteSpace: 'pre-wrap',
    },

    bubbleMe: {
        backgroundColor: '#b3d8ff',
        marginRight: '1em',
    },

    messageGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },

    messageGroupMe: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },

    messageListRoot: {
        flex: 1,
        overflowY: 'auto',
    },
});

interface MessageGroup {
    key: string;
    timestamp: Date;
    sender: UserCardFragment;
    messages: ChatMessageCardFragment[];
    isMe: boolean;
}

export interface MessageListProps {
    chatGroup: ChatGroupCardFragment;
}

export const MessageList = (props: MessageListProps) => {
    const classes = useStyles();
    const auth = useAuth();
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [messages, setMessages] = useState<ChatMessageCardFragment[]>([]);

    // Get initial message list once per chatGroup change
    const { loading } = useChatMessagesQuery({
        variables: { where: { chat_group_id: { _eq: props.chatGroup.id } }, limit: 100 },
        onCompleted: (data) => {
            setMessages(data.chat_messages || []);
        },
    });

    const lastMessageTimestamp = useMemo(() => head(messages)?.created_at, [messages]);

    // Subscribe to message sent after the latest received message
    useChatMessagesFeedSubscription({
        variables: {
            where: {
                chat_group_id: { _eq: props.chatGroup.id },
                created_at: { _gte: lastMessageTimestamp },
            },
        },
        onSubscriptionData: (data) => {
            const newMessages = data.subscriptionData.data?.chat_messages || [];

            setMessages(uniqBy([...newMessages, ...messages], (m) => m.id));
        },
    });

    const userLookup: { [userId: string]: { user: UserCardFragment } } = useMemo(
        () => (!props.chatGroup ? {} : keyBy(props.chatGroup.members, (m) => m.user.id)),
        [props.chatGroup],
    );

    const grouped = useMemo(
        () =>
            messages.reduce((groups, message) => {
                // TODO: this case should never happen (it does when changing groups sometimes)
                const sender = userLookup[message.sender_id]?.user || { id: '', name: '' };
                const isMe = auth.user && sender.id === auth.user?.id;
                const key = message.created_at.toString();
                const timestamp = message.created_at;

                // First message
                if (isEmpty(groups)) {
                    return [{ sender, isMe, key, timestamp, messages: [message] }];
                }

                const [head, ...tail] = groups;

                // Same sender as last, add to group
                if (head.sender.id === message.sender_id) {
                    return [{ ...head, messages: [message, ...head.messages] }, ...tail];
                }

                // Start new group
                return [{ sender, isMe, key, timestamp, messages: [message] }, ...groups];
            }, [] as MessageGroup[]),
        [auth.user, messages, userLookup],
    );

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [grouped]);

    return (
        <div className={classes.messageListRoot}>
            <Spin spinning={loading}>
                <div className={classes.list}>
                    {grouped.map((mg) => (
                        <div
                            key={mg.key}
                            className={clsx(
                                classes.messageGroup,
                                mg.isMe && classes.messageGroupMe,
                            )}>
                            {!mg.isMe && <div>{mg.sender.name}</div>}

                            {mg.messages.map((m) => (
                                <Tooltip
                                    key={m.id}
                                    title={<DateDisplay mode="datetime" utc={m.created_at} />}>
                                    <div
                                        className={clsx(
                                            classes.bubble,
                                            mg.isMe && classes.bubbleMe,
                                        )}>
                                        {m.message}
                                    </div>
                                </Tooltip>
                            ))}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </Spin>
        </div>
    );
};
