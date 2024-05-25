/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "export",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
