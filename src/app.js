import './app.scss';
// import { RenderSourcesList, RenderArticlesList } from './render';
import renderSection, { request, generateUrl } from './helpers';
// import SourcesListDecorator from './decorators';

class App {
  constructor(API, apiKey) {
    if (App.instance) {
      return App.instance;
    }

    this.API = API;
    this.apiKey = apiKey;
    this.sourcesUrl = 'sources';
    this.sourcesParams = 'language=en';
    this.sourcesId = 'sources-list';
    this.articlesUrl = 'top-headlines';
    this.articlesParams = 'sources=the-next-web,the-verge';
    this.articlesId = 'articles-list';

    App.instance = this;
  }

  get getSourcesDefaults() {
    return console.log(
      `this.sourcesUrl: ${this.sourcesUrl}\n`,
      `this.sourcesParams: ${this.sourcesParams}\n`,
      `this.sourcesId: ${this.sourcesId}`
    );
  }

  set changeSourcesDefaults(value) {
    [
      this.sourcesUrl = this.sourcesId,
      this.sourcesParams = this.sourcesId,
      this.sourcesId = this.sourcesId
    ] = value;
  }

  get getArticlesDefaults() {
    return console.log(
      `this.articlesUrl: ${this.articlesUrl}\n`,
      `this.articlesParams: ${this.articlesParams}\n`,
      `this.articlesId: ${this.articlesId}`
    );
  }

  set changeArticlesDefaults(value) {
    [
      this.articlesUrl = this.articlesUrl,
      this.articlesParams = this.articlesParams,
      this.articlesId = this.articlesId
    ] = value;
  }

  // get news channels
  getSources(id) {
    request(
      generateUrl(this.API, this.sourcesUrl, this.sourcesParams, this.apiKey)
    )
      .then(response => response.json())
      .then(data => renderSection('Sources', data.sources, id))
      .catch(error => new Error(error));
  }

  // get articles
  getArticles(id) {
    request(
      generateUrl(this.API, this.articlesUrl, this.articlesParams, this.apiKey)
    )
      .then(response => response.json())
      .then(data => renderSection('Articles', data.articles, id))
      .catch(error => new Error(error));
  }

  changeArticlesUrlParams(url, params) {
    this.articlesUrl = url;
    this.articlesParams = params;
  }

  // load Channel Articles
  loadChannelArticles() {
    document.addEventListener('click', e => {
      if (e.target.dataset.id) {
        this.changeArticlesUrlParams(
          'everything',
          `sources=${e.target.dataset.id}`
        );
        this.getArticles(this.articlesId);
      }
    });
  }

  // initialize loading content
  init() {
    // get news channels
    this.getSources(this.sourcesId);
    // get default articles
    this.getArticles(this.articlesId);
    // load Channel Articles
    this.loadChannelArticles();
  }
}

export default App;
