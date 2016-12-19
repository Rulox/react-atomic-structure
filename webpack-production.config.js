const webpack = require("webpack");
const config = require('./webpack.config');
const UglifyJsPlugin = require('webpack-uglify-js-plugin');

const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
  minimize: true
});

config.output.filename = 'bundle.min.js';
config.plugins.push(UglifyJsPluginConfig);

module.exports = config;
