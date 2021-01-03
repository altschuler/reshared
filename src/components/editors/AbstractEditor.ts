import { useCallback, useMemo, useState } from 'react';
import { set, isEmpty } from 'lodash';
import Joi from 'joi';
import { useDebounce } from '../../utils/hooks';

export interface EditorState<T> {
    present: T;
    set: (state: T) => void;
    reset: (forceDefault?: boolean) => void;
    resetTo: (value: T) => void;
    update: (update: Partial<T>) => void;
    errors: { all?: any; touched?: any };
    touch: (path: string | string[]) => unknown;
    touched: string[];
    submit: () => boolean;
    ant: (path: string) => { help?: string; validateStatus: 'error' | 'success' };
}

export const createUseEditor = <T>(defaultState: T, schema?: Joi.ObjectSchema<T>) => (
    initial?: Partial<T>,
): EditorState<T> => {
    const [state, setState] = useState<T>(initial ? { ...defaultState, ...initial } : defaultState);
    const [touched, setTouched] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);
    // Used for validation trigger, to avoid wasting too many precious cycles
    const debouncedState = useDebounce(state, 200);

    const update = useCallback((update: Partial<T>) => setState({ ...state, ...update }), [state]);

    const resetTo = useCallback((value: T) => {
        setState(value);
        setTouched([]);
        setSubmitted(false);
    }, []);

    const reset = useCallback(
        (forceDefault?: boolean) =>
            resetTo(forceDefault ? defaultState : { ...defaultState, ...initial } || defaultState),
        [initial, resetTo],
    );

    const errors = useMemo(() => {
        const errors = { all: {}, touched: {} };

        if (!schema) {
            return errors;
        }

        const result = schema.validate(debouncedState, { abortEarly: false, allowUnknown: true });

        result.error?.details.forEach((d) => {
            set(errors.all, d.path, d.message);
            if (submitted || touched.includes(d.path.join('.'))) {
                set(errors.touched, d.path, d.message);
            }
        });

        return errors;
    }, [debouncedState, submitted, touched]);

    const touch = useCallback(
        (path: string | string[]) =>
            setTouched([...touched, Array.isArray(path) ? path.join('.') : path]),
        [touched],
    );

    const submit = useCallback(() => {
        setSubmitted(true);
        return isEmpty(errors.all);
    }, [errors.all]);

    const ant = useCallback(
        (path: string) => ({
            validateStatus: errors.touched[path] ? 'error' : ('success' as 'error' | 'success'),
            help: errors.touched[path],
        }),
        [errors.touched],
    );

    return {
        present: state,
        set: setState,
        reset,
        resetTo,
        update,
        errors,
        touch,
        touched,
        submit,
        ant,
    };
};
