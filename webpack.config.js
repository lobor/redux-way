var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve('./dist'),
        filename: "index.js",
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    }
};