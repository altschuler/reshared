import Joi from 'joi';
import {
    ServerDeleteGroupsDocument,
    ServerDeleteUserDocument,
    ServerFindGroupMembershipsDocument,
} from '../../../generated/server-queries';
import { DeleteAccountMutationVariables, Group_Role_Enum } from '../../../generated/graphql';
import { makeAuthorizedHandler } from '../../../server';

export default makeAuthorizedHandler<DeleteAccountMutationVariables, boolean>(
    Joi.object<DeleteAccountMutationVariables>({
        id: Joi.string().uuid({ version: 'uuidv4' }).required(),
    }),
    async (args, ctx) => {
        const ownerMemberships = await ctx.userClient.query({
            query: ServerFindGroupMembershipsDocument,
            variables: {
                where: {
                    user_id: { _eq: ctx.token.id },
                    role: { _eq: Group_Role_Enum.Owner },
                },
            },
        });

        const groupIdsToDelete = ownerMemberships.data.group_members.map((m) => m.group_id);

        const res = await ctx.userClient.mutate({
            mutation: ServerDeleteUserDocument,
            variables: { id: args.id },
        });

        console.log(res.data);
        if (!res.data?.deleteUser?.id) {
            return ctx.error('Could not delete account', 400);
        }

        // If user delete succeeded we delete their owned groups (they should be empty,
        // otherwise the delete fails). We have to use the admin client since at this
        // point there's no user anymore.
        await ctx.adminClient.mutate({
            mutation: ServerDeleteGroupsDocument,
            variables: { ids: groupIdsToDelete },
        });

        ctx.success(true);
    },
);
