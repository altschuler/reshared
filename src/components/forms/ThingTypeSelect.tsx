import { CSSProperties } from 'react';
import { Thing_Type_Enum } from '../../generated/graphql';
import { Select } from 'antd';
import { GenericSelectProps } from './utils';

export type ThingTypeSelectProps = GenericSelectProps<Thing_Type_Enum> & {
    placeholder?: string;
    allowClear?: boolean;
    style?: CSSProperties;
};

const OPTIONS = [
    { label: 'Lend', value: Thing_Type_Enum.Lend },
    { label: 'Give', value: Thing_Type_Enum.Give },
    { label: 'Have some', value: Thing_Type_Enum.HaveSome },
    { label: 'Other', value: Thing_Type_Enum.Other },
];

export const ThingTypeSelect = (props: ThingTypeSelectProps) => {
    return (
        <Select
            mode={props.multiple ? 'multiple' : undefined}
            value={props.value || undefined}
            onChange={props.onChange}
            options={OPTIONS}
            placeholder={props.placeholder || 'Type'}
            allowClear={props.allowClear}
            style={props.style}
        />
    );
};
