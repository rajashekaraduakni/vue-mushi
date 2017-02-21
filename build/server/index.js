import path from 'path';
import express from 'express';
import chalk from 'chalk';
import webpack from 'webpack';
import webpackConfig from '../webpack/dev';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '../config';

const app = express();
const compiler = webpack(webpackConfig);
const rootPath = path.join(__dirname, '..', '..');

const devMiddlewareInstance = devMiddleware(compiler, {
	quiet: false,
	publicPath: config.publicPath,
	index: config.indexPath
});

const hotMiddlewareInstance = hotMiddleware(compiler, {
	log() { }
});

compiler.plugin('compilation', (compilation) => {
	compilation.plugin('html-webpack-plugin-after-emit', (data, done) => {
		hotMiddlewareInstance.publish({ action: 'reload' });

		done();
	});
});

app.use(devMiddlewareInstance);
app.use(hotMiddlewareInstance);
app.use('/', express.static(path.join(rootPath, config.docsPath)));

devMiddlewareInstance.waitUntilValid(() => {
	let uri = 'http://localhost:8080';

	console.log(chalk.blue('> Listening at ' + uri + '\n'));
});

export default app.listen(8080, (error) => {
	if(error) {
		console.log(chalk.red(error));

		return;
	}
});
