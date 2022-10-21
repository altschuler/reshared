import { Activity_Verb_Enum, Group_Members, Group_Role_Enum } from '../../../generated/graphql';
import { ServerFindGroupMembersDocument } from '../../../generated/server-queries';
import { HasuraEventPayload, makeEventHandler } from '../../../server';
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

    // Don't add a join event for the creator (there's a group created activity)
    if (group?.creator_id === membership.user_id) {
        return ctx.success({ success: true });
    }

    if (!group) {
        return ctx.error('Group not found');
    }

    const memberIds = group.memberships.map((m) => m.user.id);

    await insertActivities(ctx, [
        {
            groupId: membership.group_id,
            actorId: ctx.userId,
            entity: { group_member_id: membership.id },
            verb: getVerb(args),
            receivers: getReceivers(args, memberIds),
        },
    ]);

    ctx.success({ success: true });
}, true);

const getVerb = (args: HasuraEventPayload<Group_Members>) => {
    const { old: o, new: n } = args.event.data;
    const { Admin, User, Owner } = Group_Role_Enum;
    const isUpdate = args.event.op === 'UPDATE';

    // Became admin
    if (isUpdate && o?.role === User && n?.role === Admin) {
        return Activity_Verb_Enum.BecameAdmin;
    }

    // Revoked admin
    if (isUpdate && o?.role === Admin && n?.role === User) {
        return Activity_Verb_Enum.RevokedAdmin;
    }

    // Became owner
    if (isUpdate && n?.role === Owner) {
        return Activity_Verb_Enum.BecameOwner;
    }

    return opToVerb(args.event.op);
};

const getReceivers = (args: HasuraEventPayload<Group_Members>, memberIds: string[]) => {
    // Notify all users in group except the new member, and only when joining
    if (args.event.op === 'INSERT') {
        return memberIds;
    }

    // Notify changed user
    if (args.event.op === 'UPDATE') {
        return [args.event.data.new!.user_id];
    }

    return [];
};
