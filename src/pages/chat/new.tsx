import { ChatNewPage, ChatPageNewProps } from '../../containers/chat';
import { makeGSSP } from '../../utils/gssp';
import { UserListDocument, UserListQuery, UserListQueryVariables } from '../../generated/graphql';

export default ChatNewPage;

export const getServerSideProps = makeGSSP<ChatPageNewProps, { to: string }>({
    requireAuth: true,
    handler: async (data) => {
        const { to } = data.nextCtx.query;

        // Preload user
        if (to) {
            const query = await data.userClient.query<UserListQuery>({
                query: UserListDocument,
                variables: {
                    where: {
                        id: { _eq: to },
                    },
                    limit: 1,
                    offset: 0,
                } as UserListQueryVariables,
            });

            return { props: { to: query.data?.users || [] } };
        }
    },
});
