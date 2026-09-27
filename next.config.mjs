/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/figma-discord-integration',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
