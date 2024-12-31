/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          btn: '#ACACAC',
          btnHover: '#8D8A8A',
          sidebarContainer: '#D9D9D9',
          sidebarBackground: '#DAD8B8',
          heroBackground: '#fefbea'
        },
      },
      backgroundImage: {
        'dots-pattern': 'radial-gradient(circle, #5f5757 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}