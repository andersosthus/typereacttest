var webpack = require('webpack');
var path = require('path');
var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(path);
  },
  context: __dirname,
  entry: {
    app: process.env.NODE_ENV === 'production' ? ['./app/main.ts'] : ['webpack/hot/dev-server', './app/main.ts']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist/' : './build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    alias: {}
  },
  module: {
    noParse: [],
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader',
      exclude: [bower_dir, node_modules_dir]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(woff|png)$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.ts$/,
      loader: 'typescript-loader?typescriptCompiler=jsx-typescript'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('app', null, false)
  ]
};

config.addVendor('react', path.resolve(bower_dir, 'react/react.min.js'));

module.exports = config;
