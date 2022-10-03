import { Alert, Button, Drawer, Form, Input, message, Space, Spin, Typography } from 'antd';
import { noop } from 'lodash-es';
import { useCallback } from 'react';
import {
    ThingCardFragment,
    UserCardFragment,
    useCreateTransferRequestMutation,
    GqlOps,
} from '../../generated/graphql';
import { UserSelect } from '../forms';
import { DialogProps } from './DialogProvider';

export interface TransferThingDrawerProps extends DialogProps<ThingCardFragment | null> {
    thing: ThingCardFragment;
}

interface FormValues {
    message: string;
    receiver: UserCardFragment;
}

export const TransferThingDrawer = (props: TransferThingDrawerProps) => {
    const { resolve, dispose, visible, thing } = props;

    const [requestTransfer, mutation] = useCreateTransferRequestMutation({
        refetchQueries: [GqlOps.Query.ThingDetails],
    });

    const [form] = Form.useForm<FormValues>();

    const handleSubmit = useCallback(() => {
        const values = form.getFieldsValue();

        requestTransfer({
            variables: {
                input: {
                    message: values.message || '',
                    receiver_id: values.receiver.id,
                    thing_id: thing.id,
                    original_owner_id: thing.owner.id,
                },
            },
        })
            .then(({ data }) => {
                if (data?.insert_transfer_request_one?.thing) {
                    message.success('Request to transfer has been sent');
                    resolve(data.insert_transfer_request_one.thing);
                }
            })
            .catch(noop);
    }, [resolve, requestTransfer]);

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title={`Transfer ${thing.name}`}
            placement="right"
            onClose={dispose}
            open={visible}>
            <Typography.Paragraph>
                <strong>
                    By transfering {thing.name} you transfer all control to the new owner
                </strong>
                , and can no longer edit or delete it. Use this if a thing has been physically
                handed over to someone else.
            </Typography.Paragraph>

            <Typography.Paragraph>
                The receiver will have to option to accept or reject the transfer. You can cancel
                the request as long as the receiver has not responded.
            </Typography.Paragraph>
            <Spin spinning={mutation.loading}>
                <Form form={form} layout="vertical" disabled={mutation.loading}>
                    <Form.Item
                        label="Receiver"
                        name="receiver"
                        help="To whom do you want to transfer ownership?">
                        <UserSelect multiple={false} />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        name="message"
                        help="Optionally include a message to the receiver">
                        <Input placeholder="Message" />
                    </Form.Item>

                    <Form.Item>
                        <Space style={{ marginTop: '20px' }}>
                            <Button disabled={mutation.loading}>Cancel</Button>

                            <Button
                                loading={mutation.loading}
                                disabled={mutation.loading}
                                type="primary"
                                onClick={handleSubmit}>
                                Request transfer
                            </Button>
                        </Space>
                    </Form.Item>

                    {mutation.error && (
                        <Form.Item>
                            <Alert type="error" message={mutation.error.message} />
                        </Form.Item>
                    )}
                </Form>
            </Spin>
        </Drawer>
    );
};
