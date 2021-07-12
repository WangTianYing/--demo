const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = webpackMerge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './../dist/index.html'),
      template: 'src/index.html',
      // inject: true,
      title: 'demo',
      hash: true,
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        html5: true,
      }
    }),
    new CleanWebpackPlugin(),
  //   new OptimizeCSSPlugin({
  //     cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
  //     cssProcessorOptions: { 
  //       discardComments: { removeAll: true } 
  //     },
  //     canPrint: true //是否将插件信息打印到控制台
  // }),
  ],
  devServer: {
    historyApiFallback: true,
  },
});
