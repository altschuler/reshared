import { Divider, Form, Radio, Space, Typography } from 'antd';
import { isNumber } from 'lodash';
import { GroupSelect, ThingTypeSelect } from '../../components/forms';
import { createUseStyles } from 'react-jss';
import { GroupCardFragment, Thing_Type_Enum } from '../../generated/graphql';
import { useCallback, useMemo } from 'react';
import clsx from 'clsx';

const useStyles = createUseStyles({
    typeSelect: {},

    countItem: {
        cursor: 'pointer',
        opacity: 0.5,
    },

    countItemSelected: {
        cursor: 'pointer',
        opacity: 1,
    },
});

export interface ThingFilter {
    type: Thing_Type_Enum[];
    groups: GroupCardFragment[];
}

export interface GroupFilter {
    public: boolean | null;
}

export interface SearchOptions {
    type: 'thing' | 'group' | 'user';
    thingFilter: ThingFilter;
    groupFilter: GroupFilter;
}

export interface SidebarProps {
    options: SearchOptions;
    onChange: (options: SearchOptions) => unknown;
    counts: {
        things: number;
        groups: number;
        users: number;
    } | null;
}

interface CountItemProps {
    label: string;
    count: number | undefined;
    selected: boolean;
    onClick: () => unknown;
}
const CountItem = ({ label, count, selected, onClick }: CountItemProps) => {
    const classes = useStyles();
    return (
        <Typography.Title
            level={5}
            className={clsx(classes.countItem, selected && classes.countItemSelected)}
        >
            <span onClick={onClick}>
                {label} {isNumber(count) ? <span>({count === 10 ? '10+' : count})</span> : ''}
            </span>
        </Typography.Title>
    );
};

export const Sidebar = (props: SidebarProps) => {
    const classes = useStyles();

    const handleChange = useCallback(
        (update: Partial<SearchOptions>) => props.onChange({ ...props.options, ...update }),
        [props],
    );
    return (
        <div>
            <div className={classes.typeSelect}>
                <Space direction="vertical">
                    <CountItem
                        label="Things"
                        count={props.counts?.things}
                        selected={props.options.type === 'thing'}
                        onClick={() => handleChange({ type: 'thing' })}
                    />

                    <CountItem
                        label="Groups"
                        count={props.counts?.groups}
                        selected={props.options.type === 'group'}
                        onClick={() => handleChange({ type: 'group' })}
                    />

                    <CountItem
                        label="Users"
                        count={props.counts?.users}
                        selected={props.options.type === 'user'}
                        onClick={() => handleChange({ type: 'user' })}
                    />
                </Space>
            </div>

            <Divider type="horizontal" />

            {props.options.type === 'thing' && (
                <ThingFilterForm
                    value={props.options.thingFilter}
                    onChange={(thingFilter) => handleChange({ thingFilter })}
                />
            )}

            {props.options.type === 'group' && (
                <GroupFilterForm
                    value={props.options.groupFilter}
                    onChange={(groupFilter) => handleChange({ groupFilter })}
                />
            )}
        </div>
    );
};

interface ThingFilterFormProps {
    value: ThingFilter;
    onChange: (value: ThingFilter) => unknown;
}

const ThingFilterForm = (props: ThingFilterFormProps) => {
    const handleChange = useCallback(
        (update: Partial<ThingFilter>) => props.onChange({ ...props.value, ...update }),
        [props],
    );

    return (
        <Form colon={false} layout="vertical">
            <Form.Item label="Type">
                <ThingTypeSelect
                    placeholder="All types"
                    multiple={true}
                    value={props.value.type}
                    onChange={(type) => handleChange({ type })}
                />
            </Form.Item>
            <Form.Item label="Groups">
                <GroupSelect
                    allowClear
                    placeholder="All your groups"
                    multiple={true}
                    value={props.value.groups}
                    onChange={(groups) => handleChange({ groups })}
                />
            </Form.Item>
        </Form>
    );
};

interface GroupFilterFormProps {
    value: GroupFilter;
    onChange: (value: GroupFilter) => unknown;
}

const GroupFilterForm = (props: GroupFilterFormProps) => {
    const handleChange = useCallback(
        (update: Partial<GroupFilter>) => props.onChange({ ...props.value, ...update }),
        [props],
    );

    const options = useMemo(() => ['Both', 'Public', 'Private'], []);
    const toFilter = useCallback((value: 'Both' | 'Public' | 'Private') => {
        switch (value) {
            case 'Both':
                return null;
            case 'Public':
                return true;
            case 'Private':
                return false;
        }
    }, []);

    const fromFilter = useCallback((value: boolean | null) => {
        switch (value) {
            case null:
                return 'Both';
            case true:
                return 'Public';
            case false:
                return 'Private';
        }
    }, []);

    const privacyValue = useMemo(
        () => fromFilter(props.value.public),
        [fromFilter, props.value.public],
    );

    return (
        <Form colon={false} layout="vertical">
            <Form.Item label="Privacy">
                <Radio.Group
                    size="small"
                    value={privacyValue}
                    onChange={(e) => handleChange({ public: toFilter(e.target.value) })}
                    options={options}
                    optionType="button"
                    buttonStyle="solid"
                />
            </Form.Item>
        </Form>
    );
};
