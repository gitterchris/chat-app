const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(jpe?g)|png|woff|woff2|eot|ttf\svg$/,
        use: [ {
          loader: 'url-loader',
          options: { limit: 8192 },
        } ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      [ 'dist' ],
      { root: path.join(__dirname, '..') },
    ),
    new HtmlWebpackPlugin({
      title: 'Chat App',
      template: './src/index.html',
      chunks: [ 'app' ], 
    }),
  ],
}
