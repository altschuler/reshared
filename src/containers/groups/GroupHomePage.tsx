import { useRouter } from 'next/router';
import { Alert, message, Modal, Spin } from 'antd';
import { GroupLayout } from './GroupLayout';
import {
    GqlOps,
    useCreateThingMutation,
    useGroupDetailsQuery,
    useThingListQuery,
} from '../../generated/graphql';
import { useMembership } from '../../utils/group';
import { asThingCreateInput, ThingEditor, useThingEditor } from '../../components/editors';
import { ThingCard } from '../../components/display';

export const GroupHomePage = () => {
    const router = useRouter();
    const { id } = router.query;

    const thingEditorState = useThingEditor();
    const { data, loading, error } = useGroupDetailsQuery({ variables: { id: id as string } });
    const [createThing, createThingMutation] = useCreateThingMutation({
        refetchQueries: [GqlOps.Query.ThingList],
    });

    const group = data?.groups_by_pk;
    const { isAdmin } = useMembership(group);
    const thingsQuery = useThingListQuery({
        skip: !group,
        variables: { where: { group_relations: { group_id: { _eq: group?.id } } } },
    });

    if (loading) {
        return <Spin />;
    }

    if (error || !group) {
        return <Alert message={error?.message || 'Group does not exist'} />;
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
            <div>
                {thingsQuery.data?.things.map((t) => (
                    <ThingCard key={t.id} thing={t} />
                ))}
            </div>
        </GroupLayout>
    );
};
