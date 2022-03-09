const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily:{
      'body': 'IRANSans'
    },
    extend: {
      padding:{
        'md':'56%'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    plugin(function({ addVariant }) {
      addVariant('lable-checked', '&:checked ~ label')
    })
  ],
}
