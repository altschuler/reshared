import {
    createContext,
    FunctionComponent,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import { uniqueId } from 'lodash-es';

export interface DialogProps<T> {
    visible: boolean;
    resolve: (value: T) => unknown;
    dispose: () => unknown;
}

export interface Dialog<T, TProps extends DialogProps<T> = DialogProps<T>> {
    id: string;
    visible: boolean;
    extraProps: unknown;
    resolve: (value: T) => void;
    reject: (reason?: any) => void;
    component: FunctionComponent<TProps>;
}

export interface DialogContextState {
    showDialog: <T, TProps extends DialogProps<T>>(
        component: FunctionComponent<TProps>,
        extraProps?: Partial<Omit<TProps, 'resolve' | 'dispose'>>,
    ) => Promise<T>;
}

export const DialogContext = createContext<DialogContextState>({
    showDialog: () => new Promise(() => 0),
});

export const useDialogs = () => useContext(DialogContext);

export interface DialogsProviderProps {
    children: ReactNode;
}

export const DialogsProvider = (props: DialogsProviderProps) => {
    const [activeDialogs, setActiveDialogs] = useState<Dialog<unknown>[]>([]);

    const removeDialog = useCallback(
        (id: string) => {
            // set the dialog invisible (will play the hide animation)
            setActiveDialogs(
                activeDialogs.map((d) => (d.id === id ? { ...d, visible: false } : d)),
            );

            // remove the dialog after one second, enough time for the hide animation to finish
            setTimeout(() => setActiveDialogs(activeDialogs.filter((d) => d.id !== id)), 1000);
        },
        [activeDialogs],
    );

    const resolveDialog = useCallback(
        <T extends unknown>(dialog: Dialog<T>, value: T) => {
            dialog.resolve(value);
            removeDialog(dialog.id);
        },
        [removeDialog],
    );

    const disposeDialog = useCallback(
        <T extends unknown>(dialog: Dialog<T>, reason?: any) => {
            //  dialog.reject(reason);
            removeDialog(dialog.id);
        },
        [removeDialog],
    );

    const showDialog = useCallback(
        <T extends unknown, TProps extends DialogProps<T>>(
            component: FunctionComponent<TProps>, // (props: TProps) => JSX.Element,
            extraProps?: Partial<Omit<TProps, 'resolve' | 'dispose'>>,
        ) =>
            new Promise<T>((resolve, reject) =>
                setActiveDialogs([
                    ...activeDialogs,
                    {
                        id: uniqueId(),
                        component: component as FunctionComponent<unknown>,
                        visible: true,
                        resolve,
                        reject,
                        extraProps,
                    },
                ]),
            ),
        [activeDialogs],
    );

    const state = useMemo(() => ({ showDialog }), [showDialog]);

    const dialogStack = useMemo(
        () =>
            activeDialogs.map(<T extends unknown>(dialog: Dialog<T>) => (
                <dialog.component
                    key={dialog.id}
                    {...dialog.extraProps}
                    visible={dialog.visible}
                    resolve={(value: T) => resolveDialog(dialog, value)}
                    dispose={(reason?: any) => disposeDialog(dialog, reason)}
                />
            )),
        [activeDialogs, disposeDialog, resolveDialog],
    );

    return (
        <DialogContext.Provider value={state}>
            {props.children}

            {dialogStack}
        </DialogContext.Provider>
    );
};
