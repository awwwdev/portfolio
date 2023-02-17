/** @type {import('next').NextConfig} */

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
// });
// const path = require('path');
const UnoCSS = require("@unocss/webpack").default;

const { withContentlayer } = require("next-contentlayer");

const nextConfig = withContentlayer({
  // experimental: {
  //   appDir: true,
  // },
  swcMinify: true,
  // reactStrictMode: true,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  webpack(config, context) {
    config.cache = false;
    config.plugins.push(
      UnoCSS() // <--
    );

    if (context.buildId !== "development") {
      config.cache = false;
    }
    return config;
  },
  // pageExtensions: ["tsx", "md", "rtl.md", "rtl.mdx", "js", "jsx", "mdx"],
});

module.exports = nextConfig;
