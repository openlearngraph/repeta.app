import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages — generates ./out with plain HTML/CSS/JS.
  output: "export",
  // Pages serves directories as /path/index.html; trailing slash keeps URLs stable.
  trailingSlash: true,
  images: {
    // next/image's default loader requires a server; static export needs unoptimized.
    unoptimized: true
  }
};

export default config;
