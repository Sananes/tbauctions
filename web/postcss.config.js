'use strict'

const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

module.exports = [
  pxtorem({
    rootValue: 16,
    unitPrecision: 5,
    propList: [
      'font',
      'font-size',
      'line-height',
      'letter-spacing',
      'margin',
      'margin-top',
      'margin-left',
      'margin-bottom',
      'margin-right',
      'padding',
      'padding-top',
      'padding-left',
      'padding-bottom',
      'padding-right',
      'border-radius',
      'width',
      'height',
      'max-width'
    ],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0
  }),
  autoprefixer()
]
