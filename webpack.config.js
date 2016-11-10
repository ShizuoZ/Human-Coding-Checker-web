/**
 * Created by edward on 11/10/16.
 */
var webpack = require('webpack');
module.exports = {
  entry: [
    // "/static/jsx/main.js"
  ],
  output: {
    path: __dirname + '/static',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  ]
};