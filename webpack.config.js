var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ExtractTextPluginConfig = new ExtractTextPlugin(
  'style/main.css', {
    allChunks: true
});
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    main: './app/app.js'
  },
  output: {
    filename: "index.js",
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'react-hot-loader/webpack'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
	      loader: ExtractTextPluginConfig.extract('css!sass')
      }
    ]
  },
  plugins: [
    ExtractTextPluginConfig,
    HTMLWebpackPluginConfig
  ]
}
