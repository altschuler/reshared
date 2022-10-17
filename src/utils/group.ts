import {
    Group_Role_Enum,
    GroupCardFragment,
    UserPrivateDetailFragment,
} from '../generated/graphql';
import { useMemo } from 'react';
import { useAuth } from './auth';

export const isMember = (
    group?: GroupCardFragment | null,
    user?: UserPrivateDetailFragment | null,
    roles?: Group_Role_Enum[],
) => {
    return (
        group &&
        user?.memberships.some((m) => m.group.id === group.id && (!roles || roles.includes(m.role)))
    );
};

export const useMembership = (group?: GroupCardFragment | null) => {
    const auth = useAuth();

    return useMemo(
        () => ({
            isOwner: isMember(group, auth.userDetails, [Group_Role_Enum.Owner]),
            isAdmin: isMember(group, auth.userDetails, [
                Group_Role_Enum.Admin,
                Group_Role_Enum.Owner,
            ]),
            isMember: isMember(group, auth.userDetails),
            user: auth.user,
        }),
        [auth.user, group],
    );
};
