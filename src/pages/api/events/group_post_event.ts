import { makeEventHandler } from '../../../server';
import { Group_Posts } from '../../../generated/graphql';
import { ServerFindGroupMembersDocument } from '../../../generated/server-queries';
import { insertActivities, opToVerb } from '../../../server/activity';

export default makeEventHandler<Group_Posts>(async (args, ctx) => {
    const groupPost = args.event.data.new || args.event.data.old;
    // Find members except the actor
    const query = await ctx.adminClient.query({
        query: ServerFindGroupMembersDocument,
        variables: { groupId: groupPost.group_id, where: { user_id: { _neq: ctx.userId } } },
    });

    if (!query.data.groups_by_pk) {
        return ctx.error('Group not found');
    }

    const memberIds = query.data.groups_by_pk.memberships.map((m) => m.user.id);

    console.log(groupPost);
    await insertActivities(ctx, [
        {
            actorId: ctx.userId,
            entity: { group_post_id: groupPost.id },
            secondaryEntity: { group_id: groupPost.group_id },
            verb: opToVerb(args.event.op),
            // Notify all users in group except actor owner, and only on insert
            receivers: args.event.op === 'INSERT' ? memberIds : [],
        },
    ]);

    ctx.success({ success: true });
});
