var path = require('path');
var webpack = require('webpack');

const VENDOR_LIBS = [
  'faker',
];

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  }
};
