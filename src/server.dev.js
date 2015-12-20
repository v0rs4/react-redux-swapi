import Express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const webpackConfig = require('../webpack.dev.config');
const webpackCompiler = webpack(webpackConfig);
const webpackServerOptions = {
  hot: true,
  publicPath: webpackConfig.output.publicPath
};

const app = new Express();

app.use(webpackDevMiddleware(webpackCompiler, webpackServerOptions));
app.use(webpackHotMiddleware(webpackCompiler));

app.use(Express.static(path.join(__dirname, '..', 'static')));
app.use((req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'index.dev.html'));
});

app.listen(3001, '0.0.0.0', () => {
  console.info('Running on 3001');
});
