/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#081f4d',
        'secondary': '#0083ff',
        'our-bg': '#d9e6ff',
        'gen': '#384d71',

      },
      fontFamily: {
       'title': ['sansita', 'sans-serif'],
       'body': ['lato', 'sans-serif']
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.2))' },
        },
      },
    },
  },
  plugins: [],
}
