import { GroupRequestsPage } from '../../../../containers/groups/GroupRequestsPage';
import { makeGSSP } from '../../../../utils/gssp';

export default GroupRequestsPage;

export const getServerSideProps = makeGSSP({ requireAuth: true });
