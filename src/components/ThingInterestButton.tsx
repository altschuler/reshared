import { MessageOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Popover, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ThingCardFragment, useCreateChatGroupMutation } from '../generated/graphql';
import { urlFor } from '../utils/urls';

const useStyles = createUseStyles({
    textarea: {
        resize: 'none',
        marginBottom: '1em',
    },
    contentRoot: {
        maxWidth: 500,
    },
});

export const ThingInterestButton = ({ thing }: { thing: ThingCardFragment }) => {
    const classes = useStyles();
    const router = useRouter();
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const [send, mutation] = useCreateChatGroupMutation();

    const handleConfirm = useCallback(() => {
        send({
            variables: {
                input: { receiverIds: [thing.owner.id], message: value, thing_id: thing.id },
            },
        })
            .then((result) => {
                const created = result.data?.createChatGroup?.chat_group;
                if (created) {
                    return router.push(urlFor.chat.group(created));
                }
            })
            .catch((err) => Modal.error({ title: 'Send message failed', content: err.message }))
            .finally(() => setVisible(false));
    }, [router, send, thing.id, thing.owner.id, value]);

    const handleVisibleChange = useCallback(
        (value: boolean) => {
            if (!mutation.loading) {
                setVisible(value);
            }
        },
        [mutation.loading],
    );

    const content = (
        <div className={classes.contentRoot}>
            <Typography.Paragraph>
                Let {thing.owner.displayName} know that you're interested by sending them a message
                which will include a reference to this thing.
            </Typography.Paragraph>
            <Typography.Paragraph>
                Include relevant details such as when, how much, for what etc.
            </Typography.Paragraph>
            <Input.TextArea
                autoSize
                autoFocus
                maxLength={1000}
                className={classes.textarea}
                placeholder="Message"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Space>
                <Button disabled={mutation.loading} onClick={() => handleVisibleChange(false)}>
                    Cancel
                </Button>
                <Button
                    type="primary"
                    onClick={handleConfirm}
                    loading={mutation.loading}
                    disabled={mutation.loading}>
                    Send
                </Button>
            </Space>
        </div>
    );

    return (
        <Popover
            open={visible}
            onOpenChange={handleVisibleChange}
            arrowPointAtCenter={false}
            trigger="click"
            content={content}>
            <Button
                title={`Let ${thing.owner.displayName} know you're interested in this`}
                icon={<MessageOutlined />}>
                I'm interested
            </Button>
        </Popover>
    );
};
