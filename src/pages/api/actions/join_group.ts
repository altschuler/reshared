import Joi from 'joi';
import { head } from 'lodash';
import { makeAuthorizedHandler } from '../../../server';
import {
    ServerFindJoinTokenDocument,
    ServerInsertGroupMemberDocument,
} from '../../../generated/server-queries';
import {
    JoinGroupResult,
    JoinGroupInput,
    JoinGroupWithTokenMutationVariables,
    Group_Role_Enum,
} from '../../../generated/graphql';

export default makeAuthorizedHandler<
    JoinGroupWithTokenMutationVariables,
    Omit<JoinGroupResult, 'group' | 'user'>
>(
    Joi.object<JoinGroupWithTokenMutationVariables>({
        input: Joi.object<JoinGroupInput>({
            group_id: Joi.string().uuid({ version: 'uuidv4' }),
            join_token: Joi.string().uuid({ version: 'uuidv4' }).optional(),
        }),
    }),
    async (args, ctx) => {
        // Find the join token, filter disabled and on this group only
        const tokenQuery = await ctx.adminClient.query({
            query: ServerFindJoinTokenDocument,
            variables: {
                where: {
                    disabled: { _eq: false },
                    group_id: { _eq: args.input.group_id },
                    token: { _eq: args.input.join_token },
                },
            },
        });

        const token = head(tokenQuery.data.group_join_tokens);

        // Error if token not found
        if (!token) {
            return ctx.error('Invalid token');
        }

        // Insert new group member
        await ctx.adminClient.mutate({
            mutation: ServerInsertGroupMemberDocument,
            variables: {
                input: {
                    user_id: ctx.token.id,
                    group_id: args.input.group_id,
                    role: Group_Role_Enum.User,
                },
            },
        });

        ctx.success({ group_id: args.input.group_id, user_id: ctx.token.id });

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
