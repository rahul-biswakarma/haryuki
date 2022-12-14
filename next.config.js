/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    // Required:
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          subsets: [
            "latin",
            "number",
            "latin-uppercase",
            "latin-lowercase",
            "punctuation",
          ],
        },
      },
    ],
  },
};

module.exports = nextConfig;
