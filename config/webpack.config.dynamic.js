
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    main: './src/02-dynamic-import/index.js'
  },
  output: {
    path: path.resolve(__dirname, "../dist", "dynamic"), //所有输出文件的目标路径;必须是绝对路径
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dynamic import',
      template: './src/02-dynamic-import/index.html',
      filename: 'index.html'
    })
  ]
}
