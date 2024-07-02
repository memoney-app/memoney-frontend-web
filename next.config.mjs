// next.config.mjs
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    if (!isServer) {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
