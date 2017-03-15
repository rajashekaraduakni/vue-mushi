import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import baseWebpackConfig from './base';

const version = require('../../package.json').version;

export default merge(baseWebpackConfig, {
	entry: './src/index.js',
	output: {
		path: './dist',
		publicPath: '',
		filename: 'vue-mushi.js',
		chunkFilename: 'vue-mushi.js',
		library: 'VueMushi',
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
			sourceMap: false
		}),
		new webpack.BannerPlugin({
			banner: `/*!
			  * Vue Mushi v${version}
			  * * Released under the MIT License.
			  * */   `,
			raw: true,
			entryOnly: true
		}),
	]
});
