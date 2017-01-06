var webpack = require('webpack');

var IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    contentBase: './public',
    inline: true,
    host: '0.0.0.0'
  },
  devtool: IS_PROD ? false : 'source-map',
  entry: './src/index.js',
  output: {
    path: './public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: IS_PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
};
