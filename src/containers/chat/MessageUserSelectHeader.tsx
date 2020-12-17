import React from 'react';
import { UserCardFragment } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { UserSelect } from '../../components/forms';
import { Typography } from 'antd';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        flex: 'none',
        height: 40,
        padding: '0.5em',
        borderBottom: '1px solid #DDD',
    },

    title: {
        marginRight: '1em',
    },

    select: {
        flex: 1,
    },
});

export interface MessageUserSelectHeaderProps {
    value: UserCardFragment[];
    onChange: (users: UserCardFragment[]) => unknown;
}

export const MessageUserSelectHeader = ({ value, onChange }: MessageUserSelectHeaderProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography.Title level={5} style={{ marginBottom: 0 }} className={classes.title}>
                Send to
            </Typography.Title>
            <UserSelect
                multiple={true}
                value={value}
                bordered={false}
                autoFocus
                placeholder="Select one or more users"
                className={classes.select}
                onChange={onChange}
            />
        </div>
    );
};
