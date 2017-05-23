import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseWebpackConfig from './base';

export default merge(baseWebpackConfig, {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		demo: [
			'webpack-hot-middleware/client',
			'./demo/src/index.js'
		]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'demo/index.html',
			template: 'demo/index.html',
			title: 'Vue Mushi',
			inject: true,
			chunks: ['demo']
		})
	]
})
