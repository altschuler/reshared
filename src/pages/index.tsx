import { makeGSSP } from '../utils/gssp';
import { FrontPage } from '../containers/front';
import { urlFor } from '../utils/urls';

export default FrontPage;

export const getServerSideProps = makeGSSP({
    handler: async (data) => {
        // If authenticated redirect to home page
        // if (data.token) {
        //     return { redirect: { destination: urlFor.home(), permanent: false } };
        // }
    },
});
