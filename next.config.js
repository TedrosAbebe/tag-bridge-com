/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Vercel deployment
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable compression
  compress: true,
  // Remove experimental optimizeCss that's causing the critters error
  poweredByHeader: false,
  // Generate sitemap
  generateBuildId: async () => {
    return 'tagbridge-build'
  }
}

module.exports = nextConfig