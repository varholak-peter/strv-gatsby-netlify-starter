/* eslint-disable @typescript-eslint/no-var-requires */
const postCSSImport = require('postcss-import')
const postCSSPresetEnv = require('postcss-preset-env')
const tw = require('tailwindcss')

module.exports = {
  plugins: [
    postCSSImport({
      plugins: [require('stylelint')],
    }),
    tw('./tailwind.config.js'),
    postCSSPresetEnv({
      autoprefixer: {},
      features: {
        'nesting-rules': true,
      },
      browsers: [
        'last 2 versions',
        'not < 1%',
        'not ie > 0',
        'not ie_mob > 0',
        'not dead',
        'Firefox ESR',
      ],
    }),
  ],
}
