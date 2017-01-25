const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

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
const ExtractTextPluginConfig = new ExtractTextPlugin(
  'style/main.css', {
    allChunks: true,
  }
);
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/public/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './app/app.jsx',

  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },

  devtool: 'source-map',

  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' }
    ],
    loaders: [
      /** *** Needed for webpack 2.^ *** **/
      // { enforce: 'pre', test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader', }
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'react-hot-loader/webpack!babel' },
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel' },
      { test: /\.scss$/, loader: ExtractTextPluginConfig.extract('css!sass') },
    ],
  },

  eslint: {
    configFile: './.eslintrc',
    failOnError: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    ExtractTextPluginConfig,
    HTMLWebpackPluginConfig,
    StyleLintPluginConfig
  ],
};
