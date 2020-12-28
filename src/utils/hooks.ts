import { useCallback, useEffect, useState } from 'react';

export const useStateObject = <T>(initial: T) => {
    const [value, setValue] = useState<T>(initial);

    const update = useCallback((o: Partial<T>) => setValue({ ...value, ...o }), [value]);

    return { value, update };
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
const useMediaSsr = <T>(queries: string[], values: T[], defaultValue: T) => defaultValue;
const useMediaBrowser = <T>(queries: string[], values: T[], defaultValue: T) => {
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return value;
};

export const useMedia = process.browser ? useMediaBrowser : useMediaSsr;
