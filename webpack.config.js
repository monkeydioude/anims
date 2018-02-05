const path = require('path');

module.exports = {
  entry: './demo/demo-1.js',
  output: {
    filename: 'test-1.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true
};