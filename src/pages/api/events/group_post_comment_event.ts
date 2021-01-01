import { makeEventHandler } from '../../../server';
import { Group_Post_Comment } from '../../../generated/graphql';
import { ServerFindPostParticipantsDocument } from '../../../generated/server-queries';
import { insertActivities, opToVerb } from '../../../server/activity';

export default makeEventHandler<Group_Post_Comment>(async (args, ctx) => {
    const groupPostComment = args.event.data.new || args.event.data.old;

    // Find post participants, post author and group info
    const query = await ctx.adminClient.query({
        query: ServerFindPostParticipantsDocument,
        variables: {
            groupPostId: groupPostComment.group_post_id,
            groupPostCommentId: groupPostComment.id,
        },
    });

    const postComment = query.data.postComment;

    if (!postComment) {
        return ctx.error('Post comment not found');
    }

    const commentAuthor = postComment.comment.author;
    const postAuthor = postComment.post.author;

    // Notify post participants and post author but not comment author (post author could be comment author)
    const receivers = [...query.data.participants.map((u) => u.id), postAuthor.id].filter(
        (id) => id !== commentAuthor.id,
    );

    await insertActivities(ctx, [
        {
            actorId: ctx.userId,
            entity: { group_post_comment_id: groupPostComment.id },
            secondaryEntity: { group_id: postComment.post.group_id },
            verb: opToVerb(args.event.op),
            // Only notify on new comments
            receivers: args.event.op === 'INSERT' ? receivers : [],
        },
    ]);

    ctx.success({ success: true });
});
