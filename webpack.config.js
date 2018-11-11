const path = require('path');

module.exports = {
  entry: './demo/test-1.js',
  output: {
    filename: 'test-1-pack.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true
};