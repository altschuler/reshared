import { noop } from 'lodash';
import { Drawer, message, Spin } from 'antd';
import { useCallback } from 'react';
import {
    ThingCardFragment,
    useThingDetailsQuery,
    useUpdateThingMutation,
} from '../../generated/graphql';
import { DialogProps } from './DialogProvider';
import { asThingUpdateInput, makeEditorThing, ThingEditor, useThingEditor } from '../editors';

export interface EditThingDrawerProps extends DialogProps<ThingCardFragment | null> {
    thing: ThingCardFragment;
}

export const EditThingDrawer = (props: EditThingDrawerProps) => {
    const { resolve, dispose, visible, thing } = props;

    const editorState = useThingEditor();

    const [updateThing, mutation] = useUpdateThingMutation();

    const detailsQuery = useThingDetailsQuery({
        variables: { id: thing.id },
        onCompleted: (data) => {
            if (data.things_by_pk) {
                editorState.resetTo(makeEditorThing(data.things_by_pk));
            }
        },
    });

    const handleSave = useCallback(() => {
        const input = asThingUpdateInput(editorState);

        updateThing({ variables: { input } })
            .then(({ data }) => {
                if (data?.updateThing?.thing) {
                    message.success('Thing updated');
                    resolve(data?.updateThing?.thing);
                }
            })
            .catch(noop);
    }, [editorState, resolve, updateThing]);

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title="Edit thing"
            placement="right"
            onClose={dispose}
            visible={visible}>
            <Spin spinning={detailsQuery.loading}>
                <ThingEditor
                    error={mutation.error?.message}
                    state={editorState}
                    loading={mutation.loading}
                    submitLabel="Save"
                    onSubmit={handleSave}
                />
            </Spin>
        </Drawer>
    );
};
