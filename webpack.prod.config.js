const ExtractTextPlugin = require('extract-text-webpack-plugin');

const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const GlobImporter = require('node-sass-glob-importer');

const BASE_CONFIG = require('./webpack.base.config');

// Plugins
const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
  minimize: true
});
const extractSass = new ExtractTextPlugin({
  filename: 'index.bundle.css',
});

// Rules
const sassRules = {
  loader: 'sass-loader',
  options: {
    importer: GlobImporter()
  }
};
const postcssRules = {
  loader: 'postcss-loader',
  options: {
    config: {
      path: './app/postcss.config.js'
    }
  }
};
const cssRules = {
  test: /\.scss$/,
  use: extractSass.extract({
    use: [
      'css-loader',
      postcssRules,
      sassRules
    ],
  })
};

const eslintRules = {
  enforce: 'pre',
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    emitError: true,
    failOnError: true
  }
};

module.exports = merge(BASE_CONFIG, {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      cssRules,
      eslintRules
    ]
  },
  plugins: [
    UglifyJsPluginConfig,
    extractSass,
    new webpack.optimize.OccurrenceOrderPlugin(true),
  ]
});
