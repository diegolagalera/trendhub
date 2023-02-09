import colors from 'tailwindcss/colors'

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.blue
      }
    },
  
    content: [
      './node_modules/flowbite/**/*.js'
    ],
    plugins: [
      require('@tailwindcss/forms', 'flowbite/plugin')
    ]

  }
}