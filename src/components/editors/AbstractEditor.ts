import { useCallback, useState } from 'react';

export interface EditorState<T> {
    present: T;
    set: (state: T) => void;
    reset: (forceDefault?: boolean) => void;
    update: (update: Partial<T>) => void;
}

export const createUseEditor = <T>(defaultState: T) => (initial?: T): EditorState<T> => {
    const [state, setState] = useState<T>(initial || defaultState);

    const update = useCallback(
        (update: Partial<T>) => {
            setState({ ...state, ...update });
        },
        [state],
    );

    const reset = useCallback(
        (forceDefault?: boolean) => {
            setState(forceDefault ? defaultState : initial || defaultState);
        },
        [initial],
    );

    return {
        present: state,
        set: setState,
        reset,
        update,
    };
};
