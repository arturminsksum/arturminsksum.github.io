import '../styles/app.scss';
import renderSection, { request, generateUrl, GetArticles } from './helpers';
import loadChannelArticles from './proxy';
import store, { getArticles } from './store';

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
    this.articlesId = 'articles-list';
    this.articles = null;

    App.instance = this;
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

  // initialize loading content
  init() {
    // get news channels
    this.getSources(this.sourcesId);
    // get default articles
    const articles = new GetArticles(this.API, this.apiKey, this.articlesId);
    const { articlesUrl, articlesParams } = store.getState();
    articles.showArticles(articlesUrl, articlesParams);
    // load Channel Articles
    document.addEventListener('click', e => {
      store.dispatch(getArticles('everything', e.target.dataset.id));
    });
    store.subscribe(
      loadChannelArticles(this.API, this.apiKey, this.articlesId)
    );
  }
}

export default App;
