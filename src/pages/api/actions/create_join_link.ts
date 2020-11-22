import { ServerInsertGroupJoinTokenDocument } from '../../../generated/server-queries';
import Joi from 'joi';
import { makeAuthorizedHandler } from '../../../server';
import {
    RequestJoinGroupMutationVariables,
    RequestJoinGroupInput,
    RequestJoinGroupResult,
} from '../../../generated/graphql';

export default makeAuthorizedHandler<RequestJoinGroupMutationVariables, RequestJoinGroupResult>(
    Joi.object<RequestJoinGroupMutationVariables>({
        input: Joi.object<RequestJoinGroupInput>({
            group_id: Joi.string().uuid({ version: 'uuidv4' }),
            message: Joi.string().optional().allow(''),
        }),
    }),
    async (args, ctx) => {
        const mutation = await ctx.userClient.mutate({
            mutation: ServerInsertGroupJoinTokenDocument,
            variables: {
                input: {
                    group_id: args.input.group_id,
                },
            },
        });

        // ctx.success({
        //     group_id: mutation.data?.insert_group_join_requests_one?.group_id,
        //     user_id: ctx.token!.id,
        // });

        // Send mail
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
