import { ServerInsertGroupJoinRequestDocument } from '../../../generated/server-queries';
import Joi from 'joi';
import { hasuraClient } from '../../../server/hasuraClient';
import { makeHandler } from '../../../server/utils';
import {
    RequestJoinGroupMutationVariables,
    RequestJoinGroupInput,
    RequestJoinGroupResult,
} from '../../../generated/graphql';
import { MailTemplate, sendMail } from '../../../server/mail';

export default makeHandler<RequestJoinGroupMutationVariables, RequestJoinGroupResult>(
    Joi.object<RequestJoinGroupMutationVariables>({
        input: Joi.object<RequestJoinGroupInput>({
            group_id: Joi.string().uuid({ version: 'uuidv4' }),
            message: Joi.string().optional().allow(''),
        }),
    }),
    async (args, ctx) => {
        const mutation = await hasuraClient.mutate({
            mutation: ServerInsertGroupJoinRequestDocument,
            variables: {
                input: {
                    user_id: ctx.token!.id,
                    group_id: args.input.group_id,
                    message: args.input.message,
                },
            },
        });

        ctx.success({
            group_id: mutation.data?.insert_group_join_requests_one?.group_id,
            user_id: ctx.token!.id,
        });

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
