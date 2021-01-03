import { makeEventHandler } from '../../../server';
import {
    Activity_Verb_Enum,
    Group_Join_Request_Status_Enum,
    Group_Join_Requests,
    Group_Role_Enum,
} from '../../../generated/graphql';
import { ServerFindGroupMembersDocument } from '../../../generated/server-queries';
import { insertActivities } from '../../../server/activity';

export default makeEventHandler<Group_Join_Requests>(async (args, ctx) => {
    const joinRequest = args.event.data.new || args.event.data.old;

    // Insert = notify admins
    if (args.event.op === 'INSERT') {
        const adminsQuery = await ctx.adminClient.query({
            query: ServerFindGroupMembersDocument,
            variables: {
                groupId: joinRequest.group_id,
                where: { role: { _in: [Group_Role_Enum.Admin, Group_Role_Enum.Owner] } },
            },
        });

        const adminIds = adminsQuery.data.groups_by_pk?.memberships.map((m) => m.user.id);

        await insertActivities(ctx, [
            {
                groupId: joinRequest.group_id,
                actorId: ctx.userId,
                entity: { join_request_id: joinRequest.id },
                verb: Activity_Verb_Enum.Added,
                secondaryEntity: { group_id: joinRequest.group_id },
                // Notify admins of the group
                receivers: adminIds,
            },
        ]);
    }

    if (args.event.op === 'UPDATE') {
        // Was it accepted?
        const verb = getUpdateVerb(args.event.data.new!, args.event.data.old!);

        if (!verb) {
            return ctx.success({ success: true, message: 'Skipping non-relevant change' });
        }

        await insertActivities(ctx, [
            {
                groupId: joinRequest.group_id,
                actorId: ctx.userId,
                entity: { join_request_id: joinRequest.id },
                verb,
                // Notify the requester
                receivers: [joinRequest.user_id],
            },
        ]);
    }

    ctx.success({ success: true });
});

const getUpdateVerb = (newReq: Group_Join_Requests, oldReq: Group_Join_Requests) => {
    if (newReq.status === oldReq.status) {
        return null;
    }

    switch (newReq.status) {
        case Group_Join_Request_Status_Enum.Accepted:
            return Activity_Verb_Enum.Accepted;
        case Group_Join_Request_Status_Enum.Rejected:
            return Activity_Verb_Enum.Rejected;
        default:
            return null;
    }
};
