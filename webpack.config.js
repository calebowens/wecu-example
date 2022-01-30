const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,

  entry: './src/main.ts',

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
};