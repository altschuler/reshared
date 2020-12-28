import { makeGSSP } from '../../utils/gssp';
import { GroupListPage } from '../../containers/groups';

export default GroupListPage;
export const getServerSideProps = makeGSSP({ requireAuth: true });
