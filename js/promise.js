export default url => {
  return fetch(url).catch(error => new Error(error));
};
