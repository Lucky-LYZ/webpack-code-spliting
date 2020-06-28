const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    // entry为一个对象，每个属性名代表一个入口，属性值为入口js文件的地址，打包结果是相应的生成多套文件；
    // 当entry为数组时，表示将数组的所有文件打包为一个文件；
    index: './src/multi-entry/pages/index/index.js',
    album: './src/multi-entry/pages/album/album.js'
  },
  output: {
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
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/templates/index.html',
      filename: 'index.html',
      chunks: ['index'], // 为index指定特定的模板文件
    }),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/templates/album.html',
      filename: 'album.html',
      chunks: ['album'], // 为album指定特定的模板文件
    })
  ]
}
