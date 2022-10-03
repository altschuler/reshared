import { noop } from 'lodash-es';
import { Drawer, message } from 'antd';
import { useCallback } from 'react';
import {
    GqlOps,
    GroupCardFragment,
    Thing_Type_Enum,
    ThingCardFragment,
    useCreateThingMutation,
} from '../../generated/graphql';
import { DialogProps } from './DialogProvider';
import { asThingCreateInput, ThingEditor, useThingEditor } from '../editors';

export interface CreateThingDrawerProps extends DialogProps<ThingCardFragment | null> {
    group?: GroupCardFragment;
}

export const CreateThingDrawer = (props: CreateThingDrawerProps) => {
    const { resolve, dispose, visible } = props;

    const editorState = useThingEditor({
        name: '',
        groups: props.group ? [props.group] : [],
        images: [],
        type: Thing_Type_Enum.Lend,
        description: '',
        category: '',
        expiry: null,
        enabled: true,
    });

    const [createThing, createMutation] = useCreateThingMutation({
        refetchQueries: [GqlOps.Query.ThingList, GqlOps.Query.GroupActivity],
    });

    const handleCreateGroup = useCallback(() => {
        const input = asThingCreateInput(editorState);
        createThing({ variables: { input } })
            .then(({ data }) => {
                if (data?.insert_things_one) {
                    message.success("Thing shared, you're awesome!");
                    editorState.reset();
                    resolve(data?.insert_things_one);
                }
            })
            .catch(noop);
    }, [createThing, editorState, resolve]);

    return (
        <Drawer
            bodyStyle={{ maxWidth: '100%' }}
            width={400}
            title="Share a thing"
            placement="right"
            onClose={dispose}
            open={visible}>
            <ThingEditor
                error={createMutation.error?.message}
                state={editorState}
                loading={createMutation.loading}
                submitLabel="Share"
                onSubmit={handleCreateGroup}
            />
        </Drawer>
    );
};
