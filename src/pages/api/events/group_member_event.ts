﻿import { makeEventHandler } from '../../../server';
import { Group_Members } from '../../../generated/graphql';
import { ServerFindGroupMembersDocument } from '../../../generated/server-queries';
import { insertActivities, opToVerb } from '../../../server/activity';

export default makeEventHandler<Group_Members>(async (args, ctx) => {
    const membership = args.event.data.new || args.event.data.old;

    // Find all members except the new member
    const query = await ctx.adminClient.query({
        query: ServerFindGroupMembersDocument,
        variables: {
            groupId: membership.group_id,
            where: { user_id: { _neq: membership.user_id } },
        },
    });

    const group = query.data.groups_by_pk;

    if (!group) {
        return ctx.error('Group not found');
    }

    const memberIds = group.memberships.map((m) => m.user.id);

    await insertActivities(ctx, [
        {
            groupId: membership.group_id,
            actorId: membership.user_id,
            entity: { group_member_id: membership.id },
            verb: opToVerb(args.event.op),
            // Notify all users in group except the new member, and only when joining
            receivers: args.event.op === 'INSERT' ? memberIds : [],
        },
    ]);

    ctx.success({ success: true });
}, true);
