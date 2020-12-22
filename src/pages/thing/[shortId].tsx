import { ThingPage, ThingPageProps } from '../../containers/thing';
import { ThingDetailsDocument } from '../../generated/graphql';
import { makeGSSP } from '../../utils/gssp';

export default ThingPage;

export const getServerSideProps = makeGSSP<ThingPageProps, { shortId: string }>({
    requireAuth: true,
    handler: async (data) => {
        await data.userClient.query({
            query: ThingDetailsDocument,
            variables: { shortId: data.nextCtx.params!.shortId },
        });
    },
});
