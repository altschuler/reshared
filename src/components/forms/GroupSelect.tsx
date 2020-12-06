import React, { useCallback, useMemo } from 'react';
import { Select } from 'antd';
import { useAuth } from '../../utils/auth';
import { GroupCardFragment } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        minWidth: 200,
    },
});

interface GroupOption {
    label: string;
    value: string;
    group: GroupCardFragment;
}

interface BaseGroupSelectProps {
    placeholder?: string;
    allowClear?: boolean;
}

interface SingleGroupSelectProps extends BaseGroupSelectProps {
    multiple: false | undefined;
    value: GroupCardFragment | null;
    onChange: (value: GroupCardFragment) => unknown;
}

interface MultipleGroupSelectProps extends BaseGroupSelectProps {
    multiple: true;
    value: GroupCardFragment[];
    onChange: (value: GroupCardFragment[]) => unknown;
}

export type GroupSelectProps = SingleGroupSelectProps | MultipleGroupSelectProps;

const makeOption = (group: GroupCardFragment): GroupOption => ({
    label: group.name,
    value: group.id,
    group,
});

export const GroupSelect = (props: GroupSelectProps) => {
    const auth = useAuth();
    const classes = useStyles();

    const groups = useMemo(() => auth.user?.memberships.map((m) => m.group) || [], [
        auth.user?.memberships,
    ]);
    const options = useMemo(() => groups.map(makeOption), [groups]);

    const value = useMemo(() => {
        if (props.multiple) {
            return props.value.map((g) => g.id);
        }

        return props.value?.id || undefined;
    }, [props.multiple, props.value]);

    const handleChange = useCallback(
        (id: string, options: GroupOption | GroupOption[]) => {
            if (props.multiple) {
                props.onChange((options as GroupOption[]).map((o) => o.group));
            } else {
                props.onChange((options as GroupOption)?.group || null);
            }
        },
        [props],
    );

    const filterGroup = useCallback(
        (input: string, option: GroupOption) =>
            option.group.name.toLowerCase().indexOf(input.toLowerCase()) !== -1,
        [],
    );

    return (
        <Select
            filterOption={filterGroup}
            placeholder={props.placeholder}
            allowClear={props.allowClear}
            className={classes.root}
            value={value}
            options={options}
            mode={props.multiple ? 'multiple' : undefined}
            onChange={handleChange}
        />
    );
};
