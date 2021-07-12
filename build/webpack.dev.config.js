const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = webpackMerge(baseWebpackConfig, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './../dist/index.html'),
      title: 'demo',
      template: 'src/index.html',
      inject: true,
    })
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck:true,
    hot: true,
    contentBase: false,
    compress: true,
    // port: "8085",
    publicPath: "/",
    proxy: {},
  }
});
