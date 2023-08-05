/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'hsl(26, 100%, 55%)',
          200: 'hsl(25, 100% 94%)'
        },
        secondary:{
          100:'hsl(220, 13%, 13%)',
          200:'hsl(219, 9%, 45%)',
          300:'hsl(223, 64%, 98%)',
          400:'hsl(0, 0%, 100%)'
        }
      }
    },
  },
  plugins: [],
}

