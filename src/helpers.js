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

export default renderSection;
export { request, generateUrl };
