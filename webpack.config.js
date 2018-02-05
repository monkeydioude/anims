const path = require('path');

module.exports = {
  entry: {
    'test-1': './demo/demo-1.js',
    'test-2': './demo/demo-2.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true
};