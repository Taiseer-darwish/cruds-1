/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        '9':'9px'
      },
      fontFamily:{
        Cairo:['Cairo'],
        Comfortaa:['Comfortaa'],
        Tomorrow:['Tomorrow'],
       },
       padding:{
        thpadding:['3px']
       },
       translate:{
        x:['-50%'],
        y:['-50%'],
       },
    },
  },
  plugins: [],
}
