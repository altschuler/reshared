import Joi from 'joi';
import { ServerCreateChatMessageDocument } from '../../../generated/server-queries';
import {
    CreateChatMessageInput,
    CreateChatMessageMutationVariables,
    CreateChatMessageResult,
} from '../../../generated/graphql';
import { makeAuthorizedHandler } from '../../../server';

export default makeAuthorizedHandler<CreateChatMessageMutationVariables, CreateChatMessageResult>(
    Joi.object<CreateChatMessageMutationVariables>({
        input: Joi.object<CreateChatMessageInput>({
            chat_group_id: Joi.string().uuid({ version: 'uuidv4' }),
            message: Joi.string(),
        }),
    }),
    async (args, ctx) => {
        // Add chat message
        const mutation = await ctx.userClient.mutate({
            mutation: ServerCreateChatMessageDocument,
            variables: {
                chat_group_id: args.input.chat_group_id,
                user_id: ctx.token.id,
                message: args.input.message,
            },
        });

        // because the chat_group field is a lookup
        // @ts-ignore
        return ctx.success({ chat_messages_id: mutation.data?.insert_chat_messages_one?.id });
    },
);
