import { GroupSettingsPage } from '../../../containers/groups';
import { makeGSSP } from '../../../utils/gssp';
import { Group_Role_Enum, GroupDetailsDocument } from '../../../generated/graphql';
import { ServerCountGroupMembersDocument } from '../../../generated/server-queries';
import { urlFor } from '../../../utils/urls';

export default GroupSettingsPage;

export const getServerSideProps = makeGSSP<never, { id: string }>({
    requireAuth: true,
    handler: async (data) => {
        const shortId = data.nextCtx.query.id as string;

        const query = await data.serverClient.query({
            query: ServerCountGroupMembersDocument,
            variables: {
                where: {
                    role: { _in: [Group_Role_Enum.Admin, Group_Role_Enum.Owner] },
                    user_id: { _eq: data.token?.id },
                    group: { short_id: { _eq: shortId } },
                },
            },
        });

        // User is not an admin
        if (query.data.group_members_aggregate.aggregate?.count !== 1) {
            return {
                redirect: {
                    statusCode: 302,
                    destination: urlFor.group.home({ short_id: shortId }),
                },
            };
        }

        // Preload group details
        await data.userClient.query({
            query: GroupDetailsDocument,
            variables: { shortId },
        });
    },
});
