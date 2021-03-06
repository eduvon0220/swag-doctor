/* eslint no-var: 0 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app',
  ],
  output: {
    path: path.join(__dirname,'dist', 'static','js'),
    filename: 'react-bundle.js',
    publicPath: '/static/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development'),
      },'__DEVTOOLS__': true,
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
    }],
  },
};
