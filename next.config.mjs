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
    ],
  },
};

export default nextConfig;
