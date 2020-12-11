import React from 'react';
import { Thing_Type_Enum } from '../../generated/graphql';
import { Select } from 'antd';

export interface ThingTypeSelectProps {
    value: Thing_Type_Enum | null;
    onChange: (value: Thing_Type_Enum | null) => unknown;
}

const options = [
    { label: 'Lend', value: Thing_Type_Enum.Lend },
    { label: 'Give', value: Thing_Type_Enum.Give },
    { label: 'Have some', value: Thing_Type_Enum.HaveSome },
    { label: 'Other', value: Thing_Type_Enum.Other },
];

export const ThingTypeSelect = (props: ThingTypeSelectProps) => {
    return (
        <Select
            value={props.value || undefined}
            onChange={(v) => props.onChange(v || null)}
            options={options}
            placeholder="Type"
        />
    );
};
