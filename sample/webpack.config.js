const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =  {
   entry: './src/index.js',
   output: {
      filename: 'assets/js/bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
         template: './index.html',
      })
   ],
   devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      compress: false,
      port: 5000,
      historyApiFallback: true,
      stats: 'errors-only',
      hot: true,
      open: true
   },
   devtool: 'inline-source-map'
};