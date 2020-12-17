import { useCallback, useEffect, useState } from 'react';

export const useStateObject = <T>(initial: T) => {
    const [state, setState] = useState<T>(initial);

    const update = useCallback(
        (o: Partial<T>) => {
            setState({ ...state, o });
        },
        [state],
    );

    return [state, update];
};

// Source: https://usehooks.com/useDebounce/
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};

// Source:

export const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {
    const mediaQueryLists = queries.map((q) => window.matchMedia(q));

    const getValue = () => {
        const index = mediaQueryLists.findIndex((mql) => mql.matches);

        return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        const handler = () => setValue(getValue);

        mediaQueryLists.forEach((mql) => mql.addListener(handler));

        return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    }, []);

    return value;
};
