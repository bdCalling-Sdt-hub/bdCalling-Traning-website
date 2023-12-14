/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  server: {
    target: "server",
    host: "192.168.10.16",
    port: 3001,
  },
};

module.exports = nextConfig;
