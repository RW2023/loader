import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import daisyui from 'daisyui';

const config: Config & { daisyui?: unknown } = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ash-gray': 'hsl(159, 16%, 79%)',
        'ash-gray-2': 'hsl(184, 12%, 72%)',
        'cadet-gray': 'hsl(210, 5%, 64%)',
        'taupe-gray': 'hsl(273, 4%, 52%)',
        'wenge': 'hsl(346, 8%, 31%)',
      },
    },
  },
  plugins: [
    daisyui as ReturnType<typeof plugin>
  ],
  daisyui: {
    themes: [
      {
        customlight: {
          'primary': '#847e89',
          'secondary': '#9fa4a9',
          'accent': '#c2d3cd',
          'neutral': '#afbfc0',
          'base-100': '#ffffff',
          'info': '#afbfc0',
          'success': '#c2d3cd',
          'warning': '#847e89',
          'error': '#56494c',
        },
      },
      {
        customdark: {
          'primary': '#c2d3cd',
          'secondary': '#afbfc0',
          'accent': '#9fa4a9',
          'neutral': '#847e89',
          'base-100': '#0a0a0a',
          'info': '#afbfc0',
          'success': '#9fa4a9',
          'warning': '#847e89',
          'error': '#56494c',
        },
      },
    ],
  },
};

export default config;