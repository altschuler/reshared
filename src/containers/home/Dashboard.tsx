import { PageLayout } from '../root/PageLayout';
import { useAuth } from '../../utils/auth';
import { Avatar, Button, Col, List, Row, Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import { ButtonProps } from 'antd/lib/button';
import { Group_Post_Type_Enum, useActivityListQuery } from '../../generated/graphql';
import { ActivityList, ImageDisplay } from '../../components/display';
import { AudioOutlined, GiftOutlined, SearchOutlined, UserAddOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import { CreatePostDrawer, CreateThingDrawer, useDialogs } from '../../components/dialogs';
import { urlFor } from '../../utils/urls';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = createUseStyles({
    quickActions: {
        marginBottom: '2em',
    },
});

const QuickAction = (props: ButtonProps) => (
    <Col xs={24} sm={12} md={6}>
        <Button style={{ width: '100%' }} size="large" {...props} />
    </Col>
);

export const Dashboard = () => {
    const auth = useAuth();
    const dialogs = useDialogs();
    const classes = useStyles();
    const router = useRouter();

    const query = useActivityListQuery();

    const handleShare = useCallback(
        () =>
            dialogs
                .showDialog(CreateThingDrawer)
                .then((thing) => thing && router.push(urlFor.thing(thing))),
        [dialogs],
    );

    const handleAsk = useCallback(
        () =>
            dialogs
                .showDialog(CreatePostDrawer, { type: Group_Post_Type_Enum.Request })
                .then((post) => post && router.push(urlFor.group.post(post))),
        [dialogs],
    );

    return (
        <PageLayout padded>
            <div className={classes.quickActions}>
                <Row gutter={[12, 12]} wrap={false}>
                    <QuickAction onClick={handleShare} icon={<GiftOutlined />}>
                        Share something
                    </QuickAction>
                    <QuickAction icon={<SearchOutlined />}>
                        <Link href={urlFor.search()}>Find something</Link>
                    </QuickAction>
                    <QuickAction onClick={handleAsk} icon={<AudioOutlined />}>
                        Ask for something
                    </QuickAction>
                    <QuickAction icon={<UserAddOutlined />}>Invite others</QuickAction>
                </Row>
            </div>

            <Row gutter={[12, 12]} wrap={false}>
                <Col md={12} sm={12} xs={6}>
                    <Typography.Title level={4}>Recent Activity</Typography.Title>
                    <ActivityList
                        loading={query.loading}
                        activities={query.data?.activities || []}
                    />
                </Col>

                <Col md={12} sm={12} xs={6}>
                    <Typography.Title level={4}>Your Groups</Typography.Title>

                    <List
                        dataSource={auth.userDetails?.memberships}
                        renderItem={(m) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar
                                            icon={
                                                m.group.banner_file && (
                                                    <ImageDisplay
                                                        width={50}
                                                        height={50}
                                                        file={m.group.banner_file}
                                                        alt="Group banner image"
                                                    />
                                                )
                                            }
                                        />
                                    }
                                    title={
                                        <Link
                                            passHref
                                            href={urlFor.group.home(m.group)}
                                            data-cy="title">
                                            {m.group.name}
                                        </Link>
                                    }
                                    description={m.group.description}
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </PageLayout>
    );
};
