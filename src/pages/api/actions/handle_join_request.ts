import Joi from 'joi';
import { adminClient, makeAuthorizedHandler } from '../../../server';
import {
    Group_Join_Request_Status_Enum,
    Group_Role_Enum,
    HandleJoinRequestInput,
    HandleJoinRequestMutationVariables,
    HandleJoinRequestResult,
} from '../../../generated/graphql';
import {
    ServerFindGroupJoinRequestDocument,
    ServerInsertGroupMemberDocument,
    ServerUpdateGroupJoinRequestDocument,
} from '../../../generated/server-queries';

export default makeAuthorizedHandler<HandleJoinRequestMutationVariables, HandleJoinRequestResult>(
    Joi.object<HandleJoinRequestMutationVariables>({
        input: Joi.object<HandleJoinRequestInput>({
            join_request_id: Joi.string().uuid(),
            accepted: Joi.boolean(),
            response: Joi.string().max(250).allow('').default('').optional(),
        }),
    }),
    async (args, ctx) => {
        // TODO: use ctx.userClient and test
        const requestQuery = await adminClient.query({
            query: ServerFindGroupJoinRequestDocument,
            variables: { id: args.input.join_request_id },
        });

        const request = requestQuery.data?.group_join_requests_by_pk;

        if (!request) {
            return ctx.error('Request not found');
        }

        // Update the join request
        await ctx.userClient.mutate({
            mutation: ServerUpdateGroupJoinRequestDocument,
            variables: {
                id: args.input.join_request_id,
                input: {
                    response: args.input.response,
                    responder_id: ctx.token?.id,
                    status: args.input.accepted
                        ? Group_Join_Request_Status_Enum.Accepted
                        : Group_Join_Request_Status_Enum.Rejected,
                },
            },
        });

        // If it was accepted then add the new member to the group
        if (args.input.accepted) {
            await ctx.adminClient.mutate({
                mutation: ServerInsertGroupMemberDocument,
                variables: {
                    input: {
                        user_id: request.user_id,
                        group_id: request.group_id,
                        role: Group_Role_Enum.User,
                    },
                },
            });
        }

        ctx.success({ join_request_id: args.input.join_request_id });
    },
);
