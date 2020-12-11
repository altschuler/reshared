import { useCallback, useState } from 'react';

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
