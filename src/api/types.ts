import { GetIdTokenClaimsOptions, IdToken } from '@auth0/auth0-react';

export type GetIdTokenClaimsFn = (options?: GetIdTokenClaimsOptions) => Promise<IdToken>;
