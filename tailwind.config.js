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
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
