import { List } from 'antd';
import Link from 'next/link';
import { ReactNode } from 'react';
import { DetailedActivityFragment, UserCardFragment } from '../../../generated/graphql';
import { urlFor } from '../../../utils/urls';
import { DateDisplay } from '../DateDisplay';
import { UserAvatar } from '../UserAvatar';

export interface BaseEntryProps {
    actor: UserCardFragment;
    title: ReactNode;
    extra?: ReactNode;
    activity: DetailedActivityFragment;
}

export const BaseEntry = (props: BaseEntryProps) => {
    return (
        <List.Item actions={props.extra ? [props.extra] : []}>
            <Link href={urlFor.activity(props.activity)}>
                <a>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <UserAvatar
                            size={16}
                            user={props.actor}
                            style={{ marginRight: 5, flex: 'none' }}
                        />
                        {props.actor.displayName} {props.title}
                    </span>
                </a>
            </Link>
            <span style={{ fontSize: '0.8em' }}>
                <DateDisplay utc={props.activity.created_at} mode="distance" />
            </span>
        </List.Item>
    );
};
