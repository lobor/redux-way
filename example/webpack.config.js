const path = require('path');
const webpack = require('webpack');
const Jarvis = require('webpack-jarvis');

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
	plugins: [
		new Jarvis({
			port: 1337 // optional: set a port
		  })
	],
	devServer: {
		contentBase: path.resolve(__dirname)
	}
};