import { head } from 'lodash';
import Joi from 'joi';
import {
    ServerCreateChatGroupDocument,
    ServerCreateChatMessageDocument,
    ServerFindChatGroupDocument,
} from '../../../generated/server-queries';
import {
    CreateChatGroupInput,
    CreateChatGroupMutationVariables,
    CreateChatGroupResult,
    Entities_Constraint,
    Entities_Update_Column,
} from '../../../generated/graphql';
import { makeAuthorizedHandler } from '../../../server';

export default makeAuthorizedHandler<CreateChatGroupMutationVariables, CreateChatGroupResult>(
    Joi.object<CreateChatGroupMutationVariables>({
        input: Joi.object<CreateChatGroupInput>({
            receiverIds: Joi.array().items(Joi.string().uuid({ version: 'uuidv4' })),
            message: Joi.string().optional().allow(''),
            thing_id: Joi.string().uuid({ version: 'uuidv4' }).optional(),
        }),
    }),
    async (args, ctx) => {
        const memberIds = [ctx.token.id, ...args.input.receiverIds];
        const existingQuery = await ctx.userClient.query({
            query: ServerFindChatGroupDocument,
            variables: {
                where: {
                    // Find groups where all members are part of the ids and no members and not part of it
                    _and: memberIds.map((userId) => ({ members: { user_id: { _eq: userId } } })),
                    _not: { members: { user_id: { _nin: memberIds } } },
                },
            },
        });

        const existing = head(existingQuery.data.chat_groups);
        if (existing) {
            // Add message to existing chat group
            // NOTE: using `dummy` here to be able to upsert the entity
            await ctx.userClient.mutate({
                mutation: ServerCreateChatMessageDocument,
                variables: {
                    input: {
                        sender_id: ctx.token.id,
                        chat_group_id: existing.id,
                        message: args.input.message,
                        ...(args.input.thing_id
                            ? {
                                  entity: {
                                      data: { thing_id: args.input.thing_id, dummy: 1 },
                                      on_conflict: {
                                          constraint: Entities_Constraint.EntitiesThingIdKey,
                                          update_columns: [Entities_Update_Column.Dummy],
                                      },
                                  },
                              }
                            : {}),
                    },
                },
            });

            // because the chat_group field is a lookup
            // @ts-ignore
            return ctx.success({ chat_group_id: existing.id });
        }

        const mutation = await ctx.adminClient.mutate({
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

        // because the chat_group field is a lookup
        // @ts-ignore
        ctx.success({ chat_group_id: mutation.data?.insert_chat_groups_one?.id });
    },
);
