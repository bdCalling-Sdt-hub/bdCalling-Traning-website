/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true,
  // output: "export",
  images: {
    // unoptimized: true,
    remotePatterns: [
      { hostname: "i.ibb.co" },
      { hostname: "i.postimg.cc" },
      { hostname: "192.168.10.13" },
      { hostname: "pngall.com" },
      { hostname: "68.183.224.38" },
      { hostname: "bdcallingacademy.com" },
      { hostname: "server.bdcallingacademy.com" },
    ],
  },
};

module.exports = nextConfig;
