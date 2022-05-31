import { ReactNode } from 'react';
import { Space, Typography } from 'antd';
import { UserAvatar } from '../UserAvatar';
import { UserCardFragment } from '../../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { DateDisplay } from '../DateDisplay';

const useStyles = createUseStyles({
    root: {
        border: '1px solid #EEE',
        backgroundColor: '#fcfcfc',
        boxShadow: '3px 3px #e4e4e4',
        width: '100%',
        maxWidth: 800,
        padding: '1em',
        marginBottom: '2em',
    },
    header: {
        display: 'flex',
    },
    headerText: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    avatar: {
        display: 'flex',
        alignItems: 'center',
        flex: 'none',
        marginRight: '1em',
    },
    extra: {
        flex: 'none',
    },
    date: {
        fontSize: '0.8em',
    },
    content: {
        marginTop: '1em',
    },
});

export interface BaseEntryProps {
    actor: UserCardFragment;
    date: Date;
    title: ReactNode;
    extra?: ReactNode;
    children?: ReactNode;
}

export const BaseEntry = (props: BaseEntryProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.avatar}>
                    <UserAvatar size="large" user={props.actor} />
                </div>
                <div className={classes.headerText}>
                    <span>
                        {props.actor.displayName} {props.title}
                    </span>

                    <Typography.Text type="secondary" className={classes.date}>
                        <DateDisplay utc={props.date} showDistance mode="datetime" />
                    </Typography.Text>
                </div>
                {props.extra && <div className={classes.extra}>{props.extra}</div>}
            </div>
            {props.children && <div className={classes.content}>{props.children}</div>}
        </div>
    );
};
