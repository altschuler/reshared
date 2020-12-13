import { GroupHomePage, GroupHomePageProps } from '../../../containers/groups';
import { head } from 'lodash';
import { GetServerSideProps } from 'next';
import { makeApolloClient } from '../../../api/apolloClient';
import { GroupDetailsDocument, GroupDetailsQuery } from '../../../generated/graphql';

export default GroupHomePage;

export const getServerSideProps: GetServerSideProps<GroupHomePageProps, { id: string }> = async (
    ctx,
) => {
    const client = makeApolloClient(true);
    const query = await client.query<GroupDetailsQuery>({
        query: GroupDetailsDocument,
        variables: { shortId: ctx.params!.id },
    });

    const group = head(query.data.groups);

    if (query.error) {
        // TODO: redirect to some error page
        return { notFound: true };
        // return { props: { error: 'Something unexpected happened on our side, sorry!' } };
    }

    return group ? { props: { group } } : { notFound: true };
};
