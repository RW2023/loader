import type { NextConfig } from 'next';

const createPWAConfig = async (): Promise<NextConfig> => {
  const { default: withPWA } = await import('next-pwa');

  return withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
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
