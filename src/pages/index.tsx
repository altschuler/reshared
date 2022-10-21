import { FrontPage } from '../containers/front';
import { makeGSSP } from '../utils/gssp';
import { urlFor } from '../utils/urls';

export default FrontPage;

export const getServerSideProps = makeGSSP({
    handler: async (data) => {
        // If authenticated redirect to home page
        if (data.user) {
            return { redirect: { destination: urlFor.home(), permanent: false } };
        }
    },
});
