/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /** Laranja Ortoconex (dois tons principais: ~400 claro, ~600–700 mais profundo). */
        primary: {
          50: '#fef3e2',
          100: '#fde4b8',
          200: '#fccf8a',
          300: '#fbb95c',
          400: '#faa83a',
          500: '#f9971e',
          600: '#e88814',
          700: '#d17710',
          800: '#b9660d',
          900: '#964a08',
        },
        /** Amarelo‑verde / chartreuse — acentos discretos junto do primary (laranja). */
        brandLime: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
        },
        dark: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#303030',
          800: '#212121',
          900: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sora: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-left-to-right': 'slideLeftToRight 20s ease-in-out infinite alternate',
        'slide-right-to-left': 'slideRightToLeft 20s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 2s ease-in',
        /** Catálogo: card de detalhe ao escolher produto */
        'product-detail-shell':
          'productDetailShell 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'product-detail-visual':
          'productDetailVisual 0.65s cubic-bezier(0.22, 1, 0.36, 1) both',
        'product-detail-prose':
          'productDetailProse 0.52s cubic-bezier(0.22, 1, 0.36, 1) 0.11s both',
      },
      keyframes: {
        slideLeftToRight: {
          '0%': { transform: 'translateX(-3%)' },
          '100%': { transform: 'translateX(3%)' },
        },
        slideRightToLeft: {
          '0%': { transform: 'translateX(3%)' },
          '100%': { transform: 'translateX(-3%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        productDetailShell: {
          '0%': { opacity: '0', transform: 'translateY(1.15rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        productDetailVisual: {
          '0%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1)' },
        },
        productDetailProse: {
          '0%': { opacity: '0', transform: 'translateY(0.65rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
