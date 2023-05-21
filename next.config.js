/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd8c5gilsw3qw4.cloudfront.net',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
