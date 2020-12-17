import {
    ServerCreateChatGroupDocument,
    ServerFindChatGroupDocument,
} from '../../../generated/server-queries';
import Joi from 'joi';
import {
    CreateChatGroupInput,
    CreateChatGroupMutationVariables,
    CreateChatGroupResult,
} from '../../../generated/graphql';
import { hasuraClient, makeAuthorizedHandler } from '../../../server';
import { head } from 'lodash';

export default makeAuthorizedHandler<CreateChatGroupMutationVariables, CreateChatGroupResult>(
    Joi.object<CreateChatGroupMutationVariables>({
        input: Joi.object<CreateChatGroupInput>({
            receiverIds: Joi.array().items(Joi.string().uuid({ version: 'uuidv4' })),
            message: Joi.string().optional().allow(''),
        }),
    }),
    async (args, ctx) => {
        const memberIds = [ctx.token.id, ...args.input.receiverIds];
        const existingQuery = await hasuraClient.query({
            query: ServerFindChatGroupDocument,
            variables: {
                where: {
                    _and: memberIds.map((userId) => ({
                        members: { user_id: { _eq: userId } },
                    })),
                },
            },
        });

        const existing = head(existingQuery.data.chat_groups);
        if (existing) {
            // TODO: add message
            return ctx.success({ chat_group_id: existing.id });
        }

        const mutation = await hasuraClient.mutate({
            mutation: ServerCreateChatGroupDocument,
            variables: {
                input: {
                    name: '',
                    members: {
                        data: memberIds.map((userId) => ({ user_id: userId })),
                    },
                    messages: args.input.message
                        ? // TODO: sender_id should be set automatically
                          { data: [{ message: args.input.message, sender_id: ctx.token.id }] }
                        : undefined,
                },
            },
        });

        ctx.success({ chat_group_id: mutation.data?.insert_chat_groups_one?.id });
    },
);
