import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import { Button, Input } from 'antd';
import { createUseStyles } from 'react-jss';
import { SendOutlined } from '@ant-design/icons';
import { ChatGroupCardFragment, useCreateChatMessageMutation } from '../../generated/graphql';
import { useAuth } from '../../utils/auth';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        padding: '0.5em',
        backgroundColor: '#F8F8F8',
    },
    sendButton: {
        width: 80,
    },
    textarea: {
        resize: 'none',
        marginRight: '0.5em',
    },
});

export interface NewMessageFormProps {
    chatGroup?: ChatGroupCardFragment | null;
    onSend?: (message: string) => unknown;
    disableSend?: boolean;
}

export const NewMessageForm = (props: NewMessageFormProps) => {
    const classes = useStyles();
    const auth = useAuth();
    const [message, setMessage] = useState('');

    const [createMessage] = useCreateChatMessageMutation();
    const handleSend = useCallback(() => {
        if (props.onSend) {
            props.onSend(message);
        }

        if (auth.user && message.length > 0 && props.chatGroup) {
            createMessage({
                variables: {
                    input: {
                        chat_group_id: props.chatGroup.id,
                        sender_id: auth.user.id,
                        message: message.trim(),
                    },
                },
            });
            setMessage('');
        }
    }, [auth.user, createMessage, message, props]);

    const handleMessageChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }, []);

    // Send message on <Enter> but not <Shift>+<Enter>
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.stopPropagation();
                e.preventDefault();
                handleSend();
            }
        },
        [handleSend],
    );

    return (
        <div className={classes.root}>
            <Input.TextArea
                className={classes.textarea}
                autoSize={{ maxRows: 4 }}
                value={message}
                onKeyDown={handleKeyDown}
                onChange={handleMessageChange}
            />
            <Button
                disabled={props.disableSend}
                className={classes.sendButton}
                icon={<SendOutlined />}
                type="primary"
                onClick={handleSend}
            />
        </div>
    );
};
