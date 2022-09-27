import { makeEventHandler } from '../../../server';
import {
    Activity_Verb_Enum,
    Transfer_Request,
    Transfer_Request_Status_Enum,
} from '../../../generated/graphql';
import { insertActivities } from '../../../server/activity';

export default makeEventHandler<Transfer_Request>(async (args, ctx) => {
    const transferRequest = args.event.data.new || args.event.data.old;

    // Insert = notify receiver
    if (args.event.op === 'INSERT') {
        await insertActivities(ctx, [
            {
                actorId: ctx.userId,
                entity: { transfer_request_id: transferRequest.id },
                verb: Activity_Verb_Enum.Added,
                secondaryEntity: { thing_id: transferRequest.thing_id },
                // Notify admins of the group
                receivers: [transferRequest.receiver_id],
            },
        ]);
    }

    if (args.event.op === 'UPDATE') {
        // Was it accepted, reject or cancelled?
        const verb = getUpdateVerb(args.event.data.new!, args.event.data.old!);

        if (!verb) {
            return ctx.success({ success: true, message: 'Skipping non-relevant change' });
        }

        if (verb === Activity_Verb_Enum.Deleted) {
            // Notify the receiver that the request was cancelled
            await insertActivities(ctx, [
                {
                    actorId: ctx.userId,
                    entity: { transfer_request_id: transferRequest.id },
                    verb,
                    receivers: [transferRequest.receiver_id],
                },
            ]);
        } else {
            // Notify the old owner that the request was accepted or rejected
            await insertActivities(ctx, [
                {
                    actorId: ctx.userId,
                    entity: { transfer_request_id: transferRequest.id },
                    verb,
                    receivers: [transferRequest.original_owner_id],
                },
            ]);
        }
    }

    ctx.success({ success: true });
});

const getUpdateVerb = (newReq: Transfer_Request, oldReq: Transfer_Request) => {
    if (newReq.status === oldReq.status) {
        return null;
    }

    switch (newReq.status) {
        case Transfer_Request_Status_Enum.Accepted:
            return Activity_Verb_Enum.Accepted;
        case Transfer_Request_Status_Enum.Rejected:
            return Activity_Verb_Enum.Rejected;
        case Transfer_Request_Status_Enum.Accepted:
            // Using `deleted` to represent `cancelled`
            return Activity_Verb_Enum.Deleted;
        default:
            return null;
    }
};
