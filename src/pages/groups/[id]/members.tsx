import { GroupMembersPage } from '../../../containers/groups';
import { makeGSSP } from '../../../utils/gssp';

export default GroupMembersPage;

export const getServerSideProps = makeGSSP({ requireAuth: true });
