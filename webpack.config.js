const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/app/index.js'),
  ],
  // Server Configuration options
  devServer: {
    contentBase: 'dist', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'index.js',
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    new TransferWebpackPlugin([
      {from: 'dist'},
    ], path.resolve(__dirname)),
  ],
  module: {
    loaders: [
        // React-hot loader and
         // All .js files
        { test: /\.js$/, loader: 'react-hot', exclude: [nodeModulesPath]},
        { test: /\.js$/, loader: 'babel-loader', exclude: [nodeModulesPath]},
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192', exclude: [nodeModulesPath] }, 
    ],
  },
};

module.exports = config;