module.exports = {
  theme: {
    fontFamily: { 
      'display': ['Play', 'sans-serif'],
      'sans': ['Overpass', 'sans-serif'],
      'serif': ['"EB Garamond"', 'serif'],
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    options: {
      whitelistPatterns: [ 
        /-(leave|enter|appear)(|-(to|from|active))$/, 
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ],
    },
  }
}