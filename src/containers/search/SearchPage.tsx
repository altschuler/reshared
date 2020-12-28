import { useMemo } from 'react';
import { isEmpty } from 'lodash';
import { PageLayout } from '../root/PageLayout';
import { Button, Input, Space, Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import { useDebounce, useMedia, useStateObject } from '../../utils/hooks';
import {
    Groups_Bool_Exp,
    Things_Bool_Exp,
    Users_Bool_Exp,
    useSearchCountsQuery,
} from '../../generated/graphql';
import { ThingList } from '../../components/ThingList';
import { useRouter } from 'next/router';
import { SearchOptions, Sidebar } from './Sidebar';
import { GroupList } from '../../components/GroupList';
import { UserList } from '../../components/UserList';

const useStyles = createUseStyles({
    searchBar: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
    },

    content: {
        display: 'flex',
        flex: 1,
        marginTop: '1em',
    },

    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'none',
        paddingRight: '1em',
        marginRight: '1em',
        borderRight: '1px solid #EEE',
        width: 200,
    },

    filter: {
        flex: 1,
    },

    results: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
});

export const SearchPage = () => {
    const router = useRouter();
    const classes = useStyles();

    const { value: options, update: updateOptions } = useStateObject<SearchOptions>({
        type: 'thing',
        query: '',
        thingFilter: {
            type: [],
            groups: [],
        },
        groupFilter: {
            public: null,
        },
    });

    const debouncedFilter = useDebounce(options, 300);

    const thingWhere = useMemo(
        (): Things_Bool_Exp => ({
            type: !isEmpty(options.thingFilter.type)
                ? { _in: options.thingFilter.type }
                : undefined,
            group_relations: !isEmpty(options.thingFilter.groups)
                ? { group: { id: { _in: options.thingFilter.groups.map((g) => g.id) } } }
                : undefined,
            _or: [
                { name: { _ilike: `%${debouncedFilter.query}%` } },
                { description: { _ilike: `%${debouncedFilter.query}%` } },
            ],
        }),
        [options.thingFilter.type, options.thingFilter.groups, debouncedFilter.query],
    );

    const groupWhere = useMemo(
        (): Groups_Bool_Exp => ({
            public:
                options.groupFilter.public === null
                    ? undefined
                    : { _eq: options.groupFilter.public },
            _or: [
                { name: { _ilike: `%${debouncedFilter.query}%` } },
                { description: { _ilike: `%${debouncedFilter.query}%` } },
            ],
        }),
        [options.groupFilter.public, debouncedFilter.query],
    );

    const userWhere = useMemo(
        (): Users_Bool_Exp => ({ name: { _ilike: `%${debouncedFilter.query}%` } }),
        [debouncedFilter.query],
    );

    const countsQuery = useSearchCountsQuery({
        variables: { thingWhere, groupWhere, userWhere },
    });

    const counts = useMemo(() => {
        const data = countsQuery.data || countsQuery.previousData;
        return data
            ? {
                  things: data.things_aggregate.aggregate?.count || 0,
                  groups: data.groups_aggregate.aggregate?.count || 0,
                  users: data.users_aggregate.aggregate?.count || 0,
              }
            : null;
    }, [countsQuery.data, countsQuery.previousData]);

    const collapsed = useMedia(['(max-width: 800px)'], [true], false);

    return (
        <PageLayout padded>
            <div className={classes.searchBar}>
                <Input.Search
                    size="large"
                    value={options.query}
                    onChange={(e) => updateOptions({ query: e.target.value })}
                    autoFocus
                    placeholder="What are you looking for?"
                />
            </div>

            <div className={classes.content}>
                <div className={classes.sidebar}>
                    <Sidebar counts={counts} onChange={updateOptions} options={options} />
                </div>

                <div className={classes.results}>
                    {options.type === 'thing' && (
                        <ThingList
                            hideSearch
                            where={thingWhere}
                            emptyText={
                                <Space direction="vertical">
                                    <Typography.Title level={5}>
                                        Not finding what you need?
                                    </Typography.Title>
                                    <Button>Ask for something</Button>
                                </Space>
                            }
                        />
                    )}
                    {options.type === 'group' && (
                        <GroupList
                            where={groupWhere}
                            emptyText={
                                <Space direction="vertical">
                                    <Typography.Title level={5}>
                                        No group for your community?
                                    </Typography.Title>
                                    <Button>Create a new group</Button>
                                </Space>
                            }
                        />
                    )}
                    {options.type === 'user' && (
                        <UserList
                            where={userWhere}
                            emptyText={
                                <Space direction="vertical">
                                    <Typography.Title level={5}>
                                        Is your friend missing?
                                    </Typography.Title>
                                    <Button>Send an invitation</Button>
                                </Space>
                            }
                        />
                    )}
                </div>
            </div>
        </PageLayout>
    );
};
