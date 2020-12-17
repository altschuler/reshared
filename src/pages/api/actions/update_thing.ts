import {
    ServerFetchThingDetailsDocument,
    ServerUpdateThingDocument,
} from '../../../generated/server-queries';
import Joi from 'joi';
import { difference } from 'lodash';

import {
    Group_Thing_Constraint,
    Thing_Images_Constraint,
    Thing_Images_Update_Column,
    Thing_Type_Enum,
    UpdateGroupThing,
    UpdateThingImage,
    UpdateThingInput,
    UpdateThingMutationVariables,
    UpdateThingResult,
} from '../../../generated/graphql';
import { makeAuthorizedHandler, hasuraClient } from '../../../server';
import { format, parseISO } from 'date-fns';

export default makeAuthorizedHandler<UpdateThingMutationVariables, UpdateThingResult>(
    Joi.object<UpdateThingMutationVariables>({
        input: Joi.object<UpdateThingInput>({
            id: Joi.string().uuid({ version: 'uuidv4' }),
            name: Joi.string().optional(),
            description: Joi.string().optional().allow(''),
            type: Joi.string().valid('give', 'have_some', 'lend', 'other').optional(),
            category: Joi.string().optional().allow(''),
            expiry: Joi.date().optional().allow(null),
            enabled: Joi.boolean().optional(),
            groups: Joi.array().items(
                Joi.object<UpdateGroupThing>({
                    groupId: Joi.string().uuid({ version: 'uuidv4' }),
                }),
            ),
            images: Joi.array().items(
                Joi.object<UpdateThingImage>({
                    fileId: Joi.string().uuid({ version: 'uuidv4' }),
                    description: Joi.string().optional().allow(''),
                    order: Joi.number().integer().min(0),
                }),
            ),
        }),
    }),
    async (args, ctx) => {
        const detailsQuery = await hasuraClient.query({
            query: ServerFetchThingDetailsDocument,
            variables: { id: args.input.id },
        });

        const existing = detailsQuery.data.things_by_pk;

        if (!existing) {
            return ctx.error('Thing not found');
        }

        // Find deleted groups and images
        const deletedGroupIds = args.input.groups
            ? difference(
                  existing.group_relations.map((g) => g.group.id),
                  args.input.groups.map((g) => g.groupId),
              )
            : [];
        const deletedFileIds = args.input.images
            ? difference(
                  existing.images.map((i) => i.file_id),
                  args.input.images.map((i) => i.fileId),
              )
            : [];

        console.log(args.input.expiry);
        console.log(args.input.expiry && format(args.input.expiry, 'yyyy-MM-dd'));

        // Update fields
        const mutation = await hasuraClient.mutate({
            mutation: ServerUpdateThingDocument,
            variables: {
                id: existing.id,
                deletedGroupIds,
                deletedFileIds,
                input: {
                    id: existing.id,
                    short_id: existing.short_id,
                    owner_id: existing.owner.id,
                    category: args.input.category,
                    name: args.input.name,
                    type: args.input.type as Thing_Type_Enum | undefined,
                    description: args.input.description,
                    enabled: args.input.enabled,
                    // format(args.input.expiry , 'yyyy-MM-dd')
                    expiry: args.input.expiry,
                    group_relations: {
                        data: args.input.groups
                            ? args.input.groups.map((g) => ({ group_id: g.groupId }))
                            : [],
                        on_conflict: {
                            constraint: Group_Thing_Constraint.GroupThingGroupIdThingIdKey,
                            update_columns: [],
                        },
                    },
                    images: {
                        data: args.input.images
                            ? args.input.images.map((i) => ({
                                  file_id: i.fileId,
                                  description: i.description,
                                  order: i.order,
                              }))
                            : [],
                        on_conflict: {
                            constraint: Thing_Images_Constraint.ThingImagesFileIdKey,
                            update_columns: [
                                Thing_Images_Update_Column.Description,
                                Thing_Images_Update_Column.Order,
                            ],
                        },
                    },
                },
            },
        });

        ctx.success({ thing_id: mutation.data?.insert_things_one?.id });
    },
);
