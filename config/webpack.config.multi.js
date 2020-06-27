const HtmlWebpackPlugin = require('html-webpack-plugin')
const path =require( 'path');
module.exports = {
  mode: 'none',
  // 指定多个入口打包，最终输出各自的打包结果。避免所有代码打包到一块导致文件过大的问题
  entry: {
    index: './src/multi-entry/pages/page1/index.js',
    album: './src/multi-entry/pages/page2/album.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {      
      chunks: 'all', // 自动提取所有公共模块到单独 bundle
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
		// 注意loader的执行顺序，是从后往前执行（先css-loader,后style-loader）
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      title: 'Multi Entry',
      template: './src/multi-entry/templates/index.html',
      filename: 'index.html',
      chunks: ['index'], // 为不同的chunks选择不同的html模板
    }),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/multi-entry/templates/album.html',
      filename: 'album.html',
      chunks: ['album']
    })
  ]
}
