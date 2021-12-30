const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

// Common config for both webpack configs
module.exports = ({ mode }, argv) => ({  
  mode: mode || 'production',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    publicPath: mode === 'development' ? '/' : './'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
        terserOptions: {
            format: {
                comments: false,
            },
        },
        extractComments: false,
    })],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    })
  ]
})
