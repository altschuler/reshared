import { Alert, List, message, Modal } from 'antd';
import { GroupLayout } from './GroupLayout';
import {
    GqlOps,
    GroupCardFragment,
    GroupDetailsFragment,
    Order_By,
    ThingCardFragment,
    useCreateThingMutation,
    useThingListQuery,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { asThingCreateInput, ThingEditor, useThingEditor } from '../../components/editors';
import Link from 'next/link';
import { usePagination } from '../../utils/list';
import { UserAvatar } from '../../components/display';
import { useEffect } from 'react';

export interface GroupHomePageProps {
    group?: GroupDetailsFragment | null;
    error?: string;
}

export const GroupHomePage = (props: GroupHomePageProps) => {
    const thingEditorState = useThingEditor({ name: '', groups: props.group ? [props.group] : [] });
    const [createThing, createThingMutation] = useCreateThingMutation({
        refetchQueries: [GqlOps.Query.ThingList],
    });

    const group = props.group;
    const { isAdmin } = useMembership(group);

    if (props.error || !group) {
        return <Alert message={props.error} />;
    }

    const handleSubmit = () => {
        const input = asThingCreateInput(thingEditorState);
        createThing({ variables: { input } })
            .then(() => message.success('Thing created'))
            .catch((err) => Modal.error({ title: 'Failed to create thing', content: err.message }));
    };

    return (
        <GroupLayout activePage="home" group={group}>
            {isAdmin && <span>Invite others to join your group.</span>}
            <ThingEditor state={thingEditorState} onSubmit={handleSubmit} />
            <hr />

            <ThingList group={group} />
        </GroupLayout>
    );
};

export interface ThingListProps {
    initial?: ThingCardFragment[];
    group: GroupCardFragment;
}

// <div>
//     {thingsQuery.data?.things.map((t) => (
//         <ThingCard key={t.id} thing={t} />
//     ))}
// </div>
export const ThingList = ({ initial, group }: ThingListProps) => {
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

    return (
        <List
            loading={loading}
            itemLayout="horizontal"
            size="large"
            pagination={pgn.config}
            dataSource={things}
            renderItem={(thing) => (
                <List.Item key={thing.name} actions={[]}>
                    <List.Item.Meta
                        avatar={<UserAvatar user={thing.owner} />}
                        title={
                            <Link href={`/groups/${group.id}/things/${thing.id}`}>
                                {thing.name}
                            </Link>
                        }
                        description={'Something something'}
                    />
                </List.Item>
            )}
        />
    );
};
