import { MyThingsPage } from '../../containers/my-things/MyThingsPage';
import { makeGSSP } from '../../utils/gssp';

export default MyThingsPage;

export const getServerSideProps = makeGSSP({ requireAuth: true });
