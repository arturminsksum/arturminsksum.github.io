import { GetArticlesProxy } from './helpers';
import store from './store';

let proxy;

const loadChannelArticles = (api, key, id) => () => {
  if (!proxy) {
    proxy = new GetArticlesProxy(api, key, id);
  }
  const { articlesUrl, articlesParams } = store.getState();
  proxy.showArticles(articlesUrl, articlesParams);
};

export default loadChannelArticles;
