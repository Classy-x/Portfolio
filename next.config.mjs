const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/Portfolio" : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
