import { UserPage, UserPageProps } from '../../containers/user';
import { UserProfileDetailsDocument } from '../../generated/graphql';
import { makeGSSP } from '../../utils/gssp';

export default UserPage;

export const getServerSideProps = makeGSSP<UserPageProps, { id: string }>({
    requireAuth: true,
    handler: async (data) => {
        const details = await data.userClient.query({
            query: UserProfileDetailsDocument,
            variables: { id: data.nextCtx.params!.id },
        });

        if (!details.data?.user) {
            return { notFound: true };
        }

        return { props: { user: details.data.user } };
    },
});
