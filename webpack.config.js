var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    // example: 'index.ts'
    mailbox: 'mailbox/mailbox.ts',
    todo: 'todo/todo.ts'
    // uitest: 'uitest.ts'
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js'
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: ['', '.js', '.ts'],
    root: [
      path.join(__dirname, 'src'),
    ]
  },
  module: {
    loaders: [
      {
        name: 'ts',
        test: /\.ts?$/,
        loader: 'ts-loader'
      }
    ]
  }
}
