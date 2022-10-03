import React, { useCallback } from 'react';
import { isEmpty } from 'lodash-es';
import { Typography } from 'antd';
import { urlFor } from '../../utils/urls';
import Link from 'next/link';
import { SmileOutlined } from '@ant-design/icons';
import { JoinButton } from './JoinButton';
import { CreateThingDrawer, useDialogs } from '../../components/dialogs';
import { useMembership } from '../../utils/group';
import { GroupDetailsFragment } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    emptyContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
export interface GroupEmptyContentProps {
    group: GroupDetailsFragment;
}

export const GroupEmptyContent = ({ group }: GroupEmptyContentProps) => {
    const classes = useStyles();

    const dialogs = useDialogs();
    const { isAdmin, isMember } = useMembership(group);

    const handleShare = useCallback(() => {
        dialogs.showDialog(CreateThingDrawer, { group }).then(console.log);
    }, [dialogs, group]);

    const memberCount = group.memberships.length;
    const hasThings = !isEmpty(group.thing_relations_aggregate.aggregate?.count);
    const onboarding = isAdmin && memberCount === 1;

    return (
        <div>
            {onboarding && (
                <div className={classes.emptyContent}>
                    <Typography.Title level={4}>
                        You've got a group, but no members
                    </Typography.Title>

                    {group.public && (
                        <div>
                            The group is public, so others are free to join. Just give them this
                            link:{' '}
                            <Typography.Link copyable>
                                {urlFor.group.home(group, true)}
                            </Typography.Link>
                        </div>
                    )}

                    {!group.public && (
                        <div>
                            <Typography.Paragraph>
                                The group is private, so others will need to either request access
                                or use a join link to become members. Join links are special links
                                that allow others to join a private group. Only share them with
                                people or in groups that you trust. You can disable them at any
                                time.
                            </Typography.Paragraph>

                            <Typography.Paragraph style={{ textAlign: 'center' }}>
                                <Typography.Link>
                                    <Link href={urlFor.group.settings(group)}>
                                        Create a join link from the settings page
                                    </Link>
                                </Typography.Link>
                            </Typography.Paragraph>

                            <Typography.Paragraph>
                                While you're waiting for others to join you can get the group going
                                by <Typography.Link onClick={handleShare}>sharing</Typography.Link>{' '}
                                something, that's what it's all about <SmileOutlined />
                            </Typography.Paragraph>
                        </div>
                    )}
                </div>
            )}

            {!isMember && (
                <div className={classes.emptyContent}>
                    <Typography.Title level={4}>
                        {group.public && <span>Join to find and share things in {group.name}</span>}

                        {!group.public && (
                            <span>
                                Request access to become a member to find and share things in{' '}
                                {group.name}
                            </span>
                        )}
                    </Typography.Title>
                    <JoinButton dataCy="group:empty:join:btn" group={group} />
                </div>
            )}

            {isMember && !onboarding && !hasThings && (
                <div className={classes.emptyContent}>
                    <Typography.Title level={4} style={{ textAlign: 'center' }}>
                        It's a little empty in here <SmileOutlined />
                    </Typography.Title>

                    <Typography.Paragraph>
                        <Typography.Link onClick={handleShare}>Share</Typography.Link> something to
                        get the group going!
                    </Typography.Paragraph>
                </div>
            )}
        </div>
    );
};
