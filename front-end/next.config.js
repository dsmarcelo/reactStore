/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.lorem.space", "www.google.com", "placeimg.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
