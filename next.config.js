/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Vercel deployment
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable compression
  compress: true,
  // Generate sitemap
  generateBuildId: async () => {
    return 'tagbridge-build'
  }
}

module.exports = nextConfig