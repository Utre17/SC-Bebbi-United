import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["nucbox-m6ultra", "100.114.118.121"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
