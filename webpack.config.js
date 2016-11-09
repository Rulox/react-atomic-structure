const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginConfig = new ExtractTextPlugin(
  'style/main.css', {
    allChunks: true,
  });
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/public/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: {
    main: './app/app.jsx',
  },
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'react-hot-loader/webpack!babel',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPluginConfig.extract('css!sass'),
      },
    ],
  },
  eslint: {
    configFile: './.eslintrc',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    ExtractTextPluginConfig,
    HTMLWebpackPluginConfig,
  ],
};
