import { CSSProperties } from 'react';
import { Thing_Type_Enum } from '../../generated/graphql';
import { Select, Typography } from 'antd';
import { GenericSelectProps } from './utils';
import { createUseStyles } from 'react-jss';

export type ThingTypeSelectProps = GenericSelectProps<Thing_Type_Enum> & {
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

export const ThingTypeSelect = (props: ThingTypeSelectProps) => {
    const classes = useStyles();
    return (
        <Select
            mode={props.multiple ? 'multiple' : undefined}
            value={props.value || undefined}
            onChange={props.onChange}
            placeholder={props.placeholder || 'Type'}
            allowClear={props.allowClear}
            style={props.style}>
            <Select.Option value={Thing_Type_Enum.Lend}>
                <div className={classes.option}>
                    <Typography.Text>Lend</Typography.Text>
                    <Typography.Text type="secondary">Lend it out, get it back</Typography.Text>
                </div>
            </Select.Option>

            <Select.Option value={Thing_Type_Enum.Give}>
                <div className={classes.option}>
                    <Typography.Text>Give away</Typography.Text>
                    <Typography.Text type="secondary">Give it away forever</Typography.Text>
                </div>
            </Select.Option>

            <Select.Option value={Thing_Type_Enum.HaveSome}>
                <div className={classes.option}>
                    <Typography.Text>Have some</Typography.Text>
                    <Typography.Text type="secondary">
                        Let others take what they need and keep the rest
                    </Typography.Text>
                </div>
            </Select.Option>

            <Select.Option value={Thing_Type_Enum.Other}>
                <div className={classes.option}>
                    <Typography.Text>Other</Typography.Text>
                    <Typography.Text type="secondary">Some other way of sharing</Typography.Text>
                </div>
            </Select.Option>
        </Select>
    );
};
