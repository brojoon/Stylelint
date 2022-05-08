/** @type {import('next').NextConfig} */
const withImages = require('next-images');
// const withPlugins = require('next-compose-plugins');
module.exports = withImages();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

// const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
// [
//   withBundleAnalyzer,
//   {
//     analyzeServer: ['server', 'both'].includes('both'),
//     analyzeBrowser: ['browser', 'both'].includes('both'),
//     bundleAnalyzerConfig: {
//       server: {
//         analyzerMode: 'static',
//         reportFilename: '../bundles/server.html',
//       },
//       browser: {
//         analyzerMode: 'static',
//         reportFilename: '../bundles/client.html',
//       },
//     },
//   },
// ],
