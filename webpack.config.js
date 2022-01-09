const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (argv) => (merge(common(argv), {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        use: [{
            loader: 'eslint-loader', 
            options: { fix: true }
        }],
        include: path.resolve(__dirname, './src/**/*.js'),
        exclude: /node_modules/
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
  }
}))
