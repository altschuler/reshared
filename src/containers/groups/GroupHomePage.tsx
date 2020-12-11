import { Alert, Button, List } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { GroupLayout } from './GroupLayout';
import {
    GroupCardFragment,
    GroupDetailsFragment,
    Order_By,
    ThingCardFragment,
    useThingListQuery,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { usePagination } from '../../utils/list';
import { UserAvatar } from '../../components/display';
import { useCallback, useEffect } from 'react';
import { useDialogs, ImageGalleryModal, EditThingDrawer } from '../../components/dialogs';
import { useAuth } from '../../utils/auth';
import { ownsThing } from '../../utils/thing';

export interface GroupHomePageProps {
    group?: GroupDetailsFragment | null;
    error?: string;
}

export const GroupHomePage = (props: GroupHomePageProps) => {
    const group = props.group;
    const { isAdmin } = useMembership(group);

    if (props.error || !group) {
        return <Alert message={props.error} />;
    }

    return (
        <GroupLayout activePage="home" group={group}>
            {isAdmin && <span>Invite others to join your group.</span>}

            <hr />

            <ThingList group={group} />
        </GroupLayout>
    );
};

export interface ThingListProps {
    initial?: ThingCardFragment[];
    group: GroupCardFragment;
}

export const ThingList = ({ initial, group }: ThingListProps) => {
    const auth = useAuth();
    const { showDialog } = useDialogs();
    const pgn = usePagination();

    const { data, loading, error } = useThingListQuery({
        variables: {
            limit: pgn.limit,
            offset: pgn.offset,
            orderBy: [{ created_at: Order_By.Desc }],
            where: { group_relations: { group_id: { _eq: group?.id } } },
        },
    });

    const things = data?.things || [];
    const total = data?.things_aggregate.aggregate?.count || 0;
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
            loading={loading}
            itemLayout="horizontal"
            size="large"
            pagination={pgn.config}
            dataSource={things}
            renderItem={(thing) => (
                <List.Item key={thing.id} actions={[]}>
                    <List.Item.Meta
                        avatar={<UserAvatar user={thing.owner} />}
                        title={
                            <Link href={`/groups/${group.id}/things/${thing.id}`}>
                                {thing.name}
                            </Link>
                        }
                        description={'Something something'}
                    />
                    {thing.images.map((img, index) => (
                        <Image
                            key={img.id}
                            title={img.description}
                            width={40}
                            height={40}
                            alt={img.file.name}
                            src={img.file.url}
                            onClick={() => handleShowGallery(thing, index)}
                        />
                    ))}
                    {ownsThing(thing, auth.user) && (
                        <Button onClick={() => handleEdit(thing)}>Edit</Button>
                    )}
                </List.Item>
            )}
        />
    );
};
