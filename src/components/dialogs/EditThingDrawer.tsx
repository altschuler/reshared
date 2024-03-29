﻿import { noop } from 'lodash-es';
import { Drawer, message, Spin } from 'antd';
import { head } from 'lodash-es';
import { useCallback } from 'react';
import {
    GqlOps,
    ThingCardFragment,
    useDeleteThingMutation,
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

    const [updateThing, updateMutation] = useUpdateThingMutation();
    const [deleteThing, deleteMutation] = useDeleteThingMutation({
        refetchQueries: [GqlOps.Query.ThingList],
        awaitRefetchQueries: true,
    });

    const detailsQuery = useThingDetailsQuery({
        variables: { shortId: thing.short_id },
        onCompleted: (data) => {
            if (head(data.things)) {
                editorState.resetTo(makeEditorThing(head(data.things)));
            }
        },
    });

    const handleSave = useCallback(() => {
        const input = asThingUpdateInput(editorState);

        updateThing({ variables: { input } })
            .then(({ data }) => {
                if (data?.updateThing?.thing) {
                    message.success('Thing updated');
                    resolve(data.updateThing.thing);
                }
            })
            .catch(noop);
    }, [editorState, resolve, updateThing]);

    const handleDelete = useCallback(() => {
        deleteThing({ variables: { id: thing.id } }).then(() => {
            message.info(`${thing.name} deleted`);
            dispose();
        });
    }, [deleteThing, dispose, thing.id, thing.name]);

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title="Edit thing"
            placement="right"
            onClose={dispose}
            open={visible}>
            <Spin spinning={detailsQuery.loading}>
                <ThingEditor
                    state={editorState}
                    error={updateMutation.error?.message}
                    submitLabel="Save"
                    loading={updateMutation.loading}
                    deleteLoading={deleteMutation.loading}
                    onSubmit={handleSave}
                    onDelete={handleDelete}
                />
            </Spin>
        </Drawer>
    );
};
