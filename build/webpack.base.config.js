const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    // filename: "js/[name].[hash].js",
    filename: '[name].js',
    chunkFilename: 'js/[name][hash:5].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, '..', "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          // 　MiniCssExtractPlugin.loader,
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ]
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          // 　MiniCssExtractPlugin.loader,
          {loader: "style-loader"},
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                config: {
                    path: 'postcss.config.js'
                }
            }
        }
        ]
      },
      {
        test: /\.less$/,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        
          {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                config: {
                    path: 'postcss.config.js'
                }
            }
        }
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
 
//   plugins: [  
//     new MiniCssExtractPlugin({// css单独提取
//         filename: "./css/[name].css",
//         // chunkFilename: "[id].css"
//         ignoreOrder:true
//     })
// ],
  stats: {children: false},
  performance: {
    hints: false
  }
};
