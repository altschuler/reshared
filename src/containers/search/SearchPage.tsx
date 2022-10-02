import { useCallback, useMemo } from 'react';
import { isEmpty } from 'lodash';
import { PageLayout } from '../root/PageLayout';
import { Button, Space, Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import { useMedia, useStateObject } from '../../utils/hooks';
import {
    GroupCardFragment,
    GroupPostFragment,
    Groups_Bool_Exp,
    Group_Post_Type_Enum,
    Things_Bool_Exp,
    Users_Bool_Exp,
    useSearchCountsQuery,
} from '../../generated/graphql';
import { ThingList } from '../../components/ThingList';
import { useRouter } from 'next/router';
import { SearchOptions, Sidebar } from './Sidebar';
import { GroupList } from '../../components/GroupList';
import { UserList } from '../../components/UserList';
import { CreateGroupDrawer, CreatePostDrawer, useDialogs } from '../../components/dialogs';
import { urlFor } from '../../utils/urls';
import Joi from 'joi';

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

const typeSchema = Joi.string().valid('thing', 'group', 'user').default('thing');

export const SearchPage = () => {
    const router = useRouter();
    const classes = useStyles();
    const query = router.query.query || '';
    const dialogs = useDialogs();

    const handleAsk = useCallback(
        () =>
            dialogs
                .showDialog(CreatePostDrawer, { type: Group_Post_Type_Enum.Request })
                .then((post: GroupPostFragment) => router.push(urlFor.group.home(post.group))),
        [dialogs, router],
    );

    const defaultType = useMemo(
        () => typeSchema.validate(router.query.t).value || 'thing',
        [router.query.t],
    );

    const { value: options, update: updateOptions } = useStateObject<SearchOptions>({
        type: defaultType,
        thingFilter: {
            type: [],
            groups: [],
        },
        groupFilter: {
            public: null,
        },
    });

    const thingWhere = useMemo(
        (): Things_Bool_Exp => ({
            type: !isEmpty(options.thingFilter.type)
                ? { _in: options.thingFilter.type }
                : undefined,
            group_relations: !isEmpty(options.thingFilter.groups)
                ? { group: { id: { _in: options.thingFilter.groups.map((g) => g.id) } } }
                : undefined,
            _or: [{ name: { _ilike: `%${query}%` } }, { description: { _ilike: `%${query}%` } }],
        }),
        [options.thingFilter.type, options.thingFilter.groups, query],
    );

    const groupWhere = useMemo(
        (): Groups_Bool_Exp => ({
            public:
                options.groupFilter.public === null
                    ? undefined
                    : { _eq: options.groupFilter.public },
            _or: [{ name: { _ilike: `%${query}%` } }, { description: { _ilike: `%${query}%` } }],
        }),
        [options.groupFilter.public, query],
    );

    const userWhere = useMemo(
        (): Users_Bool_Exp => ({ displayName: { _ilike: `%${query}%` } }),
        [query],
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
                  users: data.usersAggregate.aggregate?.count || 0,
              }
            : null;
    }, [countsQuery.data, countsQuery.previousData]);

    const collapsed = useMedia(['(max-width: 800px)'], [true], false);

    return (
        <PageLayout padded>
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
                                    <Button onClick={handleAsk}>Ask for something</Button>
                                </Space>
                            }
                        />
                    )}
                    {options.type === 'group' && (
                        <GroupList
                            dataCy="search:group-results"
                            where={groupWhere}
                            emptyText={<GroupEmptyResults />}
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

const GroupEmptyResults = () => {
    const dialogs = useDialogs();
    const router = useRouter();

    const handleCreate = useCallback(
        () =>
            dialogs
                .showDialog(CreateGroupDrawer)
                .then((group: GroupCardFragment) => router.push(urlFor.group.home(group))),
        [dialogs, router],
    );

    return (
        <Space direction="vertical">
            <Typography.Title level={5}>No group for your community?</Typography.Title>
            <Button onClick={handleCreate}>Create a new group</Button>
        </Space>
    );
};
