
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
    /**
     * @description entry为一个对象，每个属性名代表一个入口，属性值为入口js文件的地址，打包结果是相应的生成多套文件；
     * 当entry为数组时，表示将数组的所有文件打包为一个文件；
     */
    page1: './src/01-multi-entry/pages/page1/index.js',
    page2: './src/01-multi-entry/pages/page2/index.js'
  },
  output: {
    path: path.resolve(__dirname, "../dist", "multi"), //所有输出文件的目标路径;path的值必须是绝对路径（通过resolve()方法生成）
    filename: '[name].bundle.js', // 指定输出的文件名，[name]会被替换为entry的属性名
  },
  optimization: {
    splitChunks: {
      // 自动提取所有公共模块到单独 bundle (dist/album~index.bundle.js)
      chunks: 'all'
    }
  },
  module: {
    rules: [
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
      title: 'Multi Entry',
      template: './src/01-multi-entry/templates/page1.html',
      filename: 'page1.html',
      chunks: ['page1'], // 为page1指定特定的html模板文件
    }),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/01-multi-entry/templates/page2.html',
      filename: 'page2.html',
      chunks: ['page2'], // 为page2指定特定的html模板文件
    })
  ]
}
