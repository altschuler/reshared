import { makeEventHandler } from '../../../server';
import { Activity_Verb_Enum, Entities_Constraint, Things } from '../../../generated/graphql';
import {
    FetchThingDetailsDocument,
    InsertActivitiesDocument,
} from '../../../generated/server-queries';

export default makeEventHandler<Things>(async (args, ctx) => {
    if (args.event.op === 'INSERT') {
        const id = (args.event.data.new || args.event.data.old).id;
        const details = await ctx.adminClient.query({
            query: FetchThingDetailsDocument,
            variables: { id },
        });

        const thing = details.data.things_by_pk;

        if (!thing) {
            return ctx.error('Thing not found');
        }

        const groups = thing.group_relations.map((r) => r.group);

        await Promise.all(
            groups.map((group) => {
                const receivers = group.memberships
                    .map((m) => m.user)
                    .filter((u) => u.id !== thing.owner.id);

                return ctx.adminClient.mutate({
                    mutation: InsertActivitiesDocument,
                    variables: {
                        input: [
                            {
                                actor_id: thing.owner.id,
                                verb: Activity_Verb_Enum.Added,
                                entity: {
                                    data: { thing_id: id },
                                    on_conflict: {
                                        constraint: Entities_Constraint.EntitiesThingIdKey,
                                        update_columns: [],
                                    },
                                },
                                // Notify all users in group except thing owner
                                notifications: {
                                    data: receivers.map((u) => ({ user_id: u.id })),
                                },
                            },
                        ],
                    },
                });
            }),
        );
    }

    ctx.success({ success: true });
});
