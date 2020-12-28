import { makeGSSP } from '../utils/gssp';
import { HomePage } from '../containers/home';

export default HomePage;

export const getServerSideProps = makeGSSP({ requireAuth: true });
