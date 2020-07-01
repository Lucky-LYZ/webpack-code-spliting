
/**
 * @function test1.js test2.js同时引用
 */
export function getMsg () {
    return `我用来测试，同一个入口文件内，多个独立组件共同引用一个依赖方法，最终的打包效果。
    \n
    查看page1.bundle.js你会发现，我虽然在不同的文件中被多次引用了，但最终打包结果中，我只被存了一份公共方法！`
}


/**
 * @function 没有任何引用的地方
 */
export function noUse () {
    return `我用来测试，没有被使用的方法，打包之后的效果。
    \n
    查看page1.bundle.js你会发现，我没有被引用的地方，但是我也在打包结果中，该如何把我剔除呢？
    \n
    欲知结果，请查看另一个项目：webpack-tree-shaking`
}