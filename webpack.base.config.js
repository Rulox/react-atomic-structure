const HtmlWebpackPlugin = require('html-webpack-plugin'),
      StyleLintPlugin   = require('stylelint-webpack-plugin');

const path              = require('path'),
      webpack           = require('webpack');

// Plugins
const StyleLintPluginConfig = new StyleLintPlugin({
  configFile: '.stylelintrc',
  files: [
    'app/*.s?(a|c)ss',
    'app/components/*/*.s?(a|c)ss',
    'app/components/*/*/*.s?(a|c)ss'
  ],
  failOnError: false,
  quiet: false,
});
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"),
  filename: 'index.html',
});

// Rules
const jsRules = {
  test: /\.(js|jsx)$/,
  use: 'babel-loader',
  exclude: /node_modules/
};
const fileRules = {
  test: /\.(png|jpg|gif|svg|otf|eot|ttf|woff)$/,
  loader: 'file-loader',
  options: {
    publicPath: "./",
    outputPath: './assets/'
  }
};
const eslintRules = {
  enforce: "pre",
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: "eslint-loader",
  options: {
    emitError: true,
    failOnError: true
  }
};

module.exports = {
  entry: './app/app.jsx',
  module: {
    rules: [
      eslintRules,
      jsRules,
      fileRules,
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    StyleLintPluginConfig
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { '@': path.join(__dirname) }
  },
};
