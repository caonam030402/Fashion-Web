/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.etq-amsterdam.com",
      },
      {
        hostname: "cdn.shopify.com",
      },
      {
        hostname: "cdn.haitrieu.com",
      },
      { hostname: "canhme.com" },
    ],
  },
};

export default nextConfig;
