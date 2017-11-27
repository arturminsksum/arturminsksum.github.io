import { RenderSourceList, RenderArticleList } from "./render.js";
import promise from "./promise.js";
import generateUrl from "./generateUrl.js";

const urlSources = generateUrl("sources", "language=en");
const urlDefault = generateUrl(
  "top-headlines",
  "sources=the-next-web,the-verge"
);

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
    const url = generateUrl("everything", `sources=${e.target.dataset.id}`);
    getArticles(url);
  }
});
