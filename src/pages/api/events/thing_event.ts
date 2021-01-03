import { makeEventHandler } from '../../../server';
import { Things } from '../../../generated/graphql';
import { ServerFetchThingDetailsDocument } from '../../../generated/server-queries';
import { insertActivities, opToVerb } from '../../../server/activity';

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

    // Don't notify anybody about a thing, group relations are being notified in `group_thing_event`
    await insertActivities(ctx, [
        {
            actorId: ctx.userId,
            entity: { thing_id: id },
            verb: opToVerb(args.event.op),
        },
    ]);

    ctx.success({ success: true });
});
