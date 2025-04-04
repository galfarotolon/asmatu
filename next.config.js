/** @type {import('next').NextConfig} */
const nextConfig = {
    // If you want to keep a rewrite for something else, do it here.
    // But remove the i18n block entirely:
    images: {
        remotePatterns: [

            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/**',
            },
        ],

    },
    async rewrites() {
        return [
            {
                source: '/studio/:path*',
                destination: '/studio/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
