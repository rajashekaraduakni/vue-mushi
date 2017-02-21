import path from 'path';
import config from '../config';

const resolvePath = (dir) => {
	return path.resolve(__dirname, '..', '..', dir);
};

export default {
	entry: {
		docs: './docs/src/index.js'
	},
	output: {
		path: config.rootPath,
		publicPath: config.publicPath,
		filename: '[name].[chunkhash:8].js',
	},
	resolve: {
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: 'node_modules',
				include: [
					resolvePath('docs')
				]
			},
		]
	}
};
