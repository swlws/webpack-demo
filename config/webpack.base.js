'use strict';

const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dist = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    index: './app/index.js'
  },
  output: {
    path: dist,
    filename: "[name].bundle.js"
  },
  optimization: { // code splite
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [["env"], ["react"]],
          plugins: [
            "transform-class-properties"
          ]
        }
      },
      { // CSS资源加载
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, { // 图片资源加载
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, { // 字体资源加载
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }, {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../app/index.html'), to: path.resolve(__dirname, dist) }
    ])
  ]
};
