import { GroupPostsPage } from '../../../../containers/groups/GroupPostsPage';
import { makeGSSP } from '../../../../utils/gssp';

export default GroupPostsPage;

export const getServerSideProps = makeGSSP({ requireAuth: true });
