import * as React from 'react';
import {
    Order_By,
    Thing_Type_Enum,
    ThingCardFragment,
    Things_Bool_Exp,
    useCreateChatGroupMutation,
    useThingListQuery,
} from '../generated/graphql';
import { useAuth } from '../utils/auth';
import { EditThingDrawer, ImageGalleryModal, useDialogs } from './dialogs';
import { usePagination } from '../utils/list';
import { useCallback, useEffect, useState } from 'react';
import { Button, Input, List, Modal, Popconfirm, Popover, Space, Tag, Typography } from 'antd';
import { ownsThing } from '../utils/thing';
import { BellOutlined, EditOutlined } from '@ant-design/icons';
import { UserAvatar } from './display';
import Link from 'next/link';
import Image from 'next/image';
import { createUseStyles } from 'react-jss';
import { useDebounce } from '../utils/hooks';
import { useRouter } from 'next/router';
import { urlFor } from '../utils/urls';

const useStyles = createUseStyles({
    search: {
        maxWidth: 200,
    },
    thumbnail: {
        width: 40,
        height: 40,
        border: '1px solid #EEE',
        borderRadius: 3,
        cursor: 'pointer',
        '& img': {
            borderRadius: 3,
        },
        '&:hover': {
            borderColor: '#1890ff',
        },
        transition: 'border-color 0.3s',
    },
});

export interface ThingListProps {
    initial?: ThingCardFragment[];
    where: Things_Bool_Exp;
    makeUrl: (thing: ThingCardFragment) => string;
    skip?: boolean;
}

export const ThingList = (props: ThingListProps) => {
    const auth = useAuth();
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 300);
    const { showDialog } = useDialogs();
    const pgn = usePagination();
    const classes = useStyles();

    const { data, previousData, loading, error } = useThingListQuery({
        skip: props.skip,
        variables: {
            limit: pgn.limit,
            offset: pgn.offset,
            orderBy: [{ created_at: Order_By.Desc }],
            where: {
                _and: [
                    props.where,
                    debouncedQuery ? { name: { _ilike: `%${debouncedQuery}%` } } : {},
                ],
            },
        },
    });

    const things = data?.things || previousData?.things || [];
    const total =
        data?.things_aggregate.aggregate?.count ||
        previousData?.things_aggregate.aggregate?.count ||
        0;

    useEffect(() => pgn.setTotal(total), [total, pgn]);

    const handleShowGallery = useCallback(
        (thing: ThingCardFragment, startIndex: number) => {
            showDialog(ImageGalleryModal, {
                title: `Images for ${thing.name}`,
                startIndex,
                images: thing.images.map((i) => ({
                    id: i.id,
                    description: i.description,
                    url: i.file.url,
                })),
            }).catch(console.log);
        },
        [showDialog],
    );

    const handleEdit = useCallback(
        (thing: ThingCardFragment) => {
            showDialog(EditThingDrawer, { thing });
        },
        [showDialog],
    );

    return (
        <List
            header={
                <Input.Search
                    placeholder="Search..."
                    className={classes.search}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            }
            loading={loading}
            itemLayout="horizontal"
            size="large"
            pagination={pgn.config}
            dataSource={things}
            renderItem={(thing) => (
                <List.Item
                    key={thing.id}
                    actions={[
                        ownsThing(thing, auth.user) ? (
                            <Button
                                title="This is your thing, click to edit"
                                icon={<EditOutlined />}
                                key="edit"
                                onClick={() => handleEdit(thing)}
                            />
                        ) : (
                            <SendMessageButton thing={thing} />
                        ),
                    ]}>
                    <List.Item.Meta
                        avatar={<UserAvatar user={thing.owner} />}
                        title={
                            <Space>
                                <Link href={props.makeUrl(thing)}>{thing.name}</Link>
                                <ThingTypeTag type={thing.type} />
                            </Space>
                        }
                        description={thing.description}
                    />
                    <Space>
                        {thing.images.map((img, index) => (
                            <div key={img.id} className={classes.thumbnail}>
                                <Image
                                    title={img.description}
                                    width={40}
                                    height={40}
                                    objectFit="cover"
                                    alt={img.description || img.file.name}
                                    src={img.file.url}
                                    onClick={() => handleShowGallery(thing, index)}
                                />
                            </div>
                        ))}
                    </Space>
                </List.Item>
            )}
        />
    );
};

export const ThingTypeTag = ({ type }: { type: Thing_Type_Enum }) => {
    return <Tag>{type}</Tag>;
};

const useFormStyles = createUseStyles({
    textarea: {
        resize: 'none',
        marginBottom: '1em',
    },
    contentRoot: {
        maxWidth: 500,
    },
});

export const SendMessageButton = ({ thing }: { thing: ThingCardFragment }) => {
    const classes = useFormStyles();
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
                If you're interested in this thing, let {thing.owner.name} know by sending them a
                message which will include a reference to this thing. Let them know relevant details
                such as when/how much/for what/how many.
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
                <Button disabled={mutation.loading}>Cancel</Button>
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
            visible={visible}
            onVisibleChange={handleVisibleChange}
            arrowPointAtCenter={false}
            trigger="click"
            content={content}>
            <Button
                title={`Let ${thing.owner.name} know you're interested in this`}
                icon={<BellOutlined />}
            />
        </Popover>
    );
};
