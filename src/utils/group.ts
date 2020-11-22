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
    role?: Group_Role_Enum,
) => {
    return (
        group &&
        user?.memberships.some((m) => m.group.id === group.id && (!role || m.role === role))
    );
};

export const isAdmin = (
    group?: GroupCardFragment | null,
    user?: UserPrivateDetailFragment | null,
) => isMember(group, user);

export const useIsAdmin = (group?: GroupCardFragment | null) => {
    const auth = useAuth();

    return useMemo(() => isAdmin(group, auth.user), [auth.user, group]);
};
