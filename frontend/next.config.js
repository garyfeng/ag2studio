/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Maintaining similar prefix path behavior as Gatsby
  basePath: process.env.PREFIX_PATH_VALUE || '',
  transpilePackages: ['react-syntax-highlighter'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
}

module.exports = nextConfig
