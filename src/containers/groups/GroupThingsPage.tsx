import { Things_Bool_Exp, Thing_Type_Enum, useGroupDetailsQuery } from '../../generated/graphql';
import { compact, head } from 'lodash-es';
import { useRouter } from 'next/router';
import { Alert, Col, Input, Radio, Row, Space, Spin } from 'antd';
import { GroupLayout } from './GroupLayout';
import { createUseStyles } from 'react-jss';
import { ThingList } from '../../components/ThingList';
import { useMemo, useState } from 'react';
import { useDebounce } from '../../utils/hooks';

const useStyles = createUseStyles({});

export const GroupThingsPage = () => {
    const router = useRouter();

    const classes = useStyles();
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);
    const [type, setType] = useState<Thing_Type_Enum | 'all'>('all');
    const { id: shortId } = router.query as { id: string };

    const { data, loading, error } = useGroupDetailsQuery({
        variables: { shortId: shortId as string },
    });

    const group = head(data?.groups);

    const where = useMemo(
        (): Things_Bool_Exp => ({
            enabled: { _eq: true },
            group_relations: { group: { short_id: { _eq: shortId } } },
            _or: [{ expiry: { _gt: 'now()' } }, { expiry: { _is_null: true } }],
            _and: compact([
                debouncedSearch && {
                    _or: [
                        { name: { _ilike: `%${debouncedSearch}%` } },
                        { owner: { displayName: { _ilike: `%${debouncedSearch}%` } } },
                        { description: { _ilike: `%${debouncedSearch}%` } },
                    ],
                },
                type !== 'all' && { type: { _eq: type } },
            ]),
        }),
        [shortId, debouncedSearch, type],
    );

    if (loading) {
        return <Spin />;
    }

    if (!group || error || (!loading && !group)) {
        return <Alert message={error?.message || 'Group does not exist'} />;
    }

    return (
        <GroupLayout activePage="things" group={group}>
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                <Row align="middle" gutter={16} wrap={false}>
                    <Col flex={1}>
                        <Input.Search
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Filter"
                        />
                    </Col>
                    <Col>
                        <Space>
                            <span>Type:</span>
                            <Radio.Group
                                optionType="button"
                                value={type}
                                onChange={(e) => setType(e.target.value)}>
                                <Radio value="all">All</Radio>
                                <Radio value={Thing_Type_Enum.Give}>Give away</Radio>
                                <Radio value={Thing_Type_Enum.Lend}>Lend</Radio>
                                <Radio value={Thing_Type_Enum.HaveSome}>Have some</Radio>
                                <Radio value={Thing_Type_Enum.Other}>Other</Radio>
                            </Radio.Group>
                        </Space>
                    </Col>
                </Row>

                <ThingList
                    where={where}
                    emptyText={debouncedSearch ? 'No matches' : 'No things to show'}
                />
            </Space>
        </GroupLayout>
    );
};
