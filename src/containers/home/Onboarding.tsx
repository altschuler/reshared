import { Button, Modal, Space, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { CreateGroupDrawer, useDialogs } from '../../components/dialogs';
import { GroupCardFragment } from '../../generated/graphql';
import { urlFor } from '../../utils/urls';
import { PageLayout } from '../root/PageLayout';

export const Onboarding = () => {
    const router = useRouter();
    const dialogs = useDialogs();

    const handleCreateGroup = useCallback(
        () =>
            dialogs
                .showDialog(CreateGroupDrawer)
                .then((group: GroupCardFragment) => router.push(urlFor.group.home(group))),
        [dialogs, router],
    );

    const handleInvitation = useCallback(() => {
        Modal.info({
            title: 'Use an invitation link',
            content:
                "If you have an invitation link, simply paste it into your browser and you'll be able to join the group that you were invited to.",
        });
    }, []);

    return (
        <PageLayout padded>
            <Typography.Title level={4}>Welcome to Reshared!</Typography.Title>

            <Typography.Paragraph>
                Users and things in Reshared are organized in <strong>groups</strong>, so to get
                started you need to be a member of one (or more!).
            </Typography.Paragraph>

            <Space direction="vertical" size="large" align="center">
                <Button size="large" shape="round" type="primary" onClick={handleCreateGroup}>
                    Create a group
                </Button>
                <Space direction="vertical" align="center">
                    <Link key="invite" href={urlFor.search('', 'group')} passHref>
                        <Button size="large" shape="round" type="primary">
                            Find a group
                        </Button>
                    </Link>

                    <Button type="link" onClick={handleInvitation}>
                        I have an invitation link
                    </Button>
                </Space>
            </Space>
        </PageLayout>
    );
};
