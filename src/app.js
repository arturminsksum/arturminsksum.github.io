import "./app.scss";

class App {
  constructor(API, apiKey) {
    if (App.instance) {
      return App.instance;
    }

    this.API = API;
    this.apiKey = apiKey;
    this.sourcesUrl = "sources";
    this.sourcesParams = "language=en";
    this.sourcesId = "sources-list";
    this.articlesUrl = "top-headlines";
    this.articlesParams = "sources=the-next-web,the-verge";
    this.articlesId = "articles-list";

    App.instance = this;
  }

  get getSourcesDefaults() {
    console.log(
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
    console.log(
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

  generateUrl(type, params) {
    return `${this.API}/${type}?${params}&apiKey=${this.apiKey}`;
  }

  request(url) {
    return fetch(url).catch(error => new Error(error));
  }

  insertHTML(markup, id) {
    const container = document.getElementById(id);
    container.innerHTML = markup;
  }

  renderSourcesList(data, id) {
    const markup = `
		${data
      .map(item => {
        const { id, name } = item;
        return `<li><a href="javascript:void(0)" data-id="${id}">${name}</a></li>`;
      })
      .join("")}
    `;
    this.insertHTML(markup, id);
  }

  // get news channels
  getSources(id) {
    this.request(this.generateUrl(this.sourcesUrl, this.sourcesParams))
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.renderSourcesList(data.sources, id);
      })
      .catch(error => new Error(error));
  }

  renderArticlesList(data, id) {
    const markup = `
		${data
      .map((item, index) => {
        const {
          urlToImage: image,
          title,
          url: link,
          description: text,
          publishedAt
        } = item;
        const date = publishedAt.slice(0, 10);
        return `
          ${index % 3 ? "" : '<div class="columns">'}
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="${
                      image
                        ? image
                        : "https://bulma.io/images/placeholders/1280x960.png"
                    }" alt="${title}">
                  </figure>
                </div>
                <div class="card-content">
                  <a href="${link}" class="media">
                    <p class="title is-4">${title}</p>
                  </a>

                  <div class="content">
                    ${text}
                    <br>
                    <br>
                    <i>Date: <time datetime="${date}">${date}</time></i>
                  </div>
                </div>
              </div>
            </div>
          ${(index + 1) % 3 ? "" : "</div>"}
        `;
      })
      .join("")}
	  `;
    this.insertHTML(markup, id);
  }

  // get articles
  getArticles(id) {
    this.request(this.generateUrl(this.articlesUrl, this.articlesParams))
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.renderArticlesList(data.articles, id);
      })
      .catch(error => new Error(error));
  }

  changeArticlesUrlParams(url, params) {
    this.articlesUrl = url;
    this.articlesParams = params;
  }

  // load Channel Articles
  loadChannelArticles() {
    document.addEventListener("click", e => {
      if (e.target.dataset.id) {
        this.changeArticlesUrlParams(
          "everything",
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
