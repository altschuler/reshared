import {
    ServerInsertGroupDocument,
    ServerFindGroupDocument,
} from '../../../generated/server-queries';
import Joi from 'joi';
import { makeAuthorizedHandler, hasuraClient } from '../../../server';
import {
    CreateGroupInput,
    CreateGroupMutationVariables,
    CreateGroupResult,
    Group_Role_Enum,
} from '../../../generated/graphql';
// import { MailTemplate, sendMail } from '../../../server/mail';
import { isEmpty } from 'lodash';

export default makeAuthorizedHandler<CreateGroupMutationVariables, CreateGroupResult>(
    Joi.object<CreateGroupMutationVariables>({
        input: Joi.object<CreateGroupInput>({
            name: Joi.string().min(3),
            description: Joi.string().max(250).allow('').optional(),
            public: Joi.boolean().optional().default(false),
        }),
    }),
    async (args, ctx) => {
        const existing = await hasuraClient.query({
            query: ServerFindGroupDocument,
            variables: { where: { name: { _ilike: args.input.name } } },
        });

        if (!isEmpty(existing.data.groups)) {
            return ctx.error('Name is already taken');
        }

        const mutation = await hasuraClient.mutate({
            mutation: ServerInsertGroupDocument,
            variables: {
                input: {
                    ...args.input,
                    memberships: {
                        data: [{ user_id: ctx.token?.id, role: Group_Role_Enum.Owner }],
                    },
                },
            },
        });

        ctx.success({ group_id: mutation.data?.insert_groups_one?.id });
    },
);
