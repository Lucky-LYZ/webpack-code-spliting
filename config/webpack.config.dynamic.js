
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * mode:这个属性有三种取值，分别是 production、development 和 none。
 * 1. 生产模式下，Webpack 会自动优化打包结果；
 * 2. 开发模式下，Webpack 会自动优化打包速度，添加一些调试过程中的辅助；
 * 3. None 模式下，Webpack 就是运行最原始的打包，不做任何额外处理；
 */
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
