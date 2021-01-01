import { GroupThingsPage } from '../../../containers/groups';
import { makeGSSP } from '../../../utils/gssp';

export default GroupThingsPage;

export const getServerSideProps = makeGSSP({ requireAuth: true });
