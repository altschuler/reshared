export type SingleSelectProps<T> = {
    multiple: false | undefined;
    value: T | null;
    onChange: (value: T) => unknown;
};

export type MultipleSelectProps<T> = {
    multiple: true;
    value: T[];
    onChange: (value: T[]) => unknown;
};

export type GenericSelectProps<T> = SingleSelectProps<T> | MultipleSelectProps<T>;
