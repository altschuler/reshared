import { useGroupDetailsQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { Alert, Spin, Row, Col } from 'antd';
import { GroupLayout } from './GroupLayout';
import { JoinRequestList } from './JoinRequestList';
import { useMembership } from '../../utils/group';
import { createUseStyles } from 'react-jss';
import { MemberList } from './MemberList';

const useStyles = createUseStyles({});

export const GroupMembersPage = () => {
    const router = useRouter();
    const classes = useStyles();
    const { id } = router.query;

    const { data, loading, error } = useGroupDetailsQuery({ variables: { id: id as string } });

    const group = data?.groups_by_pk;
    const { isAdmin } = useMembership(group);

    if (loading) {
        return <Spin />;
    }

    if (!group || error || (!loading && !data?.groups_by_pk)) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    return (
        <GroupLayout activePage="members" group={group}>
            <Row gutter={2}>
                <Col flex={1}>
                    <MemberList memberships={group.memberships} group={group} />
                </Col>

                {isAdmin && (
                    <Col md={12} xs={24}>
                        <JoinRequestList group={group} />
                    </Col>
                )}
            </Row>
        </GroupLayout>
    );
};
