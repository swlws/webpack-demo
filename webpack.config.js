const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
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
        }]
    }
};