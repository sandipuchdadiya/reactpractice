var React = require('react');
var Webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index',
  output: {
    filename: 'browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include:[path.resolve(__dirname, './index'), 
                 path.resolve(__dirname,'./Component1'),
                 path.resolve(__dirname,'./Component2'),
                 path.resolve(__dirname,'./components')],
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};
