import React, { useCallback, useMemo, useState } from 'react';
import { Select } from 'antd';
import { useAuth } from '../../utils/auth';
import { UserCardFragment, useUserListQuery } from '../../generated/graphql';
import { createUseStyles } from 'react-jss';
import { useDebounce } from '../../utils/hooks';
import clsx from 'clsx';

const useStyles = createUseStyles({
    root: {
        minWidth: 200,
    },
});

interface UserOption {
    label: string;
    value: string;
    user: UserCardFragment;
}

interface BaseUserSelectProps {
    placeholder?: string;
    allowClear?: boolean;
    includeSelf?: boolean;
    className?: string;
    bordered?: boolean;
    autoFocus?: boolean;
}

interface SingleUserSelectProps extends BaseUserSelectProps {
    multiple: false | undefined;
    value: UserCardFragment | null;
    onChange: (value: UserCardFragment) => unknown;
}

interface MultipleUserSelectProps extends BaseUserSelectProps {
    multiple: true;
    value: UserCardFragment[];
    onChange: (value: UserCardFragment[]) => unknown;
}

export type UserSelectProps = SingleUserSelectProps | MultipleUserSelectProps;

const makeOption = (user: UserCardFragment): UserOption => ({
    label: user.displayName,
    value: user.id,
    user: user,
});

export const UserSelect = (props: UserSelectProps) => {
    const auth = useAuth();
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 200);

    const { data, loading } = useUserListQuery({
        variables: {
            where: { displayName: { _ilike: `%${debouncedQuery}%` }, id: { _neq: auth.user?.id } },
            limit: 10,
        },
    });
    const options = useMemo(() => (data?.users || []).map(makeOption), [data?.users]);

    const value = useMemo(
        () => (props.multiple ? props.value.map((g) => g.id) : props.value?.id || undefined),
        [props.multiple, props.value],
    );

    const handleChange = useCallback(
        (id: string, options: UserOption | UserOption[]) => {
            if (props.multiple) {
                props.onChange((options as UserOption[]).map((o) => o.user));
            } else {
                props.onChange((options as UserOption)?.user || null);
            }
        },
        [props],
    );

    const filterUser = useCallback(
        (input: string, option: UserOption) =>
            option.user.displayName.toLowerCase().indexOf(input.toLowerCase()) !== -1,
        [],
    );

    return (
        <Select
            autoFocus={props.autoFocus}
            bordered={props.bordered}
            loading={loading}
            filterOption={filterUser}
            searchValue={query}
            onSearch={setQuery}
            placeholder={props.placeholder}
            allowClear={props.allowClear}
            className={clsx(classes.root, props.className)}
            value={value}
            options={options}
            mode={props.multiple ? 'multiple' : undefined}
            onChange={handleChange}
        />
    );
};
