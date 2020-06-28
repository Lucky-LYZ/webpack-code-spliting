// import posts from './posts/posts'
// import album from './album/album'

// 如果将多个动态引入的文件，统一设置为/* webpackChunkName: 'components' */，则他们会被打包到同一个components.bundle.js中
const render = () => {
  const hash = window.location.hash || '#posts'

  const mainElement = document.querySelector('.main')

  mainElement.innerHTML = ''

  if (hash === '#posts') {
    // mainElement.appendChild(posts())
    import(/* webpackChunkName: 'posts' */'./posts/posts').then(({ default: posts }) => {
      mainElement.appendChild(posts())
    })
  } else if (hash === '#album') {
    // mainElement.appendChild(album())
	// 切换album之后会发现，html在head中动态追加了“<script charset="utf-8" src="album.bundle.js"></script>”
    import(/* webpackChunkName: 'album' */'./album/album').then(({ default: album }) => {
      mainElement.appendChild(album())
    })
  }
}

render()

window.addEventListener('hashchange', render)
