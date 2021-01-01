import {
    Activities_Insert_Input,
    Entities_Insert_Input,
    ServerInsertActivitiesDocument,
} from '../generated/server-queries';
import {
    Activity_Verb_Enum,
    Entities_Constraint,
    Entities_Obj_Rel_Insert_Input,
    Entities_Update_Column,
} from '../generated/graphql';
import { EventHandlerContext } from './utils';

export interface ActivityInput {
    actorId: string;
    verb: Activity_Verb_Enum;
    entity: Entities_Insert_Input;
    secondaryEntity?: Entities_Insert_Input;
    receivers?: string[];
}

export const insertActivities = (ctx: EventHandlerContext, inputs: ActivityInput[]) => {
    return ctx.adminClient.mutate({
        mutation: ServerInsertActivitiesDocument,
        variables: { input: inputs.map(toInsert) },
    });
};

const entityConstraint = (input: Entities_Insert_Input): Entities_Constraint => {
    if (input.thing_id) {
        return Entities_Constraint.EntitiesThingIdKey;
    }

    if (input.group_id) {
        return Entities_Constraint.EntitiesGroupIdKey;
    }

    if (input.join_request_id) {
        return Entities_Constraint.EntitiesJoinRequestIdKey;
    }

    if (input.user_id) {
        return Entities_Constraint.EntitiesUserIdKey;
    }

    if (input.group_post_id) {
        return Entities_Constraint.EntitiesGroupPostIdKey;
    }

    if (input.group_post_comment_id) {
        return Entities_Constraint.EntitiesGroupPostCommentIdKey;
    }

    throw new Error('Invalid entity: no id specified');
};

const makeEntityInsert = (
    input?: Entities_Insert_Input,
): Entities_Obj_Rel_Insert_Input | undefined =>
    input && {
        data: input,
        on_conflict: {
            constraint: entityConstraint(input),
            // We just update ID because otherwise the request fails with "zero rows affected"
            update_columns: [Entities_Update_Column.Id],
        },
    };

const toInsert = (input: ActivityInput): Activities_Insert_Input => {
    return {
        actor_id: input.actorId,
        verb: input.verb,
        entity: makeEntityInsert(input.entity),
        secondary_entity: makeEntityInsert(input.secondaryEntity),
        // Notify all users in group except thing owner
        notifications: {
            data: input.receivers?.map((userId) => ({ user_id: userId })) || [],
        },
    };
};

export const opToVerb = (type: 'INSERT' | 'UPDATE' | 'DELETE' | 'MANUAL'): Activity_Verb_Enum => {
    switch (type) {
        case 'INSERT':
            return Activity_Verb_Enum.Added;
        case 'UPDATE':
            return Activity_Verb_Enum.Updated;
        case 'DELETE':
            return Activity_Verb_Enum.Deleted;
        // Should never happen
        default:
            return Activity_Verb_Enum.Updated;
    }
};
