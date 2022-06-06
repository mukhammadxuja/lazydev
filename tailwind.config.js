module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
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
        'gradient-radial': 'radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0)',
      }
    },
    ripple: (theme) => ({
      colors: theme('colors'),
      modifierTransition: 'background 0.3s',
      activeTransition: 'background 0.1s',
    }),
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-ripple')(),
  ],
};
