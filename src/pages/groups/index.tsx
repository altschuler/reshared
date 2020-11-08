import { GqlOps, useCreateGroupMutation, useListGroupsQuery } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { Avatar, List, message, Space } from 'antd';
import Link from 'next/link';
import { TeamOutlined, GiftOutlined } from '@ant-design/icons';
import { createElement, useCallback } from 'react';
import { asCreateInput, GroupEditor, useGroupEditor } from '../../components/editors';

const useStyles = createUseStyles((theme) => ({
    root: {
        display: 'flex',
    },
    thing: {
        marginRight: '2em',
    },
}));

const IconText = ({ icon, text }: { icon: any; text: string | number }) => (
    <Space>
        {createElement(icon)}
        {text}
    </Space>
);

export const GroupListPage = () => {
    const classes = useStyles();
    const editorState = useGroupEditor();

    const { data, loading, error } = useListGroupsQuery({ variables: { limit: 10, offset: 0 } });
    const [createGroup, createMutation] = useCreateGroupMutation({
        refetchQueries: [GqlOps.Query.ListGroups],
    });

    const handleCreateGroup = useCallback(() => {
        const input = asCreateInput(editorState);
        createGroup({ variables: { input } }).then((data) => {
            message.success('Group created');
            editorState.reset();
        });
    }, [createGroup, editorState]);

    const groups = data?.groups || [];

    return (
        <div>
            <GroupEditor
                error={createMutation.error?.message}
                state={editorState}
                loading={createMutation.loading}
                onSubmit={handleCreateGroup}
            />

            <List
                loading={loading}
                itemLayout="vertical"
                size="large"
                pagination={{
                    hideOnSinglePage: true,
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={groups}
                renderItem={(group) => (
                    <List.Item
                        key={group.name}
                        actions={[
                            <IconText
                                icon={TeamOutlined}
                                text={group.memberships_aggregate.aggregate?.count || 0}
                                key="members"
                            />,
                            <IconText icon={GiftOutlined} text={12} key="things" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }>
                        <List.Item.Meta
                            avatar={<Avatar src={''} />}
                            title={<Link href={`/groups/${group.id}`}>{group.name}</Link>}
                            description={group.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default GroupListPage;
