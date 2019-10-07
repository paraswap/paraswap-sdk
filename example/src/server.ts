import express = require('express');
import * as http from 'http';
import webpackDevMiddleware = require("webpack-dev-middleware");
import webpack = require('webpack');

const {PORT, NODE_ENV} = process.env;

const port = PORT || 5555;

class WebServer {
  _httpServer?: http.Server;

  async start() {

    const app = express();
    this._httpServer = new http.Server(app);

    app.set('case sensitive routing', true);
    app.set('strict routing', true);
    app.set('x-powered-by', false);
    app.set('view engine', 'html');

    if (NODE_ENV === "development") {
      let webpackConfig = require(`../webpack/webpack.development.config.js`);
      app.use(webpackDevMiddleware(webpack(webpackConfig), {publicPath: webpackConfig.output.publicPath}));
    } else {
      app.use(express.static('dist'));
    }

    this._httpServer.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  }
}

new WebServer().start();
