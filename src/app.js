import './app.scss';
// import { RenderSourcesList, RenderArticlesList } from './render';
import renderSection, {
  request,
  generateUrl,
  GetArticles,
  GetArticlesProxy
} from './helpers';
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
    this.articlesParams = 'the-next-web,the-verge';
    this.articlesId = 'articles-list';
    this.articles = null;

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

  // load Channel Articles
  loadChannelArticles() {
    document.addEventListener('click', e => {
      if (!this.articles) {
        this.articles = new GetArticlesProxy(
          this.API,
          this.apiKey,
          this.articlesId
        );
      }
      this.articles.showArticles('everything', e.target.dataset.id);
    });
  }

  // initialize loading content
  init() {
    // get news channels
    this.getSources(this.sourcesId);
    // get default articles
    const articles = new GetArticles(this.API, this.apiKey, this.articlesId);
    articles.showArticles(this.articlesUrl, this.articlesParams);
    // load Channel Articles
    this.loadChannelArticles();
  }
}

export default App;
