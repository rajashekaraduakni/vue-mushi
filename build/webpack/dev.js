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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'demo/index.html',
			title: 'Vue Mushi',
			inject: true,
			chunks: ['demo']
		})
	]
})
