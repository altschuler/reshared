import { ThingPage } from '../../containers/thing';
import { ThingDetailsDocument } from '../../generated/graphql';
import { makeGSSP } from '../../utils/gssp';

export default ThingPage;

export const getServerSideProps = makeGSSP<any, { shortId: string }>({
    requireAuth: true,
    handler: async (data) => {
        await data.userClient.query({
            query: ThingDetailsDocument,
            variables: { shortId: data.nextCtx.params!.shortId },
        });
    },
});
