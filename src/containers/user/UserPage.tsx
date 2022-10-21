import { MessageOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Typography } from 'antd';
import { isEmpty } from 'lodash-es';
import Head from 'next/head';
import Link from 'next/link';
import { ActivityFeed, DateDisplay, UserAvatar } from '../../components/display';
import { GroupList } from '../../components/GroupList';
import { ThingList } from '../../components/ThingList';
import { UserProfileDetailsFragment } from '../../generated/graphql';
import { urlFor } from '../../utils/urls';
import { PageLayout } from '../root/PageLayout';

export interface UserPageProps {
    user: UserProfileDetailsFragment;
}

export const UserPage = ({ user }: UserPageProps) => (
    <PageLayout padded>
        <Head>
            <title>{user.displayName} | Reshared</title>
        </Head>
        <Space style={{ marginTop: 20 }} direction="vertical" size="large">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Space direction="horizontal" align="center">
                    <UserAvatar size={70} disablePopover user={user} />
                    <Space direction="horizontal" align="baseline">
                        <Typography.Title level={2} style={{ margin: 0 }}>
                            {user.displayName}
                        </Typography.Title>
                    </Space>
                </Space>

                <Space>
                    <Typography.Text>
                        Member since <DateDisplay mode="date" utc={user.createdAt} />
                    </Typography.Text>
                    <Link passHref href={{ pathname: urlFor.chat.new(), query: { to: user.id } }}>
                        <Button type="link" icon={<MessageOutlined />}>
                            Send a message
                        </Button>
                    </Link>
                </Space>
            </div>
            <Row>
                <Col xs={6}>
                    <Typography.Title level={4}>
                        {user.displayName}'s latest activity
                    </Typography.Title>
                    <ActivityFeed activities={user.activities} />
                </Col>
                <Col xs={18}>
                    {isEmpty(user.things) ? (
                        <Typography.Title level={4}>
                            {user.displayName} is not a member of any groups
                        </Typography.Title>
                    ) : (
                        <Typography.Title level={4}>
                            {user.displayName} is a member of {user.memberships.length} groups
                        </Typography.Title>
                    )}

                    <GroupList groups={user.memberships.map((m) => m.group)} />

                    {isEmpty(user.things) ? (
                        <Typography.Title level={4}>
                            {user.displayName} is not sharing any things
                        </Typography.Title>
                    ) : (
                        <Typography.Title level={4}>
                            {user.displayName} is sharing {user.things.length} things
                        </Typography.Title>
                    )}

                    <ThingList things={user.things} />
                </Col>
            </Row>
        </Space>
    </PageLayout>
);
