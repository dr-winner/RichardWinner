import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        instrumentationHook: true,
    },
    webpack(config, options) {
        if (options.isServer) {
            const originalEntry = config.entry;
            config.entry = async () => {
                const entries = await originalEntry();
                if (entries['main.js'] && !entries['main.js'].includes('./instrumentation.ts')) {
                    entries['main.js'].unshift('./instrumentation.ts');
                }
                return entries;
            };
        }
        return config;
    },
};

export default withSentryConfig(withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
silent: true,
org: "javascript-mastery",
project: "javascript-nextjs",
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

widenClientFileUpload: true,
transpileClientSDK: true,
hideSourceMaps: true,
disableLogger: true,
automaticVercelMonitors: true,
}), {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

org: "student-usz",
project: "javascript-nextjs-1r",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,

// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});