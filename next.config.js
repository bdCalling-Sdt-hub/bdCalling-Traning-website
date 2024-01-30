/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co" },
      { hostname: "i.postimg.cc" },
      { hostname: "192.168.10.13" },
      { hostname: "pngall.com" },
      { hostname: "68.183.224.38" },
    ],
  },
  publicRuntimeConfig: {
    server: {
      target: "server",
      host: "68.183.224.38",
      port: 3000,
    },
  },
};

module.exports = nextConfig;
