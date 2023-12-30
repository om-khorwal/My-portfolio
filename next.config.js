// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');

const nextConfig = {}; // Your current Next Config object

module.exports = withNextVideo(nextConfig);