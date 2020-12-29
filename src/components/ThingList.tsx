import {
    Order_By,
    Thing_Type_Enum,
    ThingCardFragment,
    Things_Bool_Exp,
    Things_Order_By,
    useThingListQuery,
} from '../generated/graphql';
import { useAuth } from '../utils/auth';
import { EditThingDrawer, ImageGalleryModal, useDialogs } from './dialogs';
import { usePagination } from '../utils/list';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button, Input, List, Space, Tag } from 'antd';
import { ownsThing } from '../utils/thing';
import { EditOutlined } from '@ant-design/icons';
import { UserAvatar } from './display';
import Link from 'next/link';
import Image from 'next/image';
import { createUseStyles } from 'react-jss';
import { useDebounce } from '../utils/hooks';
import { ThingInterestButton } from './ThingInterestButton';
import { urlFor } from '../utils/urls';
import { ThingTypeTag } from './display/ThingTypeTag';

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
}

export const ThingList = (props: ThingListProps) => {
    const auth = useAuth();
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

    const handleShowGallery = useCallback(
        (thing: ThingCardFragment, startIndex: number) =>
            showDialog(ImageGalleryModal, {
                title: `Images for ${thing.name}`,
                startIndex,
                images: thing.images.map((i) => ({
                    id: i.id,
                    description: i.description,
                    url: i.file.url,
                })),
            }),
        [showDialog],
    );

    const handleEdit = useCallback(
        (thing: ThingCardFragment) => showDialog(EditThingDrawer, { thing }),
        [showDialog],
    );

    return (
        <List
            header={
                !props.hideSearch && (
                    <Input.Search
                        placeholder="Search..."
                        className={classes.search}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                )
            }
            loading={loading}
            itemLayout="horizontal"
            size="large"
            pagination={pgn.config}
            dataSource={things}
            locale={props.emptyText ? { emptyText: props.emptyText } : undefined}
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
                            <ThingInterestButton thing={thing} />
                        ),
                    ]}>
                    <List.Item.Meta
                        avatar={<UserAvatar user={thing.owner} />}
                        title={
                            <Space>
                                <Link href={urlFor.thing(thing)}>{thing.name}</Link>
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
