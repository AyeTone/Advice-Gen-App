module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayishBlue: 'hsl(217, 19%, 38%)',
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        // ...
      },
      fontFamily: {
        Manrope:['Manrope']
      },
      boxShadow: {
        allsides : '0px 0px 10px 6px rgb(0 0 0 / 0.1), 0 0px 10px -6px rgb(0 0 0 / 0.1)'
      },
      animation: {
        'spin-slow': 'spin 2.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
