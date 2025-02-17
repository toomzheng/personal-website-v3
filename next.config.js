/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/',
  basePath: '',
  // Cloudflare Pages specific configuration
  experimental: {
    optimizeFonts: false,
  }
}

module.exports = nextConfig
