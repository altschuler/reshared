import { GroupHomePage, GroupHomePageProps } from '../../../containers/groups';
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
        variables: { id: ctx.params!.id },
    });

    if (query.error) {
        return { props: { error: 'Something unexpected happened on our side, sorry!' } };
    }

    if (!query.data) {
        return { notFound: true };
        //return { props: { error: 'Group not found' } };
    }

    return {
        props: { group: query.data.groups_by_pk },
    };
};
