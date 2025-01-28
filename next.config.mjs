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

export default withSentryConfig(nextConfig, {
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
});
