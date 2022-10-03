import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(RelativeTime);

export type DateDisplayMode = 'datetime' | 'date' | 'time';

export interface DateDisplayProps {
    utc?: Date | string | null;
    mode?: DateDisplayMode;
    showDistance?: boolean;
}

const formats: { [P in DateDisplayMode]: string } = {
    datetime: 'MMM D. YY, HH:mm',
    date: 'MMM D. YY',
    time: 'HH:mm',
};

export const DateDisplay = (props: DateDisplayProps) => {
    const utc =
        props.utc && (dayjs(props.utc).isValid() ? (props.utc as Date) : dayjs(props.utc, 'iso'));

    return (
        <span>
            {utc ? dayjs(utc).format(formats[props.mode || 'date']) : '-'}
            {utc && props.showDistance && ` (${dayjs(utc).fromNow()})`}
        </span>
    );
};
