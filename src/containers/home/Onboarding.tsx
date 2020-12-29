import { PageLayout } from '../root/PageLayout';
import { useAuth } from '../../utils/auth';
import Link from 'next/link';
import { Button, Card, Col, Row, Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import { useCallback } from 'react';
import { CreateGroupDrawer, useDialogs } from '../../components/dialogs';
import { urlFor } from '../../utils/urls';
import { useRouter } from 'next/router';
import { GroupCardFragment } from '../../generated/graphql';

const useStyles = createUseStyles({
    quickActions: {
        marginBottom: '2em',
    },
});

export const Onboarding = () => {
    const auth = useAuth();
    const router = useRouter();
    const dialogs = useDialogs();
    const classes = useStyles();

    const handleCreateGroup = useCallback(
        () =>
            dialogs
                .showDialog(CreateGroupDrawer)
                .then((group: GroupCardFragment) => router.push(urlFor.group.home(group))),
        [dialogs],
    );

    return (
        <PageLayout padded>
            <Typography.Title level={4}>Welcome to Reshared :)</Typography.Title>

            <Typography.Paragraph>
                Users and things in Reshared are organized in groups, so to get started you need to
                be a member of one (or more!). Become a member by one of the following:
            </Typography.Paragraph>

            <Row gutter={[12, 12]}>
                <Col sm={24} md={12}>
                    <Card
                        onClick={handleCreateGroup}
                        hoverable
                        actions={[
                            <Button key="create" type="primary" onClick={handleCreateGroup}>
                                Create a group
                            </Button>,
                        ]}>
                        <Card.Meta
                            title="I want to create a new group"
                            description="If you're setting up Reshared for your community. Create a group then invite others to join it."
                        />
                    </Card>
                </Col>

                <Col sm={24} md={12}>
                    <Link href={urlFor.search()}>
                        <Card
                            hoverable
                            actions={[
                                <Link
                                    key="find"
                                    href={{ pathname: urlFor.search(), query: { t: 'group' } }}
                                    passHref>
                                    <Button type="primary">Find group</Button>
                                </Link>,
                                <Link key="invite" href={urlFor.search()} passHref>
                                    <Button type="primary">I have an invitation</Button>
                                </Link>,
                            ]}>
                            <Card.Meta
                                title="I want to join an existing group"
                                description={
                                    <span>
                                        If you're joining a group created by someone else in your
                                        community. You can search for it or use an invitation link
                                        if you have one (you can just visit the link directly).
                                    </span>
                                }
                            />
                        </Card>
                    </Link>
                </Col>
            </Row>
        </PageLayout>
    );
};
