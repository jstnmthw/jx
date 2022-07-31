/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.gravatar.com']
    },
    experimental: {
        images: {
            allowFutureImage: true
        }
    }
}

module.exports = nextConfig
