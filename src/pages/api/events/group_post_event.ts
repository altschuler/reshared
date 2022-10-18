import { Activity_Verb_Enum, Group_Posts } from '../../../generated/graphql';
import {
    ServerFindGroupMembersDocument,
    ServerFindPostParticipantsDocument,
} from '../../../generated/server-queries';
import { makeEventHandler } from '../../../server';
import { insertActivities, opToVerb } from '../../../server/activity';

export default makeEventHandler<Group_Posts>(async (args, ctx) => {
    const groupPost = args.event.data.new || args.event.data.old;
    // Find members except the actor
    const query = await ctx.adminClient.query({
        query: ServerFindGroupMembersDocument,
        variables: { groupId: groupPost.group_id, where: { user_id: { _neq: ctx.userId } } },
    });

    const group = query.data.groups_by_pk;
    if (!group) {
        return ctx.error('Group not found');
    }

    const memberIds = group.memberships.map((m) => m.user.id);

    // We only care about resolved status updates
    if (args.event.op === 'UPDATE') {
        if (
            args.event.data.old &&
            args.event.data.new &&
            args.event.data.old.resolved != args.event.data.new.resolved
        ) {
            const query = await ctx.adminClient.query({
                query: ServerFindPostParticipantsDocument,
                variables: {
                    postId: groupPost.id,
                },
            });

            // Notify post participants, but not the actor (usually the author, but if an
            // admin could do it, the author should be notified too)
            const receivers = [...query.data.participants.map((u) => u.id)].filter(
                (id) => id !== groupPost.author_id,
            );
            await insertActivities(ctx, [
                {
                    groupId: groupPost.group_id,
                    actorId: ctx.userId,
                    entity: { group_post_id: groupPost.id },
                    verb: Activity_Verb_Enum.Resolved,
                    receivers,
                },
            ]);
        }
        return ctx.success({ success: true });
    }

    // Notify all users in group except actor owner, and only on insert
    if (args.event.op === 'INSERT') {
        await insertActivities(ctx, [
            {
                groupId: groupPost.group_id,
                actorId: ctx.userId,
                entity: { group_post_id: groupPost.id },
                verb: opToVerb(args.event.op),
                receivers: args.event.op === 'INSERT' ? memberIds : [],
            },
        ]);
        return ctx.success({ success: true });
    }

    return ctx.success({ success: true, message: 'ok: skipping event' });
});
