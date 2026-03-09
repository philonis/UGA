/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.cloudflare.steamstatic.com', 'avatars.steamstatic.com'],
  },
}

module.exports = nextConfig
