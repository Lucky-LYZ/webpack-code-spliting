
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * mode:这个属性有三种取值，分别是 production、development 和 none。
 * 1. production 生产模式下，Webpack 会自动优化打包结果；
 * 2. development 开发模式下，Webpack 会自动优化打包速度，添加一些调试过程中的辅助；
 * 3. None 模式下，Webpack 就是运行最原始的打包，不做任何额外处理；
 */
module.exports = {
  mode: 'none',
  entry: {
    app: './src/react-loadable/index.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"), //所有输出文件的目标路径;path的值必须是绝对路径（通过resolve()方法生成）
    filename: '[name].bundle.js', // 指定输出的文件名，[name]会被替换为entry的属性名
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        // 注意loader的执行顺序：从后往前（即css-loader --> style-loader）
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
      title: 'react-loadable',
      template: './src/react-loadable/index.html',
      filename: 'index.html',
    }),
  ]
}
