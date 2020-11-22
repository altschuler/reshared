import Joi from 'joi';
import { hasuraClient, makeAuthorizedHandler } from '../../../server';
import {
    HandleJoinRequestInput,
    HandleJoinRequestMutationVariables,
    HandleJoinRequestResult,
} from '../../../generated/graphql';
import {
    ServerAcceptGroupJoinRequestDocument,
    ServerRejectGroupJoinRequestDocument,
    ServerFindGroupJoinRequestDocument,
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
        const requestQuery = await hasuraClient.query({
            query: ServerFindGroupJoinRequestDocument,
            variables: { id: args.input.join_request_id },
        });

        const request = requestQuery.data?.group_join_requests_by_pk;

        if (!request) {
            return ctx.error('Request not found');
        }

        if (args.input.accepted) {
            await ctx.userClient.mutate({
                mutation: ServerAcceptGroupJoinRequestDocument,
                variables: {
                    id: args.input.join_request_id,
                    response: args.input.response,
                    responder_id: ctx.token?.id,
                    group_id: request.group_id,
                    user_id: request.user_id,
                },
            });
        } else {
            await ctx.userClient.mutate({
                mutation: ServerRejectGroupJoinRequestDocument,
                variables: {
                    id: args.input.join_request_id,
                    response: args.input.response,
                    responder_id: ctx.token?.id,
                },
            });
        }

        ctx.success({ join_request_id: args.input.join_request_id });
        // TODO: email requestee
        //
        // sendMail({
        //     to: 'simon@altschuler.dk',
        //     templateId: MailTemplate.VerifyEmail,
        //     dynamicTemplateData: {
        //         token: 'thisisnotreal',
        //     },
        // })
        //     .then(() => console.log('mail sent'))
        //     .catch((err) => console.log(err));
    },
);
