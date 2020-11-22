import React from 'react';
import { format, formatDistance, parseISO, isDate } from 'date-fns';

export type DateDisplayMode = 'datetime' | 'date' | 'time';

export interface DateDisplayProps {
    utc?: Date | string | null;
    mode?: DateDisplayMode;
    showDistance?: boolean;
}

const formats: { [P in DateDisplayMode]: string } = {
    datetime: 'do. MMM yy, HH:mm',
    date: 'do. MMM yy',
    time: 'HH:mm',
};

export const DateDisplay = (props: DateDisplayProps) => {
    const utc =
        props.utc && (isDate(props.utc) ? (props.utc as Date) : parseISO(props.utc as string));
    return (
        <span>
            {utc ? format(utc, formats[props.mode || 'date']) : '-'}
            {utc &&
                props.showDistance &&
                ` (${formatDistance(utc, new Date(), { addSuffix: true })})`}
        </span>
    );
};
