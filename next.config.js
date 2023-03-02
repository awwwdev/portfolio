/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
});

module.exports = nextConfig;
