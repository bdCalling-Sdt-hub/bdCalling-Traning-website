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
};

module.exports = nextConfig;
