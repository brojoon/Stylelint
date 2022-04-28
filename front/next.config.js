/** @type {import('next').NextConfig} */
const withImages = require('next-images');
module.exports = withImages();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
