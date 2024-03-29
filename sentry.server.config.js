// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const SENTRY_DISABLE = process.env.SENTRY_DISABLE || process.env.NEXT_PUBLIC_SENTRY_DISABLE;

if (!SENTRY_DISABLE) {
    Sentry.init({
        autoSessionTracking: false,
        dsn: SENTRY_DSN || 'https://2169bd6c993847aca2e31fa821bd6909@o146636.ingest.sentry.io/5555148',
        // Adjust this value in production, or use tracesSampler for greater control
        tracesSampleRate: 0,
        enabled: process.env.NODE_ENV === 'production',
        // ...
        // Note: if you want to override the automatic release value, do not set a
        // `release` value here - use the environment variable `SENTRY_RELEASE`, so
        // that it will also get attached to your source maps
    });
}
