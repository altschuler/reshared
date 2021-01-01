import { CSSProperties } from 'react';
import { Group_Post_Type_Enum } from '../../generated/graphql';
import { Select, Typography } from 'antd';
import { GenericSelectProps } from './utils';
import { createUseStyles } from 'react-jss';

export type GroupPostTypeSelectProps = GenericSelectProps<Group_Post_Type_Enum> & {
    placeholder?: string;
    allowClear?: boolean;
    style?: CSSProperties;
};

const useStyles = createUseStyles({
    option: {
        display: 'flex',
        flexDirection: 'column',
    },
});

export const GroupPostTypeSelect = (props: GroupPostTypeSelectProps) => {
    const classes = useStyles();
    return (
        <Select
            mode={props.multiple ? 'multiple' : undefined}
            value={props.value || undefined}
            onChange={props.onChange}
            placeholder={props.placeholder || 'Type'}
            allowClear={props.allowClear}
            style={props.style}>
            <Select.Option value={Group_Post_Type_Enum.Request}>
                <div className={classes.option}>
                    <Typography.Text>Ask for something</Typography.Text>
                    <Typography.Text type="secondary">
                        If you're looking for something that others might share
                    </Typography.Text>
                </div>
            </Select.Option>

            <Select.Option value={Group_Post_Type_Enum.Message}>
                <div className={classes.option}>
                    <Typography.Text>Message</Typography.Text>
                    <Typography.Text type="secondary">
                        If you want to communicate something with the group
                    </Typography.Text>
                </div>
            </Select.Option>
        </Select>
    );
};
