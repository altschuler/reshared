import { PageLayout } from '../containers/root/PageLayout';
import { makeGSSP } from '../utils/gssp';

const Home = () => {
    return (
        <PageLayout>
            <div>This site is not ready for your eyes to behold.</div>;
        </PageLayout>
    );
};

export default Home;

export const getServerSideProps = makeGSSP({});
