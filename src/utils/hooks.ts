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
