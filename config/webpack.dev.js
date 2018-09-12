const path = require("path");
const webpack = require('webpack');
const merge = require('webpack-merge');//webpack配置文件合并
const baseConfig = require("./webpack.base.js");//基础配置

let config = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true,
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    compress: true,
    port: 8888
  }
};

module.exports = merge(baseConfig, config);