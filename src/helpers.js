import { RenderSourcesList, RenderArticlesList } from './render';
import SourcesListDecorator from './decorators';

const renderSection = (type, data, id) => {
  let render;
  switch (type) {
    case 'Sources':
      render = new RenderSourcesList(data, id);
      render = new SourcesListDecorator(render);
      break;
    case 'Articles':
      render = new RenderArticlesList(data, id);
      break;
    default:
      break;
  }
  render.insertHTML();
};

const request = url => fetch(url).catch(error => new Error(error));
const generateUrl = (api, type, params, key) =>
  `${api}/${type}?${params}&apiKey=${key}`;

class GetArticles {
  constructor(api, key, id) {
    this.API = api;
    this.apiKey = key;
    this.id = id;
    this.cachedArticles = {};
  }
  showArticles(type, params) {
    if (this.cachedArticles.hasOwnProperty(params)) {
      renderSection('Articles', this.cachedArticles[params], this.id);
      return;
    }
    request(generateUrl(this.API, type, `sources=${params}`, this.apiKey))
      .then(response => response.json())
      .then(data => {
        renderSection('Articles', data.articles, this.id);
        this.cachedArticles[params] = data.articles;
      })
      .catch(error => new Error(error));
  }
}

class GetArticlesProxy {
  constructor(api, key, id) {
    this.API = api;
    this.apiKey = key;
    this.id = id;
  }
  init() {
    if (!this.articlesList) {
      this.articlesList = new GetArticles(this.API, this.apiKey, this.id);
    }
  }
  showArticles(type, params) {
    this.init();
    this.articlesList.showArticles(type, params);
  }
}

export default renderSection;
export { request, generateUrl, GetArticles, GetArticlesProxy };
