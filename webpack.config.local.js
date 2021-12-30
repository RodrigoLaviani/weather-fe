const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (argv) => (merge(common({ mode: 'development' }, argv), { module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
              loader: 'style-loader',
          },
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true,
              },
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true,
              },
          },
      ],
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
}))
