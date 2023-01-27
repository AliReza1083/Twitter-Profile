/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com", "firebasestorage.googleapis.com", "upcdn.io"],
  },
};

module.exports = nextConfig;
