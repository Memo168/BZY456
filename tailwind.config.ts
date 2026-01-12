import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        xl: '1280px', // 与 max-w-7xl 对应
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#8B3A3A', // 你的深红品牌色
          light: '#a64b4b',
          dark: '#662727',
        },
        gray: {
          900: '#1a1a1a',
          800: '#2e2e2e',
          700: '#4d4d4d',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans SC"', // 中文字体
          '"Inter"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 文章/内容推荐用
  ],
}

export default config
