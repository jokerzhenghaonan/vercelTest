/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ],
            },
        ];
    },
    webpack: (config, { isServer }) => {
        config.experiments = {
            ...config.experiments,
            asyncWebAssembly: true,
        };
        return config;
    },
    experimental: {
    serverComponentsExternalPackages: [
        "puppeteer-core",
        "@sparticuz/chromium-min",
        "puppeteer-extra",
        "puppeteer-extra-plugin-stealth"
    ],
    },
};
export default nextConfig;
