import { RenderSourceList, RenderArticleList } from "./render.js";
import httpGet from "./httpGet.js";

const apiKey = "5df48f0ee1184466b3bd5a825d888184";
const urlSources = `
https://newsapi.org/v2/sources?
language=en&
apiKey=${apiKey}
`;

const getArticles = url => {
  httpGet(url).then(response => {
    let renderArticles = new RenderArticleList(
      response,
      "articles",
      "articles-list"
    );
    renderArticles.insertHTML();
  });
};

const req = new Request(urlSources);
fetch(req)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let renderSources = new RenderSourceList(data, "sources", "sources-list");
    renderSources.insertHTML();
  })
  .catch(error => new Error(error));

let urlDefault = `
https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge&apiKey=${
  apiKey
}`;

getArticles(urlDefault);

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
