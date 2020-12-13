import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { head } from 'lodash';
import { GroupJoinPage, GroupJoinPageProps } from '../../../../containers/groups';
import { ServerFindJoinTokenDocument } from '../../../../generated/server-queries';
import { hasuraClient } from '../../../../server';

export default GroupJoinPage;

export const getServerSideProps: GetServerSideProps<
    GroupJoinPageProps,
    { id: string; token: string }
> = async (ctx) => {
    const { id, token } = ctx.params!;

    const tokenQuery = await hasuraClient.query({
        query: ServerFindJoinTokenDocument,
        variables: {
            where: {
                disabled: { _eq: false },
                group: { short_id: { _eq: id } },
                token: { _eq: token },
            },
        },
    });

    return {
        props: {
            tokenValid: !!head(tokenQuery.data.group_join_tokens),
        },
    };
};
