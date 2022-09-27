import Joi from 'joi';
import {
    HandleTransferRequestInput,
    HandleTransferRequestMutationVariables,
    HandleTransferRequestResult,
} from '../../../generated/graphql';
import { makeAuthorizedHandler } from '../../../server';

import {
    ServerChangeThingOwnerDocument,
    ServerFindTransferRequestDocument,
    ServerUpdateTransferRequestDocument,
    Transfer_Request_Status_Enum,
} from '../../../generated/server-queries';

export default makeAuthorizedHandler<
    HandleTransferRequestMutationVariables,
    HandleTransferRequestResult
>(
    Joi.object<HandleTransferRequestMutationVariables>({
        input: Joi.object<HandleTransferRequestInput>({
            transfer_request_id: Joi.string().uuid(),
            accepted: Joi.boolean(),
            response: Joi.string().max(250).allow('').default('').optional(),
        }),
    }),
    async (args, ctx) => {
        const requestId = args.input.transfer_request_id;
        const requestQuery = await ctx.userClient.query({
            query: ServerFindTransferRequestDocument,
            variables: { id: requestId },
        });

        const request = requestQuery.data?.transfer_request_by_pk;

        if (!request) {
            return ctx.error('Request not found');
        }

        // Update the transfer request
        await ctx.userClient.mutate({
            mutation: ServerUpdateTransferRequestDocument,
            variables: {
                id: requestId,
                input: {
                    // response: args.input.response,
                    status: args.input.accepted
                        ? Transfer_Request_Status_Enum.Accepted
                        : Transfer_Request_Status_Enum.Rejected,
                },
            },
        });

        // If it was accepted then change the owner
        if (args.input.accepted) {
            await ctx.adminClient.mutate({
                mutation: ServerChangeThingOwnerDocument,
                variables: { id: request.thing?.id, new_owner_id: request.receiver_id },
            });
        }

        ctx.success({ transfer_request_id: requestId });
    },
);
