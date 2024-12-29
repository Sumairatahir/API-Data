import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'], // Allowed domains
  },
};

export default nextConfig;
