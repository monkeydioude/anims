const path = require('path');

module.exports = {
  entry: {
    'test-2': './demo/test-2.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
        // include: __dirname
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      zizo: path.resolve(__dirname, "../zizo"),
      gloop: path.resolve(__dirname, "../gloop"),
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  watch: true
};
