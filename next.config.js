/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['https://raw.githubusercontent.com'],
    },
};

module.exports = nextConfig;
