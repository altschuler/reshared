const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
    // Your existing module.exports

    sentry: {
        // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
        // for client-side builds. (This will be the default starting in
        // `@sentry/nextjs` version 8.0.0.) See
        // https://webpack.js.org/configuration/devtool/ and
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
        // for more information.
        hideSourceMaps: true,

        // This option will automatically provide performance monitoring for Next.js
        // data-fetching methods and API routes, making the manual wrapping of API
        // routes via `withSentry` redundant.
        autoInstrumentServerFunctions: true,
    },
    images: {
        domains: ['kghtoguwbjifomvtvumw.nhost.run', 'hgtsjdxovopboicvsfhk.nhost.run', 'local.storage.nhost.run'],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.txt$/i,
            loader: "raw-loader",
        });

        config.module.rules.push({
            test: /\.html$/i,
            loader: "raw-loader",
        });

        return config;
    },
};

const sentryWebpackPluginOptions = {
    silent: true, // Suppresses all logs
    dryRun: process.env.VERCEL_ENV !== "production"
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withBundleAnalyzer(withSentryConfig(moduleExports, sentryWebpackPluginOptions));
