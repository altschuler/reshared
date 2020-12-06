import { makeEventHandler } from '../../../server';
import { Groups } from '../../../generated/graphql';
import { ServerFindGroupMembersDocument } from '../../../generated/server-queries';
import { insertActivities, opToVerb } from '../../../server/activity';

export default makeEventHandler<Groups>(async (args, ctx) => {
    const groupId = (args.event.data.new || args.event.data.old).id;
    // Find members except the actor
    const query = await ctx.adminClient.query({
        query: ServerFindGroupMembersDocument,
        variables: { groupId, where: { user_id: { _neq: ctx.userId } } },
    });

    if (!query.data.groups_by_pk) {
        return ctx.error('Group not found');
    }

    const memberIds = query.data.groups_by_pk.memberships.map((m) => m.user.id);

    await insertActivities(ctx, [
        {
            actorId: ctx.userId,
            entity: { group_id: groupId },
            verb: opToVerb(args.event.op),
            // Notify all users in group except actor owner, and only on update and delete
            receivers: args.event.op === 'UPDATE' || args.event.op === 'DELETE' ? memberIds : [],
        },
    ]);

    ctx.success({ success: true });
});
