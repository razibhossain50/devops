import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  // Disable image optimization to allow static export
  images: {
    unoptimized: true,
  },
  // If this is a project site like https://<user>.github.io/devops
  // then the repository name should be used as basePath.
  basePath: "/devops",
  assetPrefix: "/devops/",
};

export default nextConfig;
