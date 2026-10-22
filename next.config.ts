import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pre-render every route to static HTML in out/ so Azure can serve plain files.
  output: "export",
  // Emit /aboutus/index.html so any static host resolves /aboutus without rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
