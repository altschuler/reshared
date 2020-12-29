import { PageLayout } from '../../containers/root/PageLayout';
import { PageHeader } from 'antd';

const Attributions = () => {
    return (
        <PageLayout>
            <PageHeader title="Attributions">
                Reshared is built using numerous open-source projects. Following is a few that we
                rely particularly heavy on.
                <ul>
                    <li>NextJS</li>
                    <li>Next-Auth</li>
                    <li>Apollo</li>
                    <li>Joi</li>
                    <li>Ant Design</li>
                </ul>
            </PageHeader>
        </PageLayout>
    );
};

export default Attributions;
