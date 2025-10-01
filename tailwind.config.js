/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1677ff',
        secondary: '#e6f4ff',
        success: '#52c41a',
        warning: '#faad14',
        danger: '#f5222d',
        light: '#f8f9fa',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.nav-action': {
          'transition': 'all 0.2s ease',
          'cursor': 'pointer',
          '&:active': {
            'opacity': '0.7',
          },
        },
        '.card-shadow': {
          'box-shadow': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        '.nav-back': {
          'cursor': 'pointer',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            'display': 'none',
          },
        },
        '.bg-blur': {
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
        },
      }, {})
    }
  ],
}