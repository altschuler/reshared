import {
    Order_By,
    ThingCardFragment,
    Things_Bool_Exp,
    Things_Order_By,
    useThingListQuery,
} from '../generated/graphql';
import { head } from 'lodash';
import { useAuth } from '../utils/auth';
import { EditThingDrawer, useDialogs } from './dialogs';
import { usePagination } from '../utils/list';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Input, List, Space } from 'antd';
import { ownsThing } from '../utils/thing';
import { EditOutlined, PictureOutlined } from '@ant-design/icons';
import { ThingTypeTag, ImageThumbList, UserAvatar } from './display';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';
import { useDebounce } from '../utils/hooks';
import { ThingInterestButton } from './ThingInterestButton';
import { urlFor } from '../utils/urls';
import Image from 'next/image';
import { useNhostClient } from '@nhost/react';
import { ThingImageDisplay } from './display/ImageDisplay';

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
    skip?: boolean;
    orderBy?: Things_Order_By[];
    hideSearch?: boolean;
    emptyText?: ReactNode | (() => ReactNode);
    header?: ReactNode;
    extra?: ReactNode;
}

export const ThingList = (props: ThingListProps) => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 300);
    const { showDialog } = useDialogs();
    const pgn = usePagination();
    const classes = useStyles();

    const { data, previousData, loading } = useThingListQuery({
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

    const results = data || previousData;
    const things = results?.things || previousData?.things || [];
    const total = results?.things_aggregate.aggregate?.count || 0;

    useEffect(() => pgn.setTotal(total), [total, pgn]);

    const handleEdit = useCallback(
        (thing: ThingCardFragment) => showDialog(EditThingDrawer, { thing }),
        [showDialog],
    );

    return (
        <List
            header={
                props.header ||
                (!props.hideSearch && (
                    <Input.Search
                        size="large"
                        placeholder="Search..."
                        className={classes.search}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                ))
            }
            extra={props.extra}
            loading={loading}
            itemLayout="horizontal"
            size="large"
            pagination={pgn.config}
            dataSource={things}
            locale={props.emptyText ? { emptyText: props.emptyText } : undefined}
            renderItem={(thing) => (
                <ThingItem key={thing.id} thing={thing} onEdit={() => handleEdit(thing)} />
            )}
        />
    );
};

interface ThingItemProps {
    thing: ThingCardFragment;
    onEdit: () => unknown;
}

const ThingItem = (props: ThingItemProps) => {
    const auth = useAuth();
    const image = head(props.thing.images);
    const nhost = useNhostClient();

    const avatar = (
        <div style={{ width: 50, height: 50 }}>
            {image ? (
                <ThingImageDisplay image={image} thing={props.thing} width={50} height={50} />
            ) : (
                <PictureOutlined style={{ fontSize: 50, opacity: 0.07 }} />
            )}
        </div>
    );

    return (
        <List.Item
            actions={[
                ownsThing(props.thing, auth.user) ? (
                    <Button
                        title="This is your thing, click to edit"
                        icon={<EditOutlined />}
                        key="edit"
                        onClick={props.onEdit}
                    />
                ) : (
                    <ThingInterestButton thing={props.thing} />
                ),
            ]}>
            <List.Item.Meta
                avatar={avatar}
                title={
                    <Space>
                        <Link href={urlFor.thing(props.thing)}>{props.thing.name}</Link>
                        <ThingTypeTag type={props.thing.type} />
                    </Space>
                }
                description={props.thing.description}
            />

            <UserAvatar user={props.thing.owner} />
        </List.Item>
    );
    // <ImageThumbList thing={props.thing} />;
};
