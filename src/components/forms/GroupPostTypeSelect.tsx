import { CSSProperties } from 'react';
import { Group_Post_Type_Enum } from '../../generated/graphql';
import { Radio, Space, Typography } from 'antd';
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
        <Radio.Group value={props.value} onChange={(e) => props.onChange(e.target.value)}>
            <Space direction="vertical">
                <Radio value={Group_Post_Type_Enum.Request}>
                    <div className={classes.option}>
                        <Typography.Text>Ask for something</Typography.Text>
                        <Typography.Text type="secondary">
                            If you&apos;re looking for something that others might share
                        </Typography.Text>
                    </div>
                </Radio>

                <Radio value={Group_Post_Type_Enum.Message}>
                    <div className={classes.option}>
                        <Typography.Text>Post a message</Typography.Text>
                        <Typography.Text type="secondary">
                            If you want to communicate something with the group
                        </Typography.Text>
                    </div>
                </Radio>
            </Space>
        </Radio.Group>
    );
};
