import webpack from 'webpack';
import build from './build';
import webpackConfig from '../webpack/prod-demo';

webpack(webpackConfig, build);
