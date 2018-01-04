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
  constructor(url, id) {
    this.url = url;
    this.id = id;
  }
  request() {
    request(this.url)
      .then(response => response.json())
      .then(data => renderSection('Articles', data.articles, this.id))
      .catch(error => new Error(error));
  }
}

export default renderSection;
export { request, generateUrl, GetArticles };
