'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');//webpack配置文件合并
const baseConfig = require("./webpack.base.js");//基础配置

let config = {
  mode: 'production',
  // 定义环境变量为开发环境
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      IS_DEVELOPMETN: false,
    }),
    /* 压缩优化代码开始*/
    // new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ]
};

module.exports = merge(baseConfig, config);
