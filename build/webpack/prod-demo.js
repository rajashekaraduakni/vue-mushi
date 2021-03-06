import path from 'path';
import merge from 'webpack-merge';
import baseWebpackConfig from './base';

export default merge(baseWebpackConfig, {
	devtool: 'cheap-module-source-map',
	output: {
		path: config.rootPath,
		publicPath: config.publicPath,
		filename: '[name].bundle.js',
	},
	entry: {
		demo: './demo/src/index.js'
	},
	output: {
		path: './dist',
		publicPath: '',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	}
});
