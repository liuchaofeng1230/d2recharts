const WebpackDevServer = require('webpack-dev-server');
const gulp = require('gulp');
const gutil = require('gulp-util');
// const open = require('open');
const webpack = require('webpack');
const config = require('./config');
const webpackDevConf = require('../webpack-dev.config');

const LOCALHOST = '127.0.0.1';
const devPort = config.ports.dev;

gulp.task('dev', (/** done */) => {
  const compiler = webpack(webpackDevConf);
  const devSvr = new WebpackDevServer(compiler, {
    "watch-poll": true,
    contentBase: webpackDevConf.output.path,
    hot: true,
    publicPath: webpackDevConf.output.publicPath,
    stats: webpackDevConf.devServer.stats, // FIXME this is for working on windows
  });

  devSvr.listen(devPort, LOCALHOST, (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    const url = `http://${LOCALHOST}:${devPort}/`;
    gutil.log('[webpack-dev-server]', url);
    // open(url);
    // keep the devSvr alive
    // done();
  });
});
