const merge = require('webpack-merge');

const common = require('./webpack.common.config.js');

module.exports = merge(common(), {
  devtool: 'source-map',
  performance: {
    hints: 'warning'
  },
  mode: 'development'
});
