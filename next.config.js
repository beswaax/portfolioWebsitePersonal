module.exports = {
  distDir: "out",
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ["res.cloudinary.com"],
    path: "/_next/image",
    loader: "default",
  },
};
