const merge         = require("webpack-merge"),
      path          = require('path'),
      webpack       = require('webpack');

const GlobImporter  = require('node-sass-glob-importer');

const BASE_CONFIG   = require("./webpack.base.config");

// Rules
const sassRules = { 
  loader: "sass-loader",
  options: { 
    importer: GlobImporter()
  }
};
const postcssRules = { 
  loader: 'postcss-loader',
  options: {
    config: {
      path: './client/assets/css/postcss.config.js'
    }
  }
};
const cssRules = { 
  test: /\.scss$/, 
  use: [
    "style-loader",
    "css-loader", 
    postcssRules,
    sassRules
  ],
};

module.exports = merge(BASE_CONFIG, {
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  devtool: 'source-map',
  devserver: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    progress: true,
    noInfo: true,
    port: 3200
  },
});