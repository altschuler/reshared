import { GroupPostPage, GroupPostPageProps } from '../../../../containers/groups/GroupPostPage';
import { GroupPostSingleDocument } from '../../../../generated/graphql';
import { makeGSSP } from '../../../../utils/gssp';

export default GroupPostPage;

export const getServerSideProps = makeGSSP<GroupPostPageProps, { postId: string }>({
    requireAuth: true,
    handler: async (data) => {
        // Preload post
        const post = await data.userClient.query({
            query: GroupPostSingleDocument,
            variables: {
                id: data.nextCtx.params?.postId,
            },
        });

        if (!post) {
            return { notFound: true };
        }
    },
});
