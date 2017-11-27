import { RenderSourceList, RenderArticleList } from "./render.js";
import promise from "./promise.js";

const apiKey = "5df48f0ee1184466b3bd5a825d888184";
const urlSources = `
https://newsapi.org/v2/sources?
language=en&
apiKey=${apiKey}
`;
const urlDefault = `
https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge&apiKey=${
  apiKey
}`;

const getArticles = url => {
  promise(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let renderArticles = new RenderArticleList(
        data,
        "articles",
        "articles-list"
      );
      renderArticles.insertHTML();
    });
};

const init = () => {
  // get news channel
  promise(urlSources)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let renderSources = new RenderSourceList(data, "sources", "sources-list");
      renderSources.insertHTML();
    })
    .catch(error => new Error(error));

  // get default articles
  getArticles(urlDefault);
};

// initialize loading page
init();

// load articles from choosed channel
document.addEventListener("click", e => {
  if (e.target.dataset.id) {
    const url = `
    https://newsapi.org/v2/everything?sources=${e.target.dataset.id}&apiKey=${
      apiKey
    }
    `;
    getArticles(url);
  }
});
