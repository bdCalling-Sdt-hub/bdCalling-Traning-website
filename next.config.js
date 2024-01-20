/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co" },
      { hostname: "i.postimg.cc" },
      { hostname: "192.168.10.13" },
      { hostname: "pngall.com" },
    ],
  },
  publicRuntimeConfig: {
    server: {
      target: "server",
      host: "192.168.10.16",
      port: 3000,
    },
  },
};

module.exports = nextConfig;
