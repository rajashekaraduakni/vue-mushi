import path from 'path';
import merge from 'webpack-merge';
import baseWebpackConfig from './base';

export default merge(baseWebpackConfig, {
	output: {
		path: './dist',
		publicPath: '',
		filename: '[name].js',
		chunkFilename: '[name].js'
	}
});
