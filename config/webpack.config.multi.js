
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
