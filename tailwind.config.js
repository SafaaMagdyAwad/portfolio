module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 50%, rgba(75, 43, 238, 0.15) 0%, rgba(19, 16, 34, 0) 70%)',
      },
    },
  },
  // Adding custom utilities for the glass effect
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(31, 25, 51, 0.6)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      })
    }
  ]
}