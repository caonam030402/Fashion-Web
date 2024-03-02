/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.etq-amsterdam.com",
      },
    ],
  },
};

export default nextConfig;
