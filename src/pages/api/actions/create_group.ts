import { InsertGroupDocument } from '../../../generated/server-queries';
import Joi from 'joi';
import { hasuraClient } from '../../../server/hasuraClient';
import { makeHandler } from '../../../server/utils';
import {
    CreateGroupInput,
    CreateGroupResult,
    CreateGroupMutationVariables,
    Group_Role_Enum,
} from '../../../generated/graphql';

export default makeHandler<CreateGroupMutationVariables, CreateGroupResult>(
    Joi.object<CreateGroupMutationVariables>({
        input: Joi.object<CreateGroupInput>({
            name: Joi.string().min(3),
            description: Joi.string().optional(),
            public: Joi.boolean().optional().default(false),
        }),
    }),
    async (args, ctx) => {
        const mutation = await hasuraClient.mutate({
            mutation: InsertGroupDocument,
            variables: {
                input: {
                    ...args.input,
                    memberships: {
                        data: [{ user_id: ctx.token?.id, role: Group_Role_Enum.Admin }],
                    },
                },
            },
        });

        ctx.success({ group_id: mutation.data?.insert_groups_one?.id });
    },
);
