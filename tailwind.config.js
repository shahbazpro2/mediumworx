/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'diamonds': 'url("/assets/images/diamonds.png")',
      },
      colors: {
        'primary': '#02075d',
        "primary-light": "#FFF2F2",
        'secondary': '#F6FBFA',
        'light': '#fff2f296',
      }
    },
  },
  plugins: [],
}
