'use strict';

/** Note: this require may need to be fixed to point to the build that exports the gulp-core-build-webpack instance. */
let webpackTaskResources = require('@microsoft/sp-build-web').webpack.resources;
let webpack = webpackTaskResources.webpack;

let path = require('path');
let isProduction = process.argv.indexOf('--production') > -1;
let packageJSON = require('./package.json');

let webpackConfig = {
  context: path.join(__dirname, 'lib/'),

  entry: {
    [packageJSON.name]: './webparts/newDeps/Bootrstraper.js'
  },

  output: {
    libraryTarget: 'umd',
    path: path.join(__dirname, '/dist'),
    filename: `[name]${isProduction ? '.min' : ''}.js`
  },

  devtool: 'source-map',

  devServer: {
    stats: 'none'
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },

  plugins: [
    //  new WebpackNotifierPlugin()
  ]
};

if (isProduction) {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }));
}

module.exports = webpackConfig;
