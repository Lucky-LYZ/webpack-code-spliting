import fetchApi from '../../common/fetch';
import '../../common/global.css';
import './index.css';
import h2 from './test1';
import h4 from './test2';

const mainElement = document.querySelector('.main');

fetchApi('/posts').then(data => {
  mainElement.innerHTML = ''; // remove loading

  mainElement.appendChild(h2);
  mainElement.appendChild(h4);


  data.forEach(item => {
    const article = document.createElement('article');
    article.className = 'post';

    const h2 = document.createElement('h2');
    h2.textContent = item.title;
    article.appendChild(h2);

    const paragraph = document.createElement('p');
    paragraph.textContent = item.body;
    article.appendChild(paragraph);

    mainElement.appendChild(article);
  })
})
