/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/what-are-the-chances',
  assetPrefix: '/what-are-the-chances/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
