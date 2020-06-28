# webpack-code-spliting

webpack code-spliting demo.

## 三种方案
---
通过执行不同的webpack配置文件，针对不同功能点进行打包
例如： `npm run build-multi` 命令，用于验证多入口打包与公共文件单独导出
---

### 1、多入口打包
![blockchain](https://github.com/Lucky-LYZ/webpack-code-spliting/blob/master/src/multi-entry/assets/img/webpack%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%8E%E6%89%93%E5%8C%85%E7%94%9F%E6%88%90%E6%96%87%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB.png "webpack配置文件与打包生成文件之间的关系")
![blockchain](https://github.com/Lucky-LYZ/webpack-code-spliting/blob/master/src/multi-entry/assets/img/%E8%87%AA%E5%8A%A8%E5%BC%95%E5%85%A5%E5%85%AC%E5%85%B1%E6%89%93%E5%8C%85%E7%9A%84%E4%BB%A3%E7%A0%81.png "自动引入公共打包的代码")

### 2、公共文件提取

### 3、按需加载

## 其他
