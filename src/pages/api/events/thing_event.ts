import { makeEventHandler } from '../../../server';
import { Things } from '../../../generated/graphql';
import { ServerFetchThingDetailsDocument } from '../../../generated/server-queries';
import { ActivityInput, insertActivities, opToVerb } from '../../../server/activity';

export default makeEventHandler<Things>(async (args, ctx) => {
    const id = (args.event.data.new || args.event.data.old).id;
    const details = await ctx.adminClient.query({
        query: ServerFetchThingDetailsDocument,
        variables: { id },
    });

    const thing = details.data.things_by_pk;

    if (!thing) {
        return ctx.error('Thing not found');
    }

    const groups = thing.group_relations.map((r) => r.group);

    const inserts = groups.map(
        (group): ActivityInput => ({
            actorId: ctx.userId,
            entity: { thing_id: id },
            verb: opToVerb(args.event.op),
            secondaryEntity: { group_id: group.id },
            // Notify all users in group except thing owner, and only on insert
            receivers:
                args.event.op === 'INSERT'
                    ? group.memberships
                          .filter((m) => m.user.id !== thing.owner.id)
                          .map((m) => m.user.id)
                    : [],
        }),
    );

    await insertActivities(ctx, inserts);

    ctx.success({ success: true });
});
