import path from 'path';
import config from '../config';

const resolvePath = (dir) => {
	return path.resolve(__dirname, '..', '..', dir);
};

export default {
	resolve: {
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: '/node_modules',
				options: {
					loaders: {
						sass: [
							'vue-style-loader',
							'css-loader',
							'sass-loader',
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules',
				include: [
					resolvePath('src')
				]
			},
			{
				test: /\.json$/,
				use: ['json-loader']
			}
		]
	}
};
