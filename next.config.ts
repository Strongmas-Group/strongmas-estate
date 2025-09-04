import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

// ✅ Safely add Netlify config without TS complaints
(nextConfig as any).experimental = {
  netlify: {
    forms: true,   // Set to false if you don't use Netlify Forms
    images: true,
  },
};

export default nextConfig;
