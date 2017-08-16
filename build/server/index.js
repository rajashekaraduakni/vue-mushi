import path from 'path';
import express from 'express';
import chalk from 'chalk';
import webpack from 'webpack';
import webpackConfig from '../webpack/dev';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

const app = express();
const compiler = webpack(webpackConfig);
const rootPath = path.join(__dirname, '..', '..');

const devMiddlewareInstance = devMiddleware(compiler, {
	noInfo: true,
	publicPath: '/',
	index: 'index.html'
});

const hotMiddlewareInstance = hotMiddleware(compiler, {});

app.use(devMiddlewareInstance);
app.use(hotMiddlewareInstance);
app.use('/', express.static(path.join(rootPath, 'public')));

devMiddlewareInstance.waitUntilValid(() => {
	let uri = 'http://localhost:8080';

	console.log(chalk.blue('> Listening at ' + uri + '\n'));
});

export default app.listen(8080, (error) => {
	if(error)
		return console.log(chalk.red(error));
});
