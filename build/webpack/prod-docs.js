import path from 'path';

const resolvePath = (dir) => {
	return path.resolve(__dirname, '..', '..', dir);
};

export default {
	entry: {
		docs: './docs/src/index.js'
	},
	output: {
		path: './dist',
		publicPath: '',
		filename: '[name].js',
		chunkFilename: '[name].js'
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
