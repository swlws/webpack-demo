const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: { // auto refresh browser,need install webpack-dev-server package
    contentBase: './dist'
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
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      title: 'Output   Management'
    })
  ],
  module: {
    rules: [{ // CSS资源加载
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, { // 图片资源加载
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }, { // 字体资源加载
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }, {
      test: /\.(csv|tsv)$/,
      use: ['csv-loader']
    }, {
      test: /\.xml$/,
      use: ['xml-loader']
    }]
  }
};