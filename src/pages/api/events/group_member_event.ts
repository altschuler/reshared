import { makeEventHandler } from '../../../server';
import { Activity_Verb_Enum, Group_Members } from '../../../generated/graphql';
import { ServerFindGroupMembersDocument } from '../../../generated/server-queries';
import { insertActivities } from '../../../server/activity';

export default makeEventHandler<Group_Members>(async (args, ctx) => {
    // Only notify when joining
    if (args.event.op !== 'INSERT') {
        return ctx.success({ success: true, message: 'ok: skipping for non-join event' });
    }

    const membership = args.event.data.new || args.event.data.old;

    // Find all members except the new member
    const query = await ctx.adminClient.query({
        query: ServerFindGroupMembersDocument,
        variables: {
            groupId: membership.group_id,
            where: { user_id: { _neq: membership.user_id } },
        },
    });

    if (!query.data.groups_by_pk) {
        return ctx.error('Group not found');
    }

    const memberIds = query.data.groups_by_pk.memberships.map((m) => m.user.id);

    await insertActivities(ctx, [
        {
            actorId: membership.user_id,
            entity: { group_id: membership.group_id },
            verb: Activity_Verb_Enum.Joined,
            // Notify all users in group except the new member
            receivers: memberIds,
        },
    ]);

    ctx.success({ success: true });
}, true);
