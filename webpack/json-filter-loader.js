module.exports = function(content) {
  let arr = JSON.parse(content);
  for (key in arr) {
    if (Number(key)) {
      delete arr[key];
    }
  }
  return `export default ${JSON.stringify(arr)}`;
};
