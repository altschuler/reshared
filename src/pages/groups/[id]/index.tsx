import { GroupHomePage } from '../../../containers/groups';
import { head } from 'lodash-es';
import { GroupDetailsDocument, GroupDetailsQuery } from '../../../generated/graphql';
import { makeGSSP } from '../../../utils/gssp';

export default GroupHomePage;

// TODO: add the group to props?
export const getServerSideProps = makeGSSP<any, { id: string }>({
    requireAuth: true,
    handler: async (data) => {
        const query = await data.userClient.query<GroupDetailsQuery>({
            query: GroupDetailsDocument,
            variables: { shortId: data.nextCtx.params!.id },
        });

        const group = head(query.data.groups);

        if (query.error) {
            // TODO: redirect to some error page
            return { notFound: true };
            // return { props: { error: 'Something unexpected happened on our side, sorry!' } };
        }

        return group ? { props: {} } : { notFound: true };
    },
});
