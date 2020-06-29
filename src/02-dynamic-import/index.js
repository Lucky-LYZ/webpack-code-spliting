// import posts from './posts/posts'; // 旧版的打包方式，无法做到真正的按需导入。以下通过import().then()实现按需导入
// import album from './album/album';

/**
 * @function 魔法注释，让按需导入更直观
 * @desc 所谓魔法注释，就是在 import 函数的形式参数位置，添加一个行内注释，这个注释有一个特定的格式：webpackChunkName: ''，这样就可以给分包的 chunk 起名字了。
 * 除此之外，魔法注释还有个特殊用途：如果你的 webpackChunkName 相同的话，那相同的 webpackChunkName 最终就会被打包到一起。如果下述posts、album这两个 webpackChunkName 都设置为 components，再次运行打包，会将这两个模块打包到一个components.bundle.js文件中
 */
const render = () => {
  const hash = window.location.hash || '#posts';

  const mainElement = document.querySelector('.main');

  mainElement.innerHTML = '';

  if (hash === '#posts') {
    // mainElement.appendChild(posts()); //旧版的方式，直接将数据添加到DOM中

    // 切换posts之后会发现，html在head中动态追加了“<script charset="utf-8" src="posts.bundle.js"></script>”,也就实现了按需导入。
    import(/* webpackChunkName: 'posts' */'./posts/posts').then(({ default: posts }) => {
      mainElement.appendChild(posts());
    })
  } else if (hash === '#album') {
    // mainElement.appendChild(album()); //旧版的方式，直接将数据添加到DOM中

    import(/* webpackChunkName: 'album' */'./album/album').then(({ default: album }) => {
      mainElement.appendChild(album());
    })
  }
}

render();

window.addEventListener('hashchange', render);
