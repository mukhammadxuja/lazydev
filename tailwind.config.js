module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        darkPrimary: 'var(--color-dark-primary)',
        darkSecondary: 'var(--color-dark-secondary)',
      },
      fontFamily: {
        poppins: ['Poppins', 'Monda'],
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0)',
      },
      animation: {
        blob: 'blob 7s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-ripple')(),
  ],
};
