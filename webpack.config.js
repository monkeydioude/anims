const path = require('path');

module.exports = {
  entry: {
    'test-1-pack': './demo/test-1.js',
    'test-2-pack': './demo/test-2.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true
};