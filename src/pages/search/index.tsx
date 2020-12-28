import { SearchPage } from '../../containers/search';
import { makeGSSP } from '../../utils/gssp';

export default SearchPage;

export const getServerSideProps = makeGSSP({ requireAuth: true });
