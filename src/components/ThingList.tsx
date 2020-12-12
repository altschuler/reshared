import {
    Order_By,
    Thing_Type_Enum,
    ThingCardFragment,
    Things_Bool_Exp,
    useThingListQuery,
} from '../generated/graphql';
import { useAuth } from '../utils/auth';
import { EditThingDrawer, ImageGalleryModal, useDialogs } from './dialogs';
import { usePagination } from '../utils/list';
import { useCallback, useEffect, useState } from 'react';
import { Typography, Button, List, Space, Tag, Input } from 'antd';
import { ownsThing } from '../utils/thing';
import { EditOutlined } from '@ant-design/icons';
import { UserAvatar } from './display';
import Link from 'next/link';
import Image from 'next/image';
import { createUseStyles } from 'react-jss';
import * as React from 'react';
import { useDebounce } from '../utils/hooks';

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
                        ownsThing(thing, auth.user) && (
                            <Button
                                title="This is your thing, click to edit"
                                icon={<EditOutlined />}
                                key="edit"
                                onClick={() => handleEdit(thing)}
                            />
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
                                    objectFit="contain"
                                    alt={img.file.name}
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
