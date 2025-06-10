import type { NextConfig } from 'next';

const createPWAConfig = async (): Promise<NextConfig> => {
  const { default: withPWA } = await import('next-pwa');
  const { default: runtimeCaching } = await import('next-pwa/cache');

  return withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  })({
    experimental: {
      serverActions: {
        bodySizeLimit: '1mb',
        allowedOrigins: ['*'],
      },
    },
  });
};

export default createPWAConfig();
