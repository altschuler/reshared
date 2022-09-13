import { SettingsPage } from '../../containers/settings';
import { makeGSSP } from '../../utils/gssp';

export default SettingsPage;

export const getServerSideProps = makeGSSP({ requireAuth: true });
