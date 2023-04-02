/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

const withVideos = require("next-videos");

module.exports = withVideos();

module.exports = nextConfig
