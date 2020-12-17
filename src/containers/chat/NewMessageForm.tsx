import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import { Button, Input } from 'antd';
import { createUseStyles } from 'react-jss';
import { SendOutlined } from '@ant-design/icons';
import { ChatGroupCardFragment, useCreateChatMessageMutation } from '../../generated/graphql';

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
    },
});

export interface NewMessageFormProps {
    chatGroup?: ChatGroupCardFragment | null;
    onSend?: (message: string) => unknown;
    disableSend?: boolean;
}

export const NewMessageForm = (props: NewMessageFormProps) => {
    const classes = useStyles();
    const [message, setMessage] = useState('');

    const [createMessage] = useCreateChatMessageMutation();
    const handleSend = useCallback(() => {
        if (props.onSend) {
            props.onSend(message);
        }

        if (message.length > 0 && props.chatGroup) {
            createMessage({
                variables: {
                    input: { chat_group_id: props.chatGroup.id, message: message.trim() },
                },
            });
            setMessage('');
        }
    }, [createMessage, message, props]);

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
