declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  interface PWAOptions {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    scope?: string;
    sw?: string;
    runtimeCaching?: unknown[]; // you can refine this if needed
    buildExcludes?: RegExp[];
    fallback?: {
      [key: string]: string;
    };
    [key: string]: unknown; // ← ✅ replaces any with unknown for type safety
  }

  export default function withPWA(
    options: PWAOptions
  ): (nextConfig: NextConfig) => NextConfig;
}
