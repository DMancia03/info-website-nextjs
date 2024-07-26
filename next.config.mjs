/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //domains: ['upload.wikimedia.org', 'logowik.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'logowik.com',
            },
        ],
    },
};

export default nextConfig;
