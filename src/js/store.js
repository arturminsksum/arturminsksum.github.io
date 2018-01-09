import initialState from '../json/initialState.json';

// store
const createStore = reducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => {
      listener();
    });
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
    listeners
  };
};

// reducer
const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return {
        articlesUrl: action.url,
        articlesParams: action.params
      };
    default:
      return state;
  }
};

// initialize store
const store = createStore(articles);

// action
const getArticles = (url, params) => ({
  type: 'GET_ARTICLES',
  url: url,
  params: params
});

export default store;
export { getArticles };
