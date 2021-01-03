import { makeEventHandler } from '../../../server';
import { Group_Thing } from '../../../generated/graphql';
import { ServerFindGroupMembersDocument } from '../../../generated/server-queries';
import { insertActivities, opToVerb } from '../../../server/activity';

export default makeEventHandler<Group_Thing>(async (args, ctx) => {
    const groupThing = args.event.data.new || args.event.data.old;
    // Find members except the actor
    const query = await ctx.adminClient.query({
        query: ServerFindGroupMembersDocument,
        variables: { groupId: groupThing.group_id, where: { user_id: { _neq: ctx.userId } } },
    });

    const group = query.data.groups_by_pk;
    if (!group) {
        return ctx.error('Group not found');
    }

    const memberIds = group.memberships.map((m) => m.user.id);

    await insertActivities(ctx, [
        {
            groupId: groupThing.group_id,
            actorId: ctx.userId,
            entity: { group_thing_id: groupThing.id },
            verb: opToVerb(args.event.op),
            // Notify all users in group except creator, and only on insert
            receivers: args.event.op === 'INSERT' ? memberIds : [],
        },
    ]);

    ctx.success({ success: true });
});
