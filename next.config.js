/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/m1ul24" : "",
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
