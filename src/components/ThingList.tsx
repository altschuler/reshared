import { EditOutlined, PictureOutlined } from '@ant-design/icons';
import { Button, List, Space } from 'antd';
import { head } from 'lodash-es';
import Link from 'next/link';
import { ReactNode, useCallback, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import {
    Order_By,
    ThingCardFragment,
    Things_Bool_Exp,
    Things_Order_By,
    useThingListQuery,
} from '../generated/graphql';
import { useAuth } from '../utils/auth';
import { usePagination } from '../utils/list';
import { ownsThing } from '../utils/thing';
import { urlFor } from '../utils/urls';
import { EditThingDrawer, useDialogs } from './dialogs';
import { ThingImageDisplay, ThingTypeTag, UserAvatar } from './display';
import { ThingInterestButton } from './ThingInterestButton';

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
    where?: Things_Bool_Exp;
    things?: ThingCardFragment[];
    skip?: boolean;
    orderBy?: Things_Order_By[];
    emptyText?: ReactNode;
    header?: ReactNode;
    extra?: ReactNode;
}

export const ThingList = (props: ThingListProps) => {
    const { showDialog } = useDialogs();
    const pgn = usePagination();
    const classes = useStyles();

    const { data, previousData, loading } = useThingListQuery({
        skip: !!props.things || props.skip,
        variables: {
            limit: pgn.limit,
            offset: pgn.offset,
            orderBy: [{ created_at: Order_By.Desc }],
            where: {
                _and: [props.where || {}],
            },
        },
    });

    const results = data || previousData;
    const things = props.things || results?.things || previousData?.things || [];
    const total = props.things?.length || results?.things_aggregate.aggregate?.count || 0;

    useEffect(() => pgn.setTotal(total), [total, pgn]);

    const handleEdit = useCallback(
        (thing: ThingCardFragment) => showDialog(EditThingDrawer, { thing }),
        [showDialog],
    );

    return (
        <List
            header={props.header}
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
                        onClick={props.onEdit}>
                        Edit
                    </Button>
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
