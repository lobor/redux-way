var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname),
        filename: "dist.js",
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
	},
	devServer: {
		contentBase: path.resolve(__dirname)
	}
};