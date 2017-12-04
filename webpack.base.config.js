const HtmlWebpackPlugin = require('html-webpack-plugin');
      // ExtractTextPlugin = require('extract-text-webpack-plugin');
      // StyleLintPlugin   = require('stylelint-webpack-plugin');

const path              = require('path'),
      webpack           = require('webpack');

// Plugins
// const StyleLintPluginConfig = new StyleLintPlugin({
//   configFile: '.stylelintrc',
//   files: [
//     'app/*.s?(a|c)ss',
//     'app/components/*/*.s?(a|c)ss',
//     'app/components/*/*/*.s?(a|c)ss'
//   ],
//   failOnError: false,
//   quiet: false,
// });
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"),
  filename: 'index.html',
});

// Rules
const reactRules = {

};
const jsRules = {
  test: /\.(js|jsx)$/,
  use: 'babel-loader',
  exclude: /node_modules/
};

module.exports = {
  entry: './app/app.jsx',
  module: {
    rules: [
      jsRules
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    // StyleLintPluginConfig
  ],
  // eslint: {
  //   configFile: './.eslintrc',
  //   failOnError: true
  // },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { '@': path.join(__dirname) }
  },
};
