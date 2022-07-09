module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{svelte,css}'],
  theme: {
    letterSpacing: {
      tightest: '-.075em'
    },
    extend: {
      colors: {
        'w': '#d1d1d1',
        'tw': '#ffffff'
      }
    }
  }
}